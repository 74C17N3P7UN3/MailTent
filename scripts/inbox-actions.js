let readAllBtn = document.getElementById('header-read-all')
readAllBtn.addEventListener('click', readAll)
let deleteAllBtn = document.getElementById('header-trash')
deleteAllBtn.addEventListener('click', confirmDeletion)

let composeText = document.getElementById('mail-text-input')
// composeText.addEventListener('keyup', ) // FIXME: Add function

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
