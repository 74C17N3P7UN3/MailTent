let profileBtn = document.getElementById('profile-btn')
let profile = document.getElementById('profile-menu')

profileBtn.addEventListener('click', () => { toggleDropdown(profile) })

function toggleDropdown(dropdown) {

   if (!dropdown.classList.contains('show'))
      dropdown.classList.add('show')
   else dropdown.removeAttribute('class')

}
