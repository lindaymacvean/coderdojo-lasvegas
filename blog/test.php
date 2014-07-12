<?php
// Create connection
echo 'test';
error_reporting(E_ALL);
ini_set("display_errors", 1);
$hostname = 'localhost';
$username = 'healtiz9_lv1';
$password = 'coderdojo';
$database = 'healtiz9_coderdojo';

$mysqli = new mysqli($hostname, $username, $password, $database, 3306); 
 if ($mysqli->connect_errno) {
 	echo "Failed to connect to MySQL:(".$mysqli->connect_errno.")".$mysqli->connect_error;
 }

 echo $mysqli->host_info."\n";

?>