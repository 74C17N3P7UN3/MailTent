/* --------------- Flags Messages --------------- */
let charInvalid = '<i class="fa-solid fa-circle-xmark"></i> Illegal character'
let charValid = '<i class="fa-solid fa-circle-check"></i> Correct format'

let userLength = '<i class="fa-solid fa-circle-xmark"></i> Max 16 characters'
let email404 = '<i class="fa-solid fa-circle-exclamation"></i> Email not found'
let emailTaken = '<i class="fa-solid fa-circle-exclamation"></i> Email already taken'
let pswWrong = '<i class="fa-solid fa-circle-exclamation"></i> Password incorrect'

let pswVeryWeak = '<i class="fa-solid fa-thumbs-down"></i> Very Weak'
let pswWeak = '<i class="fa-solid fa-thumbs-down"></i> Weak'
let pswMedium = '<i class="fa-solid fa-unlock"></i> Medium'
let pswStrong = '<i class="fa-solid fa-lock"></i> Strong'
let pswVeryStrong = '<i class="fa-solid fa-medal"></i> Amazing!'

/* --------------- PHP Flag Detection With Cookies --------------- */
let cookieList, cookieArr; getCookies()

if (cookieList.includes('login-email-flags1'))
   document.getElementById('login-email-flags').innerHTML = charInvalid
if (cookieList.includes('login-email-flags2'))
   document.getElementById('login-email-flags').innerHTML = email404
if (cookieList.includes('login-password-flags1'))
   document.getElementById('login-password-flags').innerHTML = charInvalid
if (cookieList.includes('login-password-flags2'))
   document.getElementById('login-password-flags').innerHTML = pswWrong

if (cookieList.includes('register')) authRegister() // auth-changer.js
if (cookieList.includes('register-username-flags1'))
   document.getElementById('register-username-flags').innerHTML = charInvalid
if (cookieList.includes('register-email-flags1'))
   document.getElementById('register-email-flags').innerHTML = charInvalid
if (cookieList.includes('register-email-flags2'))
   document.getElementById('register-email-flags').innerHTML = emailTaken
if (cookieList.includes('register-password-flags1'))
   document.getElementById('register-password-flags').innerHTML = charInvalid

deleteCookies()
getCookies() // Clear in case of a console.log

function getCookies() {

   cookieList = decodeURIComponent(document.cookie)
   cookieArr = cookieList.split(";");

}

function deleteCookies() {

   for (let i = 0; i < cookieArr.length; i++)
      document.cookie = cookieArr[i] + "=;expires=" + new Date(0).toUTCString();

}

/* --------------- Allowed Charsets --------------- */
let usernameChars = /[^a-zA-Z0-9!@#*]/
let emailChars = /[^a-z0-9.]/
let pswChars = /[^a-zA-Z0-9!@#$%^&*]/

/* --------------- Check Login Section --------------- */
let logEmailInput = document.getElementById('login-email')
let logEmailFlags = document.getElementById('login-email-flags')
let logPswInput = document.getElementById('login-psw')
let logPswFlags = document.getElementById('login-password-flags')

logEmailInput.addEventListener('keyup', () => {
   checkValid(logEmailInput, logEmailFlags, emailChars, false)
})
logPswInput.addEventListener('keyup', () => {
   checkValid(logPswInput, logPswFlags, pswChars, false)
})

/* --------------- Check Registration Section --------------- */
let regUsernameInput = document.getElementById('reg-username')
let regUsernameFlags = document.getElementById('register-username-flags')
let regEmailInput = document.getElementById('reg-email')
let regEmailFlags = document.getElementById('register-email-flags')
let regPswInput = document.getElementById('reg-psw')
let regPswFlags = document.getElementById('register-password-flags')

regUsernameInput.addEventListener('keyup', () => {
   checkValid(regUsernameInput, regUsernameFlags, usernameChars, true)
})
regEmailInput.addEventListener('keyup', () => {
   checkValid(regEmailInput, regEmailFlags, emailChars, false)
})
regPswInput.addEventListener('keyup', () => {

   let strength = 0;
   if (regPswInput.value.match(/[a-z]/)) strength++;
   if (regPswInput.value.match(/[A-Z]/)) strength++;
   if (regPswInput.value.match(/[0-9]/)) strength++;
   if (regPswInput.value.match(/[!@#$%^&*]/)) strength++;
   if (regPswInput.value.match(/.{8,}/)) strength++;

   if (strength == 1) regPswFlags.innerHTML = pswVeryWeak
   else if (strength == 2) regPswFlags.innerHTML = pswWeak
   else if (strength == 3) {
      regPswFlags.innerHTML = pswMedium
      regPswFlags.classList.remove('blue', 'green')
      regPswFlags.classList.add('orange')
   }
   else if (strength == 4) {
      regPswFlags.innerHTML = pswStrong
      regPswFlags.classList.remove('blue', 'orange')
      regPswFlags.classList.add('green')
   }
   else if (strength == 5) {
      regPswFlags.innerHTML = pswVeryStrong
      regPswFlags.classList.remove('green', 'orange')
      regPswFlags.classList.add('blue')
   }

   if (regPswInput.value.match(pswChars)) {
      regPswFlags.innerHTML = pswInvalid
      regPswFlags.classList.remove('blue', 'green', 'orange')
   }

   if (regPswInput.value == '')
      regPswFlags.innerHTML = ''

})

/* --------------- Function To Check Valid --------------- */
function checkValid(input, flags, charset, checkLen) {

   if (input.value.match(charset)) {
      flags.innerHTML = charInvalid
      flags.classList.remove('green')
   }
   else if (checkLen && input.value.length > 16) {
      flags.innerHTML = userLength
      flags.classList.remove('green')
   }
   else {
      flags.innerHTML = charValid
      flags.classList.add('green')
   }

   if (input.value == '')
      flags.innerHTML = ''

}
