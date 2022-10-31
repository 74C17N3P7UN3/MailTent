<?php
if (isset($_COOKIE['logged'])) {
   header('location: /inbox.php');
   exit;
}
?>
<!DOCTYPE html>
<html lang="it-IT">
<head>
   <title>MailTent - Login</title>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <!-- --------------- Icons Script --------------- -->
   <script src="https://kit.fontawesome.com/6fb1d65783.js" crossorigin="anonymous"></script>
   <!-- --------------- Stylesheet e Font --------------- -->
   <link rel="stylesheet" href="/css/common.css">
   <link rel="stylesheet" href="/css/header.css">
   <link rel="stylesheet" href="/css/index.css">
   <link rel="stylesheet" href="/css/FontKit/style.css">
   <!-- --------------- Scripts --------------- -->
   <script defer src="/scripts/auth-changer.js"></script>
   <script defer src="/scripts/auth-checker.js"></script>
   <script defer src="/scripts/password-toggler.js"></script>
   <script defer src="/scripts/theme-changer.js"></script>
</head>
<body>
   <!-- --------------- Header --------------- -->
   <header>
      <div id="header-logo" class="header-section">
         <a href="/"><i class="fa-solid fa-tent"></i> MailTent</a>
      </div>
      <div id="header-form" class="header-section">
         <a id="login-btn">Sign In</a>
         <a id="register-btn">Sign Up <i class="fa-solid fa-user-plus"></i></a>
      </div>
   </header>
   <!-- --------------- Home --------------- -->
   <div id="body-container">
      <div id="watermark">
         <h1>Mailing</h1>
         <h4>Made Simpler</h4>
      </div>
      <div id="auth-form-container">
         <div id="login" class="auth-form">
            <form action="php/login.php" method="post">
               <div class="label-container">
                  <label for="login-email">Email</label>
                  <span id="login-email-flags" class="flag"></span>
               </div>
               <div class="email-container">
                  <input type="text" name="login-email" id="login-email" required autofocus>
                  <span class="email-suffix">@mailtent.com</span>
               </div>
               <div class="label-container">
                  <label for="login-psw">Password</label>
                  <span id="login-password-flags" class="flag"></span>
               </div>
               <div class="psw-container">
                  <input type="password" name="login-psw" id="login-psw" required>
                  <span class="toggle-password"><i class="fa-solid fa-eye"></i></span>
               </div>
               <input type="submit" id="login-submit" value="Sign In">
            </form>
         </div>
         <div id="register" class="auth-form hidden">
            <form action="php/register.php" method="post">
               <div class="label-container">
                  <label for="reg-username">Username</label>
                  <span id="register-username-flags" class="flag"></span>
               </div>
               <input type="text" name="reg-username" id="reg-username" required>
               <div class="label-container">
                  <label for="reg-email">Email</label>
                  <span id="register-email-flags" class="flag"></span>
               </div>
               <div class="email-container">
                  <input type="text" name="reg-email" id="reg-email" required>
                  <span class="email-suffix">@mailtent.com</span>
               </div>
               <div class="label-container">
                  <label for="reg-psw">Password</label>
                  <span id="register-password-flags" class="flag"></span>
               </div>
               <div class="psw-container">
                  <input type="password" name="reg-psw" id="reg-psw" required>
                  <span class="toggle-password"><i class="fa-solid fa-eye"></i></span>
               </div>
               <span class="customize-theme">
                  Customize Theme <i class="fa-solid fa-palette"></i>
               </span>
               <input type="submit" id="reg-submit" value="Sign Up">
            </form>
         </div>
         <div id="login-register">
            <p id="auth-switch">New to MailTent? <a>Sign Up</a>.</p>
         </div>
      </div>
   </div>
   <!-- --------------- Color Selection --------------- -->
   <div id="color-container" class="hidden">
      <div id="color-wrapper">
         <span id="color-name">Choose Your Theme:</span>
         <div id="color-selection">
            <i class="fa-solid fa-square"></i>
         </div>
      </div>
   </div>
   <!-- --------------- Loading Overlay --------------- -->
   <div id="loading-wait"></div>
</body>
</html>
