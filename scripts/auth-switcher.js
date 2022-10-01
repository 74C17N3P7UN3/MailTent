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
   switchP.innerHTML = 'New to MailTent? <a scope="register">Sign Up</a>.'
   fetchSwitchBtn()

}
function authRegister() {

   login.classList.add('hidden')
   register.classList.remove('hidden')
   switchP.innerHTML = 'Already a user? <a scope="login">Sign In</a>.'
   fetchSwitchBtn()

}

function fetchSwitchBtn() {

   switchBtn = document.querySelector('p#auth-switch a')
   switchBtn.addEventListener('click', authSwitch)

}
function authSwitch() {

   let scope = switchBtn.getAttribute('scope')
   if (scope == 'register') authRegister()
   else authLogin()

}