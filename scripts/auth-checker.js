/* --------------- Flags Messages --------------- */
let email404 = '<i class="fa-solid fa-circle-exclamation"></i> Email not found'
let emailValid = '<i class="fa-solid fa-circle-check"></i> Correct format'
let emailInvalid = '<i class="fa-solid fa-circle-xmark"></i> Illegal character'
let pswError = '<i class="fa-solid fa-circle-exclamation"></i> Password incorrect'
let pswInvalid = '<i class="fa-solid fa-circle-xmark"></i> Illegal character'
let pswVeryWeak = '<i class="fa-solid fa-thumbs-down"></i> Very Weak'
let pswWeak = '<i class="fa-solid fa-thumbs-down"></i> Weak'
let pswMedium = '<i class="fa-solid fa-unlock"></i> Medium'
let pswStrong = '<i class="fa-solid fa-lock"></i> Strong'
let pswVeryStrong = '<i class="fa-solid fa-medal"></i> Amazing!'

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

let allowedEmailChars = /[^a-z0-9.]/g
regEmailInput.addEventListener('keyup', () => {
   if (regEmailInput.value.match(allowedEmailChars)) {
      regEmailFlags.innerHTML = emailInvalid
      regEmailFlags.classList.remove('green')
   }
   else {
      regEmailFlags.innerHTML = emailValid
      regEmailFlags.classList.add('green')
   }

   if (regEmailInput.value == '')
      regEmailFlags.innerHTML = ''
})

let regPswInput = document.querySelector('div#register input[name="password"]')
let regPswFlags = document.getElementById('register-password-flags')

let allowedPswChars = /[^a-zA-Z0-9!@#$%^&*]/g
let lowercaseChars = /[a-z]/
let uppercaseChars = /[A-Z]/
let numbers = /[0-9]/
let symbols = /[!@#$%^&*]/
let length = /.{8,}/
regPswInput.addEventListener('keyup', () => {
   let strength = 0;
   if (regPswInput.value.match(lowercaseChars)) strength++;
   if (regPswInput.value.match(uppercaseChars)) strength++;
   if (regPswInput.value.match(numbers)) strength++;
   if (regPswInput.value.match(symbols)) strength++;
   if (regPswInput.value.match(length)) strength++;

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

   if (regPswInput.value.match(allowedPswChars)) {
      regPswFlags.innerHTML = pswInvalid
      regPswFlags.classList.remove('blue', 'green', 'orange')
   }

   if (regPswInput.value == '')
      regPswFlags.innerHTML = ''
})