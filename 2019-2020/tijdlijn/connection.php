<?php
   
$conn = new PDO('mysql:host=localhost;dbname=crud', 'username', 'password');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>