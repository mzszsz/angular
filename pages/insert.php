<?php
        mysql_connect("localhost", "root", "root") or die(mysql_error()); 
        mysql_select_db("angular") or die(mysql_error()); 
        //$data = json_decode(file_get_contents("php://input"));
		$name = $_POST['name'];
		$price = $_POST['price'];
		$author = $_POST['author'];
        mysql_query("INSERT INTO books (name,price,author) VALUES ('$name', '$price','$author')"); 
        Print "Your information has been successfully added to the database."; 
?> 