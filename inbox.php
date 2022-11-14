<?php include 'php/session.php'; handle_inbox() ?>
<!DOCTYPE html>
<html lang="it-IT">
<head>
   <title>MailTent - Inbox</title>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <!-- --------------- Icons Script --------------- -->
   <script src="https://cdn.lordicon.com/qjzruarw.js"></script>
   <script src="https://kit.fontawesome.com/6fb1d65783.js" crossorigin="anonymous"></script>
   <!-- --------------- Stylesheet e Font --------------- -->
   <link rel="stylesheet" href="/css/common.css">
   <link rel="stylesheet" href="/css/inbox.css">
   <link rel="stylesheet" href="/css/navbar.css">
   <link rel="stylesheet" href="/css/FontKit/style.css">
   <!-- --------------- Scripts --------------- -->
   <script defer src="/scripts/dropdown-menu.js"></script>
   <script defer src="/scripts/loading-screen.js"></script>
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
      <div id="compose">
         <div class="sidebar-icon">
            <i class="fa-solid fa-pen-clip"></i>
         </div>
         <span>Compose</span>
      </div>
      <ul id="sidebar-content">
         <li id="inbox" class="sidebar-option selected">
            <div class="sidebar-icon">
               <i class="fa-solid fa-inbox"></i>
            </div>
            <span>Inbox</span>
         </li>
         <li id="starred" class="sidebar-option">
            <div class="sidebar-icon">
               <i class="fa-solid fa-star"></i>
            </div>
            <span>Starred</span>
         </li>
         <li id="drafts" class="sidebar-option">
            <div class="sidebar-icon">
               <i class="fa-solid fa-file"></i>
            </div>
            <span>Drafts</span>
         </li>
         <li id="sent" class="sidebar-option">
            <div class="sidebar-icon">
               <i class="fa-solid fa-paper-plane"></i>
            </div>
            <span>Sent</span>
         </li>
      </ul>
   </aside>
   <!-- --------------- Inbox --------------- -->
   <div id="body-container">
      <div id="body-header">
         <!--  -->
      </div>
      <div class="email unread">
         <div class="email-star"></div>
         <div class="email-recipients"></div>
         <div class="email-object bold"></div>
         <div class="email-text"></div>
         <div class="email-date"></div>
      </div>
      <div id="body-footer">
         <!--  -->
      </div>
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
   <!-- <div id="loading-wait" class="show">
      <lord-icon class="show"
         src="https://cdn.lordicon.com/ochimkct.json"
         trigger="loop"
         colors="primary:#121331,secondary:#ECF0F1"
         style="width:350px;height:350px">
      </lord-icon> -->
   </div>
</body>
</html>
