<?php

include 'session.php';

if (isset($_POST['reg-username'])) {
   $fileName = '../database/accounts.db';

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

   // Email is already taken
   if (str_contains($contents, $emailEntry)) {
      setcookie('register-email-flags', 'WhyAreYouHere', 0, '/');
      header('location: /index.php');
      exit;
   }

   /* --------------- Register Account --------------- */
   $pointerFile = fopen($fileName, 'a');
   fwrite($pointerFile, $dbEntry . "\n");
   fclose($pointerFile);

   /* --------------- Create User Template --------------- */
   $fileName = '../database/users/' . $email . '.json';
   copy('../database/init.json', $fileName);

   /* --------------- Redirect to inbox --------------- */
   $_SESSION['email'] = $email;
   header('location: /inbox.php');
   exit;
}

header('location: /index.php');
exit;

?>
