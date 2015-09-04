<?php
        mysql_connect("localhost", "root", "root") or die(mysql_error()); 
        mysql_select_db("angular") or die(mysql_error()); 
       
        //echo $_POST['view'];
        
        $data = json_decode(file_get_contents("php://input"));



        if (!empty($_POST['view'])) {
        	$view = $_POST['view'];
        	$id = $_POST['id'];
        	$query=mysql_query("select * from books where id='$id' order by id desc")or die(mysql_error()); 
        }
		else{
			$query=mysql_query("select * from books order by id desc")or die(mysql_error()); 
		}

        $data='';
        while ($row=mysql_fetch_object($query)) {
        	$data[]=$row;
        }
        //var_dump($data);
        echo json_encode($data);
       
?> 