let inboxBtn = document.getElementById('inbox')
let starredBtn = document.getElementById('starred')
let draftsBtn = document.getElementById('drafts')
let sentBtn = document.getElementById('sent')

let refreshBtn = document.getElementById('header-refresh')

setRedirect(inboxBtn, 'inbox.php')
setRedirect(starredBtn, 'starred.php')
setRedirect(draftsBtn, 'drafts.php')
setRedirect(sentBtn, 'sent.php')

updateInbox('inbox')

refreshBtn.addEventListener('click', () => {
   location.reload()
})

function updateInbox(page) {

   console.log(userEmails)

}

function setRedirect(btn, page) {

   if (!btn.classList.contains('selected'))
      btn.addEventListener('click', () => {
         saveState()
         location.replace('/php/data/' + page)
      })

}
