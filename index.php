<?php
if (isset($_COOKIE['logged']))
   header('location: /inbox.php');
else
   header('location: /login.html');

exit;
