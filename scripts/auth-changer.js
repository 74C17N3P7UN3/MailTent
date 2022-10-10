let loginBtn = document.getElementById('login-btn')
let registerBtn = document.getElementById('register-btn')
loginBtn.addEventListener('click', authLogin)
registerBtn.addEventListener('click', authRegister)

let switchP = document.getElementById('auth-switch')
let switchBtn; fetchSwitchBtn()

let login = document.getElementById('login')
let register = document.getElementById('register')

function authLogin() {

   register.classList.add('hidden')
   login.classList.remove('hidden')
   switchP.innerHTML = 'New to MailTent? <a>Sign Up</a>.'
   fetchSwitchBtn()

}
function authRegister() {

   login.classList.add('hidden')
   register.classList.remove('hidden')
   switchP.innerHTML = 'Already a user? <a>Sign In</a>.'
   fetchSwitchBtn()

}

function fetchSwitchBtn() {

   switchBtn = document.querySelector('p#auth-switch a')
   switchBtn.addEventListener('click', authSwitch)

}
function authSwitch() {

   if (switchBtn.innerHTML.includes('Up')) authRegister()
   else authLogin()

}
