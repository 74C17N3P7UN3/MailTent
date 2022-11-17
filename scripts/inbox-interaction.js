let starList = document.querySelectorAll('.email-star')

starList.forEach(e => {
   e.addEventListener('click', (e) => { starEmail(e) })
})

function starEmail(e) {

   let star = e.target
   let emailId = e.path[2].id

   if (star.classList.contains('fa-solid'))
      star.classList.replace('fa-solid', 'fa-regular')
   else star.classList.replace('fa-regular', 'fa-solid')

   // TODO: Add actual starring

}
