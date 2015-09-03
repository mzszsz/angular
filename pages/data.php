<?php
        mysql_connect("localhost", "root", "root") or die(mysql_error()); 
        mysql_select_db("angular") or die(mysql_error()); 
       
        
        $data = json_decode(file_get_contents("php://input"));
        if (!empty($data->view)) {
        	$view = mysql_real_escape_string($data->view);
        	$id = mysql_real_escape_string($data->id);
        	$query=mysql_query("select * from books where id='$id'")or die(mysql_error()); 
        }
		else{
			$query=mysql_query("select * from books")or die(mysql_error()); 
		}

        $data='';
        while ($row=mysql_fetch_object($query)) {
        	$data[]=$row;
        }
        //var_dump($data);
        echo json_encode($data);
       
?> 