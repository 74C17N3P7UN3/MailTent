<?php include 'php/session.php'; handle_inbox() ?>
<!DOCTYPE html>
<html lang="it-IT">
<head>
   <title>MailTent - Inbox</title>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <!-- --------------- Icons Script --------------- -->
   <script src="https://kit.fontawesome.com/6fb1d65783.js" crossorigin="anonymous"></script>
   <!-- --------------- Stylesheet e Font --------------- -->
   <link rel="stylesheet" href="/css/common.css">
   <link rel="stylesheet" href="/css/inbox.css">
   <link rel="stylesheet" href="/css/navbar.css">
   <link rel="stylesheet" href="/css/FontKit/style.css">
   <!-- --------------- Scripts --------------- -->
   <script defer src="/scripts/dropdown-menu.js"></script>
   <script defer src="/scripts/theme-changer.js"></script>
</head>
<body>
   <!-- --------------- Navigation Bar --------------- -->
   <nav id="navbar">
      <div id="nav-logo" class="nav-section">
         <a href="/"><i class="fa-solid fa-tent"></i> MailTent</a>
      </div>
      <div id="nav-profile" class="nav-section">
         <a id="theme-btn" class="customize-theme">
            <i class="fa-solid fa-palette"></i>
         </a>
         <div id="profile-menu">
            <a id="profile-btn"><i class="fa-solid fa-user"></i></a>
            <div id="profile-menu-content">
               <a href="/php/settings.php" class="menu-option">
                  <i class="fa-solid fa-gears"></i> Settings
               </a>
               <a href="/php/logout.php" class="menu-option">
                  <i class="fa-solid fa-right-from-bracket"></i> Logout
               </a>
            </div>
         </div>
      </div>
   </nav>
   <!-- --------------- Side Bar --------------- -->
   <aside id="sidebar">
      <!--  -->
   </aside>
   <!-- --------------- Inbox --------------- -->
   <div id="body-container">
      <!--  -->
   </div>
   <!-- --------------- Color Selection --------------- -->
   <div id="color-container">
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
