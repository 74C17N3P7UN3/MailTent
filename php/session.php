<?php

if (isset($_COOKIE['session-id']))
   session_id($_COOKIE['session-id']);

session_start();

function handle_index() {

   if (isset($_SESSION['email']))
      header('location: /inbox.php');

}

function handle_inbox() {

   if (!isset($_SESSION['email']))
      header('location: /index.php');

}

?>
