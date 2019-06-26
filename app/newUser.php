<?php

$fname=$_POST['fname'];
$email=$_POST['email'];
$language=$_POST['language'];
$availability=$_POST['availability'];
$goal=$_POST['goal'];

mysql_connect("localhost","root","");
mysql_select_db("test");
$select="inset into user(fname,email,language,availability,goal) values('".$fname"','".$email"','".$language"','".$availability"','".$goal"')"

$sql=mysql_query($select);

print'<script type="text/javascript">';
print'console.log("User Created")';
print'</script>';

mysql_close();
?>