<?php

require ('connection.php');

?>

<!DOCTYPE HTML>
<html>
    
<head>
    <link rel="stylesheet" type="text/css" href="layout.css">
</head>

<body>
    
<form method="post" action="main.php">
    <header class="title">
        <h2>Add an article:</h2>
    </div>

    <div class="input-group">
        <label>Title:</label>
            <textarea type="text" name="tname" rows="1" cols="40"></textarea>
    </div>

    <div class="input-group">
        <label>Text:</label>
            <textarea type="text" rows="5" cols="40"></textarea>
    </div>

    <div class="input-group">
        <label>Author:</label>
            <textarea type="text" rows="1" cols="40"></textarea>
    </div>
    
    <div class="input-group">
        <button type="submit" class="btn" name="sub_art">Submit</button>
    </div>
</form>

<?php
echo $_POST['tname'];
?>

</body>

</html>
