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
// Username doesn't respect conditions
if (preg_match('/[^a-zA-Z0-9!@#*]/', $username)) {
   setcookie('register-username-flags1', 'WhyAreYouHere', 0, '/');
   $flag = true;
} // Email doesn't respect conditions
if (preg_match('/[^a-z0-9.]/', $email)) {
   setcookie('register-email-flags1', 'WhyAreYouHere', 0, '/');
   $flag = true;
} // Email is already taken
if (str_contains($contents, $emailEntry)) {
   setcookie('register-email-flags2', 'WhyAreYouHere', 0, '/');
   $flag = true;
} // Password doesn't respect conditions
if (preg_match('/[^a-zA-Z0-9!@#$%^&*]/', $password)) {
   setcookie('register-password-flags1', 'WhyAreYouHere', 0, '/');
   $flag = true;
}

/* --------------- Register Account --------------- */
if (!$flag) {
   $pointerFile = fopen($fileName, 'a');
   fwrite($pointerFile, $dbEntry . "\n");
   fclose($pointerFile);

   header('location: /inbox.html');
   exit;
}

header('location: /index.html');
exit;
