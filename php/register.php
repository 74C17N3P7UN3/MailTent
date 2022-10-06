<?php
$fileName = "../database/accounts.db";

/* --------------- Get User Input --------------- */
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

/* --------------- Create Db's Entry --------------- */
$usernameEntry = "[username='$username'";
$emailEntry = ", email='$email'";
$pswEntry = ", password='$password']";
$dbEntry = "[username='$username', email='$email', password='$password']";

/* --------------- Check Duplicate Email --------------- */
$pointerFile = fopen($fileName, 'r');
$contents = fread($pointerFile, filesize($fileName));
fclose($pointerFile);

if (str_contains($contents, $emailEntry))
   setcookie('register-email-flags', 'WhyAreYouHere?', 0, '/');
else if(str_contains($contents, $emailEntry))

/* --------------- Check Valid Psw --------------- */

/* ---------------  --------------- */
$pointerFile = fopen($pointerFile, 'r');
$contents = fread($handle, filesize($filename));

if (str_contains($contents, "email='$email'"))
   echo "This email already exist.";

fclose($pointerFile);

/* --------------- Actually Write --------------- */
$pointerFile = fopen($filename, 'a');
fwrite($pointerFile, $somecontent);
fclose($pointerFile);
