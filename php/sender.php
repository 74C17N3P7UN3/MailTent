<?php

$sender = $_POST['sender'];
$recipients = $_POST['recipients'];
$email = $_POST['email'];

foreach ($recipients as $recipient) {
   $fileName = '../database/users/' . $recipient . '.json';

   $emailCorrect = json_decode($email);
   foreach($emailCorrect -> {'recipients'} as &$compare) {
      if ($compare == $recipient) {
         $compare = $sender;
         break;
      }
   }
   $emailCorrect = json_encode($emailCorrect);

   $pointerFile = fopen($fileName, 'r');
   $contents = fread($pointerFile, filesize($fileName));
   fclose($pointerFile);

   $contents = rtrim(rtrim($contents, "}\n"), "]");
   $contents .= ',' . $emailCorrect . ']}';

   $pointerFile = fopen($fileName, 'w');
   fwrite($pointerFile, $contents . "\n");
   fclose($pointerFile);
}

?>
