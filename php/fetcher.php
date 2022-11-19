<?php

$userEmails;

function fetch_emails($email) {

   global $userEmails;

   $fileName = 'database/users/' . $email . '.json';

   $pointerFile = fopen($fileName, 'r');
   $userEmails = fread($pointerFile, filesize($fileName));
   fclose($pointerFile);

}

?>
