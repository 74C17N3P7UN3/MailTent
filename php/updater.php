<?php

if (isset($_COOKIE['session-id']))
   session_id($_COOKIE['session-id']);

session_start();

if (!empty($_POST['emails'])) {
   $fileName = '../database/users/' . $_SESSION['email'] . '.json';
   $contents = $_POST['emails'];

   $pointerFile = fopen($fileName, 'w');
   fwrite($pointerFile, $contents . "\n");
   fclose($pointerFile);
}

?>
