let readAllBtn = document.getElementById('header-read-all')
readAllBtn.addEventListener('click', readAll)
let deleteAllBtn = document.getElementById('header-trash')
deleteAllBtn.addEventListener('click', confirmDeletion)

let composeSend = document.getElementById('mail-send-btn')
composeSend.addEventListener('click', sendEmail)

/* --------------- Get Emails and Action --------------- */
let emailList = document.querySelectorAll('.email')
function getEmails() {

   let starList = document.querySelectorAll('.email-star')
   starList.forEach(e => {
      e.addEventListener('click', (e) => { starEmail(e) })
   })

   let trashList = document.querySelectorAll('.email-trash')
   trashList.forEach(e => {
      e.addEventListener('click', (e) => { deleteEmail(e) })
   })

   emailList = document.querySelectorAll('.email')

}

/* --------------- Single Actions --------------- */
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

function deleteEmail(e) {

   let emailId = e.path[2].id

   let index = userEmails.emails.findIndex(email => {
      email.timestamp == emailId
   })

   userEmails.emails.splice(index, 1)

   updateView('trash')

}

let sendAlert = document.getElementById('mail-send-alert')
function sendEmail() {

   let errorMsg = '<i class="fa-solid fa-circle-exclamation"></i> '

   if (mailSubject.value == '')
      errorMsg += 'Subject is missing.'
   else if (mailText.value == '')
      errorMsg += 'Email body is empty.'
   else if (!validRecipients) {
      errorMsg += 'Invalid recipients: ['
      mailTo.value.split(' ').forEach(recipient => {
         let user = everyUser.users.find(e => e.email == recipient)
         if (user == undefined)
            errorMsg += `"${recipient}", `
      })
      errorMsg = errorMsg.substring(0, errorMsg.length - 2)
      errorMsg += ']'
   } else {
      // Save client
      // Send request to server
   }

   if (errorMsg != '<i class="fa-solid fa-circle-exclamation"></i> ')
      sendAlert.innerHTML = errorMsg

}

/* --------------- Multiple Actions --------------- */
function readAll() {

   emailList.forEach(email => {
      email.classList.remove('unread')
   })

   userEmails.emails.forEach(email => {
      email.read = true
   })

}

function deleteAll() {

   let ids = []
   let indexes = []

   userEmails.emails.forEach(email => {
      if (email.location == 'trash')
         ids.push(email.timestamp)
   })
   ids.forEach(id => {
      let index = userEmails.emails.findIndex(email => {
         email.timestamp == id
      })
      indexes.push(index)
   })

   indexes.forEach(index => {
      userEmails.emails.splice(index, 1)
   })

   updateView('inbox')

}

/* --------------- Trash Prompts --------------- */
let deletePrompt = document.getElementById('trash-confirm')
let confirmDelete = document.getElementById('trash-confirm-check')
confirmDelete.addEventListener('click', deleteAll)
let cancelDelete = document.getElementById('trash-confirm-cross')
cancelDelete.addEventListener('click', resetDeletion)

function confirmDeletion() {

   deletePrompt.classList.add('show')
   confirmDelete.classList.add('show')
   cancelDelete.classList.add('show')

}

function resetDeletion() {

   deletePrompt.classList.remove('show')
   confirmDelete.classList.remove('show')
   cancelDelete.classList.remove('show')

}
