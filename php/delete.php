<?php

include 'session.php';

if (isset($_SESSION['email'])) {
   $fileName = '../database/accounts.db';

   $pointerFile = fopen($fileName, 'r');
   $contents = fread($pointerFile, filesize($fileName));
   fclose($pointerFile);

   $regex = "/^.+email='" . $_SESSION['email'] . "'.+$/m";
   preg_match($regex, $contents, $match);

   $contents = str_replace($match[0] . "\n", '', $contents);

   $pointerFile = fopen($fileName, 'w');
   fwrite($pointerFile, $contents);
   fclose($pointerFile);

   session_unset();
   session_destroy();
}

header('location: /index.php');
exit;

?>
