let readAllBtn = document.getElementById('header-read-all')
readAllBtn.addEventListener('click', readAll)

var emailList = document.querySelectorAll('.email')
function getEmails() {

   let starList = document.querySelectorAll('.email-star')
   starList.forEach(e => {
      e.addEventListener('click', (e) => { starEmail(e) })
   })

   emailList = document.querySelectorAll('.email')

}

function starEmail(e) {

   let star = e.target
   let emailId = e.path[2].id

   if (star.classList.contains('fa-solid'))
      star.classList.replace('fa-solid', 'fa-regular')
   else star.classList.replace('fa-regular', 'fa-solid')

   userEmails.emails.forEach(email => {
      if (email.timestamp == emailId) {
         if (email.starred) email.starred = false
         else email.starred = true
      }
   })

}

function readAll() {

   emailList.forEach(email => {
      email.classList.remove('unread')
   })

   userEmails.emails.forEach(email => {
      email.read = true
   })

}
