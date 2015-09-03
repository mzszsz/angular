<?php
        mysql_connect("localhost", "root", "root") or die(mysql_error()); 
        mysql_select_db("angular") or die(mysql_error()); 
        $data = json_decode(file_get_contents("php://input"));
		$name = mysql_real_escape_string($data->name);
		$price = mysql_real_escape_string($data->price);
		$author = mysql_real_escape_string($data->author);
        mysql_query("INSERT INTO books (name,price,author) VALUES ('$name', '$price','$author')"); 
        Print "Your information has been successfully added to the database."; 
?> 