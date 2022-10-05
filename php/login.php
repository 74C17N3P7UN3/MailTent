<?php
$fileName = "../database/accounts.db";

/* --------------- Get User Input --------------- */
$email = $_POST['email'];
$password = $_POST['password'];

/* --------------- Create Db's Entry --------------- */
$emailEntry = ", email='$email'";
$pswEntry = ", password='$password']";
$dbEntry = $emailEntry . $pswEntry;

/* --------------- Check If Valid --------------- */
$pointerFile = fopen($fileName, 'r');
$contents = fread($pointerFile, filesize($fileName));
fclose($pointerFile);

// If login is valid, redirect to inbox
if (str_contains($contents, $dbEntry)) {
   header('location: /inbox.html');
   exit;
} // If email is valid, but psw is not
else if (str_contains($contents, $emailEntry))
   setcookie('login-password-flags', 'WhyAreYouHere?', 0, '/');
else // If email does not exist
   setcookie('login-email-flags', 'WhyAreYouHere?', 0, '/');

header('location: /index.html');
