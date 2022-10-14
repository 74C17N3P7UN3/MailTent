<?php
$fileName = "../database/accounts.db";

/* --------------- Check For Cheats --------------- */
if (isset($_COOKIE['reg-submit-flag'])) {
   header('location: /pages/401.html');
   exit;
}

/* --------------- Get User Input --------------- */
$username = $_POST['reg-username'];
$email = $_POST['reg-email'];
$password = $_POST['reg-psw'];

/* --------------- Create Db's Entry --------------- */
$usernameEntry = "[username='$username'";
$emailEntry = ", email='$email'";
$pswEntry = ", password='$password']";
$dbEntry = $usernameEntry . $emailEntry . $pswEntry;

/* --------------- Check If Valid --------------- */
$pointerFile = fopen($fileName, 'r');
$contents = fread($pointerFile, filesize($fileName));
fclose($pointerFile);

$flag = false;
// Email is already taken
if (str_contains($contents, $emailEntry)) {
   setcookie('register-email-flags', 'WhyAreYouHere', 0, '/');
   header('location: /login.html');
   exit;
}

/* --------------- Register Account --------------- */
$pointerFile = fopen($fileName, 'a');
fwrite($pointerFile, $dbEntry . "\n");
fclose($pointerFile);

header('location: /inbox.php');
exit;
