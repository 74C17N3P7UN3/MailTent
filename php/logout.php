<?

include 'session.php';

if (isset($_SESSION['email'])) {
   setcookie('session-id', '', time());
   session_unset();
   session_destroy();
}

header('location: /index.php');
exit;

?>
