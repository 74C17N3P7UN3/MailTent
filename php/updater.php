<?php

if (isset($_COOKIE['session-id']))
   session_id($_COOKIE['session-id']);

session_start();

if (!empty($_POST['emails'])) {
   $fileName = '../database/users/' . $_SESSION['email'] . '.json';

   // Compare new server emails
   $pointerFile = fopen($fileName, 'r');
   $serverFile = fread($pointerFile, filesize($fileName));
   fclose($pointerFile);

   $serverJson = json_decode($serverFile);
   $clientJson = json_decode($_POST['emails']);
   foreach ($serverJson -> {'emails'} as $email) {
      $emailId = $email -> {'timestamp'};

      $exists = false;
      foreach ($clientJson -> {'emails'} as $clientEmail) {
         if ($clientEmail -> {'timestamp'} == $emailId) {
            $exists = true;
         }
      }

      if (!$exists) {
         array_push($clientJson -> {'emails'}, $email);
      }
   }

   $contents = json_encode($clientJson);

   $pointerFile = fopen($fileName, 'w');
   fwrite($pointerFile, $contents . "\n");
   fclose($pointerFile);
}

?>
