<?php
// index.php
error_reporting(E_ALL);
ini_set("display_errors", 1);
$link = mysql_connect('localhost', 'healtiz9_lv2', 'coderdojo');
mysql_select_db('healtiz9_coderdojo', $link);

$result = mysql_query('SELECT id, title FROM post', $link);

$posts = array();
while ($row = mysql_fetch_assoc($result)) {
	$posts[] = $row;
}

mysql_close($link);

require 'templates/list.php'

?>