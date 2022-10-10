let password = document.querySelectorAll('input[type="password"]')
let toggleBtn = document.querySelectorAll('.toggle-password')

toggleBtn.forEach(e => e.addEventListener('click', togglePsw))

function togglePsw() {

   password.forEach(psw => {
      if (psw.getAttribute('type') == 'password') {
         psw.setAttribute('type', 'text')
         toggleBtn.forEach(tg => tg.classList.add('toggled'))
      }
      else {
         psw.setAttribute('type', 'password')
         toggleBtn.forEach(tg => tg.classList.remove('toggled'))
      }
   })

}
