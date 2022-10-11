<?php
$fileName = "../database/accounts.db";

/* --------------- Get User Input --------------- */
$email = $_POST['login-email'];
$password = $_POST['login-psw'];

/* --------------- Create Db's Entry --------------- */
$emailEntry = ", email='$email'";
$pswEntry = ", password='$password']";
$dbEntry = $emailEntry . $pswEntry;

/* --------------- Check If Valid --------------- */
$flag = false;
// Email doesn't respect conditions
if (preg_match('/[^a-z0-9.]/', $email)) {
   setcookie('login-email-flags1', 'WhyAreYouHere', 0, '/');
   $flag = true;
} // Password doesn't respect conditions
if (preg_match('/[^a-zA-Z0-9!@#$%^&*]/', $password)) {
   setcookie('login-password-flags1', 'WhyAreYouHere', 0, '/');
   $flag = true;
}

/* --------------- Check If Existing --------------- */
if (!$flag) {
   $pointerFile = fopen($fileName, 'r');
   $contents = fread($pointerFile, filesize($fileName));
   fclose($pointerFile);

   // If login is valid, redirect to inbox
   if (str_contains($contents, $dbEntry)) {
      header('location: /inbox.html');
      exit;
   } // If email is valid, but psw is not
   else if (str_contains($contents, $emailEntry))
      setcookie('login-password-flags2', 'WhyAreYouHere', 0, '/');
   else // If email does not exist
      setcookie('login-email-flags2', 'WhyAreYouHere', 0, '/');
}

header('location: /index.html');
exit;
