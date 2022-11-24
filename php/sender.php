<?php

$recipients = $_POST['recipients'];
$email = $_POST['email'];

foreach ($recipients as $recipient) {
   $fileName = '../database/users/' . $recipient . '.json';

   $pointerFile = fopen($fileName, 'r');
   $contents = fread($pointerFile, filesize($fileName));
   fclose($pointerFile);

   $contents = rtrim(rtrim($contents, "}\n"), "]");
   $contents .= ',' . $email . ']}';

   $pointerFile = fopen($fileName, 'w');
   fwrite($pointerFile, $contents . "\n");
   fclose($pointerFile);
}

?>
