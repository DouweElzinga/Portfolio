<!DOCTYPE html>
<html>

<body>

<?php 
    require ('connection.php');

    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        
            $sql = "INSERT INTO articles (title, content, author) 
            VALUES (:title, :content, :author)";

            $articleStatement = $pdo->prepare($sql);
            $articleStatement->execute(['title' => $tname, 'content' => $text_cnt, 'author' => $author]);

            $tname = "";
            $text_cnt = "";
            $author = "";
        }
    
?>

</body>
</html>