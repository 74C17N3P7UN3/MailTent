<?php

$userEmails;

function fetch_emails() {

   global $userEmails;

   $fileName = 'database/users/' . $_SESSION['email'] . '.json';

   $pointerFile = fopen($fileName, 'r');
   $userEmails = fread($pointerFile, filesize($fileName));
   fclose($pointerFile);

}

?>
