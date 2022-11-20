let emailCount = document.getElementById('header-total-email')
let inboxDiv = document.getElementById('body-emails')
let diskSpace = document.getElementById('inbox-size')

let inboxBtn = document.getElementById('inbox')
let starredBtn = document.getElementById('starred')
let draftsBtn = document.getElementById('drafts')
let sentBtn = document.getElementById('sent')

setPage(inboxBtn, 'inbox')
setPage(starredBtn, 'starred')
setPage(draftsBtn, 'drafts')
setPage(sentBtn, 'sent')

let refreshBtn = document.getElementById('header-refresh')
refreshBtn.addEventListener('click', () => { location.reload() })

updateView('inbox')

function updateView(page) {

   if (page != 'compose') {
      let emailArr = []

      userEmails.emails.forEach(email => {
         if (email.location == page)
            emailArr.push(email)
         // If on starred page, check starred value
         if (page == 'starred' && email.starred)
            emailArr.push(email)
      })

      emailCount.innerHTML = `Total emails: ${emailArr.length}`
      inboxDiv.innerHTML = arrToList(emailArr)

      getEmails()
      diskSpace.innerHTML = bytesConversion(userSpace)
   }
   else {
      //
   }

}

function setPage(btn, page) {

   btn.addEventListener('click', () => {
      let options = document.querySelectorAll('.sidebar-option')
      options.forEach(option => { option.classList.remove('selected') })
      btn.classList.add('selected')

      updateView(page)
   })

}

/* --------------- Utils Functions --------------- */
function arrToList(arr) {

   let htmlList = ''

   arr.forEach(email => {
      // Parent div
      htmlList += `<div id="${email.timestamp}" class="email `
      if (!email.read) htmlList += 'unread '
      htmlList += 'no-select">'
      // Star icon
      htmlList += '\n\t<div class="email-star">'
      if (!email.starred)
         htmlList += '<i class="fa-regular fa-star"></i>'
      else htmlList += '<i class="fa-solid fa-star"></i>'
      htmlList += '</div>'
      // Recipients
      htmlList += '\n\t<div class="email-recipients">You'
      email.recipients.forEach(recipient => {
         htmlList += ', ' + recipient
      })
      htmlList += '</div>'
      // Content
      htmlList += '\n\t<div class="email-content">'
      // Object
      htmlList += '\n\t\t<span class="email-object bold">' +
         email.object +
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
      return date.getHours() + ':' + date.getMinutes()
   return date.getDate() + ' ' + months[date.getMonth()]

}
