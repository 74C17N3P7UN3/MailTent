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

if (cookieList.includes('login-email-flags'))
   document.getElementById('login-email-flags').innerHTML = email404
if (cookieList.includes('login-password-flags'))
   document.getElementById('login-password-flags').innerHTML = pswWrong

if (cookieList.includes('register-email-flags')) {
   authRegister() // auth-changer.js
   document.getElementById('register-email-flags').innerHTML = emailTaken
}

/* --------------- Also reduce loading time for UX --------------- */
if (cookieList.includes('login-email-flags')
   || cookieList.includes('login-password-flags')
   || cookieList.includes('register-email-flags')) {
   var lowerLoadingTimeout = true
}

deleteCookies()

function getCookies() {

   cookieList = decodeURIComponent(document.cookie)
   cookieArr = cookieList.split(';');

}

function deleteCookies() {

   getCookies(); // Get cookies array

   setTimeout(() => {

      for (let i = 0; i < cookieArr.length; i++)
         document.cookie = cookieArr[i] + '=;expires=' + new Date(0).toUTCString()

      getCookies(); // In case of a console.log

   }, 10);

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
let logSubmit = document.getElementById('login-submit')

logEmailInput.addEventListener('keyup', () => {
   checkValid(logEmailInput, logEmailFlags, emailChars, false)
   setLogSubmit()
})
logPswInput.addEventListener('keyup', () => {
   checkValid(logPswInput, logPswFlags, pswChars, false)
   setLogSubmit()
})

/* --------------- Check Registration Section --------------- */
let regUserInput = document.getElementById('reg-username')
let regUsernameFlags = document.getElementById('register-username-flags')
let regEmailInput = document.getElementById('reg-email')
let regEmailFlags = document.getElementById('register-email-flags')
let regPswInput = document.getElementById('reg-psw')
let regPswFlags = document.getElementById('register-password-flags')
let regSubmit = document.getElementById('reg-submit')

regUserInput.addEventListener('keyup', () => {
   checkValid(regUserInput, regUsernameFlags, usernameChars, true)
   setRegSubmit()
})
regEmailInput.addEventListener('keyup', () => {
   checkValid(regEmailInput, regEmailFlags, emailChars, false)
   setRegSubmit()
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

   setRegSubmit()

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

// Set error flag by default
document.cookie = 'reg-submit-flag=WhyAreYouHere;'

function setLogSubmit() {

   if ((logEmailInput.value.match(emailChars))
      || logPswInput.value.match(pswChars)) {
      document.cookie = 'login-submit-flag=WhyAreYouHere;'
      logSubmit.setAttribute('disabled', '')
   }
   else {
      deleteCookies()
      logSubmit.removeAttribute('disabled')
   }

}

function setRegSubmit() {

   if ((regUserInput.value.match(usernameChars))
      || regUserInput.value.length > 16
      || regEmailInput.value.match(emailChars)
      || regPswInput.value.match(pswChars)) {
      document.cookie = 'reg-submit-flag=WhyAreYouHere;'
      regSubmit.setAttribute('disabled', '')
   }
   else {
      deleteCookies()
      regSubmit.removeAttribute('disabled')
   }

}
