﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConsoleGame2
{

    // top and left integers for snake and fruits
    public class Position
    {
        public int left;
        public int top;
    }

    class Program
    {
        // starting length of the snake:
        private static int _length = 30;

        // list for snake points:
        private static List<Position> points = new List<Position>();

        // main function:
        static void Main(string[] args)
        {
            Console.CursorVisible = false;
            DrawScreen();
            while (true)
            {
                if (AcceptInput() || UpdateGame())
                    DrawScreen();
            }
        }

        //upate function after every 250 milliseconds:
        private static DateTime nextUpdate = DateTime.MinValue;
        private static Position _foodPosition = null;
        private static Random _rnd = new Random();
        private static bool UpdateGame()
        {
            if (DateTime.Now < nextUpdate) return false;

            if (_foodPosition == null)
            {
                _foodPosition = new Position()
                {
                    left = _rnd.Next(Console.WindowWidth),
                    top = _rnd.Next(Console.WindowHeight)
                };
            }

            if (_lastKey.HasValue)
            {
                Move(_lastKey.Value);
            }

            nextUpdate = DateTime.Now.AddMilliseconds(250);
            return true;
        }

        //snake and fruit draw function:
        private static void DrawScreen()
        {
            Console.Clear();
            foreach (var point in points)
            {
                Console.SetCursorPosition(point.left, point.top);
                Console.Write('*');
            }

            if (_foodPosition != null)
            {
                Console.SetCursorPosition(_foodPosition.left, _foodPosition.top);
                Console.Write('X');
            }
        }

        //when pressing the first key, it begins looping:
        static ConsoleKeyInfo? _lastKey;

        //Input for movement:
        private static bool AcceptInput()
        {
            if (!Console.KeyAvailable)
                return false;

            _lastKey = Console.ReadKey();

            return true;
        }

        //logic for movement:
        private static void Move(ConsoleKeyInfo key)
        {
            Position currentPos;
            if (points.Count != 0)
                currentPos = new Position() { left = points.Last().left, top = points.Last().top };
            else
                currentPos = GetStartPosition();

            switch (key.Key)
            {
                case ConsoleKey.LeftArrow:
                    currentPos.left--;
                    break;
                case ConsoleKey.RightArrow:
                    currentPos.left++;
                    break;
                case ConsoleKey.UpArrow:
                    currentPos.top--;
                    break;
                case ConsoleKey.DownArrow:
                    currentPos.top++;
                    break;

            }

            DetectCollision(currentPos);

            points.Add(currentPos);
            CleanUp();
        }

        private static void DetectCollision(Position currentPos)
        {
            // Check if snake is off the screen:
            if (currentPos.top < 0 || currentPos.top > Console.WindowHeight
                || currentPos.left < 0 || currentPos.left > Console.WindowWidth)
            {
                GameOver();
            }

            // Check if snake crashed into the tail:
            if (points.Any(p => p.left == currentPos.left && p.top == currentPos.top))
            {
                GameOver();
            }

            // Check if snake has eaten the food:
            if (_foodPosition.left == currentPos.left && _foodPosition.top == currentPos.top)
            {
                _length++;
                _foodPosition = null;
            }
        }

        //gameover function:
        private static void GameOver()
        {
            throw new NotImplementedException();
        }

        //start position when you pressed the first key:
        private static Position GetStartPosition()
        {
            return new Position()
            {
                left = 5,
                top = 5
            };
        }

        // clear trail to keep the right amount of snake points:
        private static void CleanUp()
        {
            while (points.Count() > _length)
            {
                points.Remove(points.First());
            }
        }

    }
}
