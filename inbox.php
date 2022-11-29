<?php

// Session handling
include 'php/session.php';
handle_inbox();

// Inbox and users fetching
include 'php/fetcher.php';
fetch_emails($_SESSION['email']);
fetch_users();

?>
<!DOCTYPE html>
<html lang="it-IT">
<head>
   <title>MailTent - Inbox</title>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <!-- --------------- Jquery Library --------------- -->
   <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
   <script defer src="/scripts/libraries/jquery.js"></script>
   <!-- --------------- Icons Script --------------- -->
   <script src="https://cdn.lordicon.com/qjzruarw.js"></script>
   <script src="https://kit.fontawesome.com/6fb1d65783.js"></script>
   <!-- --------------- Stylesheet e Font --------------- -->
   <link rel="stylesheet" href="/css/common.css">
   <link rel="stylesheet" href="/css/inbox.css">
   <link rel="stylesheet" href="/css/navbar.css">
   <link rel="stylesheet" href="/css/FontKit/style.css">
   <!-- --------------- Scripts --------------- -->
   <script>
      /* Get PHP data into js */
      var loggedUserEmail = "<?php echo $_SESSION['email'] ?>"
      var everyUser = <?php echo $registeredUsers ?>

      var userEmails = <?php echo $userEmails ?>
      var userSpace = <?php echo $userSpace ?>
   </script>
   <script src="/scripts/inbox-syncronizer.js"></script>
   <script defer src="/scripts/dropdown-menu.js"></script>
   <script defer src="/scripts/inbox-actions.js"></script>
   <script defer src="/scripts/inbox-handler.js"></script>
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
               <!-- <a href="/php/settings.php" class="menu-option">
                  <i class="fa-solid fa-gears"></i> Settings
               </a> -->
               <a href="/php/delete.php" class="menu-option">
                  <i class="fa-solid fa-trash-can"></i> Delete
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
         <li id="trash" class="sidebar-option">
            <div class="sidebar-icon">
               <i class="fa-solid fa-trash-can"></i>
            </div>
            <span>Trash</span>
         </li>
      </ul>
   </aside>
   <!-- --------------- Inbox --------------- -->
   <div id="body-container">
      <div id="inbox-view" class="body-view show">
         <!-- --------------- Header --------------- -->
         <div id="body-header">
            <div class="body-header-section">
               <div id="header-refresh" class="header-btn show">
                  <i class="fa-solid fa-rotate-right"></i>
               </div>
               <div id="header-read-all" class="header-btn show">
                  <i class="fa-solid fa-envelope-open"></i>
               </div>
               <!-- Trash Confirmation -->
               <div id="header-trash" class="header-btn">
                  <i class="fa-solid fa-trash-can"></i>
               </div>
               <span id="trash-confirm">
                  Delete all trashed emails?
               </span>
               <div id="trash-confirm-check" class="header-btn">
                  <i class="fa-solid fa-square-check"></i>
               </div>
               <div id="trash-confirm-cross" class="header-btn">
                  <i class="fa-solid fa-square-xmark"></i>
               </div>
               <!-- End -->
            </div>
            <div class="body-header-section">
               <div id="header-total-email"></div>
            </div>
         </div>
         <!-- --------------- Body --------------- -->
         <div id="body-emails"></div>
         <!-- --------------- Footer --------------- -->
         <div id="body-footer">
            <div class="body-footer-section">
               <div id="footer-inbox-size">
                  <i class="fa-solid fa-hard-drive"></i>
                  <span id="inbox-size"></span>
               </div>
            </div>
            <div class="body-footer-section">
               <div id="footer-links">
                  <a href="https://github.com/74C17N3P7UN3/MailTent" target="_blank">
                     <i class="fa-solid fa-code"></i>
                     Repo
                  </a>
                  <span class="links-separator">·</span>
                  <a href="https://github.com/74C17N3P7UN3" target="_blank">
                     <i class="fa-brands fa-github-alt"></i>
                     Profile
                  </a>
               </div>
            </div>
            <div class="body-footer-section">
               <div id="footer-credits">
                  <i class="fa-regular fa-copyright"></i>
                  Leonardo, 2022
               </div>
            </div>
         </div>
      </div>
      <div id="compose-view" class="body-view">
         <!-- --------------- Header --------------- -->
         <div id="new-message" class="bold">New Message</div>
         <!-- --------------- Recipients and Subject --------------- -->
         <div id="mail-to" class="input-container">
            <input type="text" id="mail-to-input" placeholder="Recipients">
         </div>
         <div id="mail-subject" class="input-container">
            <input type="text" id="mail-subject-input" placeholder="Subject">
         </div>
         <!-- --------------- Textarea --------------- -->
         <div id="mail-text">
            <textarea id="mail-text-input"></textarea>
         </div>
         <!-- --------------- Footer --------------- -->
         <div id="mail-footer">
            <div class="compose-footer-section">
               <div id="mail-send-btn">
                  <i class="fa-solid fa-paper-plane"></i>
                  Send
               </div>
               <div id="mail-send-alert"></div>
            </div>
            <div class="compose-footer-section">
               <div id="compose-last-edited"></div>
            </div>
            <div class="compose-footer-section">
               <div id="mail-delete-draft" class="footer-btn">
                  <i class="fa-solid fa-trash-can"></i>
               </div>
            </div>
         </div>
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
   <div id="loading-wait" class="show">
      <lord-icon class="show"
         src="https://cdn.lordicon.com/ochimkct.json"
         trigger="loop"
         colors="primary:#121331,secondary:#ECF0F1"
         style="width:350px;height:350px">
      </lord-icon>
   </div>
</body>
</html>
