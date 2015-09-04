<?php
        mysql_connect("localhost", "root", "root") or die(mysql_error()); 
        mysql_select_db("angular") or die(mysql_error()); 
	
        $id = $_POST['id'];
	$query=mysql_query("select * from pages where id='$id' order by id desc")or die(mysql_error()); 
        $data='';
        while ($row=mysql_fetch_object($query)) {
        	$data[]=$row;
        }
        echo json_encode($data);
       
?> 