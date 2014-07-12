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
