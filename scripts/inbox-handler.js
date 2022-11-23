/* --------------- Dynamic Texts --------------- */
let emailCount = document.getElementById('header-total-email')
let inboxDiv = document.getElementById('body-emails')
let diskSpace = document.getElementById('inbox-size')

let lastEdited = document.getElementById('compose-last-edited')

/* --------------- Compose Fields --------------- */
var edited = false, validRecipients = false, draftEmail
let mailTo = document.getElementById('mail-to-input')
let mailSubject = document.getElementById('mail-subject-input')
let mailText = document.getElementById('mail-text-input')

mailTo.addEventListener('keyup', saveDraft)
mailSubject.addEventListener('keyup', saveDraft)
mailText.addEventListener('keyup', saveDraft)

/* --------------- Dynamic Headers --------------- */
let inboxView = document.getElementById('inbox-view')
let composeView = document.getElementById('compose-view')

let composeBtn = document.getElementById('compose')
let inboxBtn = document.getElementById('inbox')
let starredBtn = document.getElementById('starred')
let draftsBtn = document.getElementById('drafts')
let sentBtn = document.getElementById('sent')
let trashBtn = document.getElementById('trash')

let options = document.querySelectorAll('.sidebar-option')

setPage(composeBtn, 'compose')
setPage(inboxBtn, 'inbox')
setPage(starredBtn, 'starred')
setPage(draftsBtn, 'drafts')
setPage(sentBtn, 'sent')
setPage(trashBtn, 'trash')

let refreshBtn = document.getElementById('header-refresh')
refreshBtn.addEventListener('click', () => { location.reload() })

updateView('inbox')

function setPage(btn, page) {

   btn.addEventListener('click', () => {
      options.forEach(option => {
         option.classList.remove('selected')
      })
      btn.classList.add('selected')

      updateView(page)
   })

}

function updateView(page) {

   if (page != 'compose' && page != 'trash') {
      /* --------------- Inbox Pages --------------- */
      // Remove compose view
      composeView.classList.remove('show')
      inboxView.classList.add('show')
      // Remove trashBtn
      deleteAllBtn.classList.remove('show')
      readAllBtn.classList.add('show')
      // Reset deletion prompt
      resetDeletion()

      let emailArr = []

      userEmails.emails.slice().reverse().forEach(email => {
         if (email.location == page)
            emailArr.push(email)
         // If on starred page, check starred value
         if (page == 'starred' && email.starred)
            emailArr.push(email)
      })

      emailCount.innerHTML = `Displayed emails: ${emailArr.length}/${userEmails.emails.length}`
      diskSpace.innerHTML = bytesConversion(userSpace)

      inboxDiv.innerHTML = arrToList(emailArr, 'star')
      // Display scrollbar if needed
      if (hasScrollBar(inboxDiv)) inboxDiv.classList.add('overflow')
      else inboxDiv.classList.remove('overflow')

      getEmails()
   } else if (page == 'trash') {
      /* --------------- Trash Page --------------- */
      // Remove compose view
      composeView.classList.remove('show')
      inboxView.classList.add('show')
      // Remove readAllBtn
      readAllBtn.classList.remove('show')
      deleteAllBtn.classList.add('show')

      let emailArr = []

      userEmails.emails.slice().reverse().forEach(email => {
         if (email.location == page)
            emailArr.push(email)
         // If on starred page, check starred value
         if (page == 'starred' && email.starred)
            emailArr.push(email)
      })

      emailCount.innerHTML = `Displayed emails: ${emailArr.length}/${userEmails.emails.length}`
      diskSpace.innerHTML = bytesConversion(userSpace)

      inboxDiv.innerHTML = arrToList(emailArr, 'trash')
      // Display scrollbar if needed
      if (hasScrollBar(inboxDiv)) inboxDiv.classList.add('overflow')
      else inboxDiv.classList.remove('overflow')

      getEmails()
   } else {
      /* --------------- Compose Page --------------- */
      // Remove inbox view
      inboxView.classList.remove('show')
      composeView.classList.add('show')

      // Reset fields
      edited = false
      validRecipients = false
      mailTo.value = ''
      mailSubject.value = ''
      mailText.value = ''
   }

}

function saveDraft() {

   if (!edited) {
      let email = {
         location: 'drafts',
         timestamp: parseInt(Date.now() / 1000),
         recipients: [],
         subject: '',
         text: '',
         starred: false,
         read: true
      }

      userEmails.emails.push(email)
      draftEmail = userEmails.emails[userEmails.emails.length - 1]

      edited = true
   }

   draftEmail.timestamp = parseInt(Date.now() / 1000)
   // Convert recipients emails to usernames array
   let recipientsArr = mailTo.value.split(' ')
   draftEmail.recipients = []

   let BreakException = {}
   try {
      recipientsArr.forEach(recipient => {
         let user = everyUser.users.find(e => e.email == recipient)
         if (user == undefined) {
            validRecipients = false
            throw BreakException
         }

         draftEmail.recipients.push(user.username)
         validRecipients = true
      })
   } catch (e) { if (e !== BreakException) throw e }
   draftEmail.subject = mailSubject.value
   draftEmail.text = mailText.value

   lastEdited.innerHTML = `Last edited: ${unixToDate(draftEmail.timestamp)}`

}

/* --------------- Utils Functions --------------- */
function arrToList(arr, action) {

   let htmlList = ''

   arr.forEach(email => {
      // Parent div
      htmlList += `<div id="${email.timestamp}" class="email `
      if (!email.read) htmlList += 'unread '
      htmlList += 'no-select">'
      if (action == 'star') { // Star icon
         htmlList += '\n\t<div class="email-star">'
         if (!email.starred)
            htmlList += '<i class="fa-regular fa-star"></i>'
         else htmlList += '<i class="fa-solid fa-star"></i>'
         htmlList += '</div>'
      } else if (action == 'trash') { //Trash icon
         htmlList += '\n\t<div class="email-trash">'
         htmlList += '<i class="fa-regular fa-trash-can"></i>'
         htmlList += '</div>'
      }
      // Recipients
      htmlList += '\n\t<div class="email-recipients">You'
      email.recipients.forEach(recipient => {
         htmlList += ', ' + recipient
      })
      htmlList += '</div>'
      // Content
      htmlList += '\n\t<div class="email-content">'
      // Subject
      htmlList += '\n\t\t<span class="email-subject bold">' +
         email.subject +
         '</span>'
      // Text
      htmlList += '\n\t\t<span class="email-text">-</span>' +
         `\n\t\t<span class="email-text">${email.text}</span>`
      htmlList += '\n\t</div>'
      // Date
      htmlList += '\n\t<div class="email-date">' +
         unixToDate(email.timestamp) +
         '</div>'
      htmlList += '\n</div>'
   })

   return htmlList

}

function bytesConversion(bytes) {

   if (bytes > 1024)
      return `${(bytes / 1024).toFixed(1)} kB`
   else if (bytes > 1024 * 1024)
      return `${(bytes / 1024 / 1024).toFixed(1)} MB`
   else
      return `${(bytes).toFixed(1)} b`

}

function unixToDate(unixTime) {

   function calcMinutes() {

      let minutes = date.getMinutes()
      if (minutes < 10) return '0' + minutes
      else return minutes

   }

   let months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
   ]

   let date = new Date(unixTime * 1000)

   if (new Date().toDateString() == date.toDateString())
      return date.getHours() + ':' + calcMinutes()
   return date.getDate() + ' ' + months[date.getMonth()]

}
