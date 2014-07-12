<?php
// index.php
error_reporting(E_ALL);
ini_set("display_errors", 1);
$link = mysql_connect('localhost', 'Derp_Admin', '');
mysql_select_db('derp', $link);
$result = mysql_query('SELECT id, title FROM blog', $link);

$posts = array();
while($row = mysql_fetch_assoc($result)) {
	$posts[] = $row;
}

require 'templates/list.php';

mysql_close($link);
?>