window.addEventListener("beforeunload", () => {
   syncEmails(userEmails)
})

function syncEmails(json) {

   let formData = new FormData()
   formData.append("emails", JSON.stringify(json))

   navigator.sendBeacon('/php/updater.php', formData)

}
