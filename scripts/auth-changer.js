let loginBtn = document.getElementById('login-btn')
let registerBtn = document.getElementById('register-btn')
loginBtn.addEventListener('click', authLogin)
registerBtn.addEventListener('click', authRegister)

let switchP = document.getElementById('auth-switch')
let switchBtn; fetchSwitchBtn()

let login = document.getElementById('login')
let register = document.getElementById('register')

function authLogin() {

   login.classList.add('show')
   register.classList.remove('show')
   switchP.innerHTML = 'New to MailTent? <a>Sign Up</a>.'
   fetchSwitchBtn()

}
function authRegister() {

   register.classList.add('show')
   login.classList.remove('show')
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
