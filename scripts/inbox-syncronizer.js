window.addEventListener("beforeunload", () => {
   syncEmails(userEmails)
})

function syncEmails(json) {

   var formData = new FormData()
   formData.append("emails", JSON.stringify(json))

   navigator.sendBeacon('/php/updater.php', formData)

}
