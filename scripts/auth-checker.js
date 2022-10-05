// Error Messages
let email404 = '<i class="fa-solid fa-circle-exclamation"></i> Email not found'
let pswError = '<i class="fa-solid fa-circle-exclamation"></i> Password incorrect'

let flags = document.cookie

if (flags.includes('login-email-flags'))
   document.getElementById('login-email-flags').innerHTML = email404
if (flags.includes('login-password-flags'))
   document.getElementById('login-password-flags').innerHTML = pswError

deleteCookies()

/* Credits: geeksforgeeks.org */
function deleteCookies() {
   let cookies = flags.split(";");

   for (var i = 0; i < cookies.length; i++)
      document.cookie = cookies[i] + "=;expires="
         + new Date(0).toUTCString();
}
