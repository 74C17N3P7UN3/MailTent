let loadingScreen = document.getElementById('loading-wait')
let loadingIcon = document.querySelector('lord-icon')

setTimeout(() => {
   // Start fade-out sequence
   loadingScreen.removeAttribute('class')
   loadingIcon.removeAttribute('class')
   // After the sequence, remove the screen
   setTimeout(() => {
      loadingScreen.outerHTML = ''
   }, 500)
}, calcTimeout())

function calcTimeout() {

   try { if (lowerLoadingTimeout) return 500 }
   catch (ReferenceError) { }

   return 1000

}
