<?php

$userEmails;
$userSpace;
$registeredUsers;

function fetch_emails($email) {

   global $userEmails;
   global $userSpace;

   $fileName = 'database/users/' . $email . '.json';
   $userSpace = filesize($fileName);

   $pointerFile = fopen($fileName, 'r');
   $userEmails = fread($pointerFile, filesize($fileName));
   fclose($pointerFile);

}

function fetch_users() {

   global $registeredUsers;

   $fileName = 'database/accounts.db';

   $pointerFile = fopen($fileName, 'r');
   $contents = fread($pointerFile, filesize($fileName));
   fclose($pointerFile);

   $lines = preg_split("/((\r?\n)|(\r\n?))/", $contents);
   array_pop($lines); // Pop last empty line
   $string = '{"users":[';

   $userRegex = "/username='.+', email/";
   $emailRegex = "/email='.+', password/";
   foreach($lines as $line) {
      preg_match($userRegex, $line, $match);
      preg_match("/'.+'/", $match[0], $match);
      $username = ltrim(rtrim($match[0], '\''), '\'');

      preg_match($emailRegex, $line, $match);
      preg_match("/'.+'/", $match[0], $match);
      $email = ltrim(rtrim($match[0], '\''), '\'');

      $string .= '{"username": "' . $username . '",';
      $string .= '"email": "' . $email . '"},';
   }
   $string = rtrim($string, ',');
   $string .= ']}';

   $registeredUsers = $string;

}

?>
