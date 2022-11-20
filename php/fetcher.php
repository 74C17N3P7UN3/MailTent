<?php

$userEmails;
$userSpace;

function fetch_emails($email) {

   global $userEmails;
   global $userSpace;

   $fileName = 'database/users/' . $email . '.json';
   $userSpace = filesize($fileName);

   $pointerFile = fopen($fileName, 'r');
   $userEmails = fread($pointerFile, filesize($fileName));
   fclose($pointerFile);

}

?>
