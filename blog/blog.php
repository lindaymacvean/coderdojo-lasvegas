<?php
// index.php
error_reporting(E_ALL);
ini_set("display_errors", 1);
$link = mysql_connect('localhost', 'healtiz9_lv2', 'coderdojo');
mysql_select_db('healtiz9_coderdojo', $link);
$result = mysql_query('SELECT id, title FROM post', $link);
?>
<!DOCTYPE html>
<html>
<head>
<title>List of Posts</title>
</head>
<body>
<h1>List of Posts</h1>
<ul>

<?php while ($row = mysql_fetch_assoc($result)): ?>

<li>
<a href="/show.php?id=<?php echo $row['id'] ?>">
<?php echo $row['title'] ?>
</a>
</li>
<?php endwhile; ?>
</ul>
</body>
</html>

<?php
mysql_close($link);
?>