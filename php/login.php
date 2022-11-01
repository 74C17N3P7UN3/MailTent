<?php

include 'session.php';

if (isset($_POST['login-email'])) {
   $fileName = '../database/accounts.db';

   /* --------------- Check For Cheats --------------- */
   if (isset($_COOKIE['login-submit-flag'])) {
      header('location: /pages/401.html');
      exit;
   }

   /* --------------- Get User Input --------------- */
   $email = $_POST['login-email'];
   $password = $_POST['login-psw'];

   /* --------------- Create Db's Entry --------------- */
   $emailEntry = ", email='$email'";
   $pswEntry = ", password='$password']";
   $dbEntry = $emailEntry . $pswEntry;

   /* --------------- Check If Existing --------------- */
   $pointerFile = fopen($fileName, 'r');
   $contents = fread($pointerFile, filesize($fileName));
   fclose($pointerFile);

   // If login is valid, redirect to inbox
   if (str_contains($contents, $dbEntry)) {
      setcookie(
         'session-id',
         session_id(),
         time() + 60 * 60 * 24 * 365,
         '/', '', false, true
      );
      $_SESSION['email'] = $email;
      header('location: /inbox.php');
      exit;
   } // If email is valid, but psw is not
   else if (str_contains($contents, $emailEntry)) {
      setcookie('login-password-flags', 'WhyAreYouHere', 0, '/');
   } else { // If email does not exist
      setcookie('login-email-flags', 'WhyAreYouHere', 0, '/');
   }
}

header('location: /index.php');
exit;

?>
