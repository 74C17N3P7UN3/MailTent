/* --------------- Flags Messages --------------- */
let email404 = '<i class="fa-solid fa-circle-exclamation"></i> Email not found'
let emailValid = '<i class="fa-solid fa-circle-check"></i> Correct format'
let emailInvalid = '<i class="fa-solid fa-circle-xmark"></i> Illegal character'
let pswError = '<i class="fa-solid fa-circle-exclamation"></i> Password incorrect'

/* --------------- Login With Cookies --------------- */
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

/* --------------- Registration --------------- */
let regEmailInput = document.querySelector('div#register input[name="email"]')
let regEmailFlags = document.getElementById('register-email-flags')

let allowedChars = /[^a-z0-9.]/g
regEmailInput.addEventListener('keyup', () => {
   if (regEmailInput.value.match(allowedChars)) {
      regEmailFlags.innerHTML = emailInvalid
      regEmailFlags.classList.remove('clear')
   }
   else {
      regEmailFlags.innerHTML = emailValid
      regEmailFlags.classList.add('clear')
   }

   if (regEmailInput.value == '')
      regEmailFlags.innerHTML = ''
})
