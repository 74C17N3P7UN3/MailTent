if (localStorage.getItem('temp-alert') == null)
   localStorage.setItem('temp-alert', true)
else
   document.getElementById('temp-alert').outerHTML = ''
