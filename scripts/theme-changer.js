const colors = [
   'pomegranate',
   'pumpkin',
   'carrot',
   'orange',
   'sunflower',
   'emerland',
   'nephritis',
   'greensea',
   'belizehole',
   'peterriver',
   'amethyst',
   'wisteria',
   'wetasphalt',
   'asbestos',
   'silver'
]

// Load Theme On Page Load
if (localStorage.getItem('theme') == null) localStorage.setItem('theme', 'belizehole-theme')
document.body.classList.add(localStorage.getItem('theme'))
document.getElementById('loading-wait').outerHTML = ''


// Generate Colors Table
let colorsHtml = ''
let colorSelection = document.getElementById('color-selection')
colors.forEach(e => {
   colorsHtml += `\n<i class="fa-solid fa-square" color="${e}" style="color: var(--${e})"></i>`
})
colorSelection.innerHTML = colorsHtml

// Handle The Menu Interactions
let activeTheme = ''
let colorBtn = document.querySelectorAll('div#color-selection i.fa-square')
let colorNameDisplay = document.getElementById('color-name')
colorBtn.forEach(e => e.addEventListener('mouseenter', () => { hoverThemeBtn(e) }))
colorBtn.forEach(e => e.addEventListener('click', clickThemeBtn))

// Open Menu On Button Click
let themeContainer = document.getElementById('color-container')
let openThemeBtn = document.querySelectorAll('.customize-theme')
openThemeBtn.forEach(e => e.addEventListener('click', openThemeMenu))
function openThemeMenu() { themeContainer.classList.remove('hidden') }

function hoverThemeBtn(e) {

   let selectedTheme = e.getAttribute('color')
   colorNameDisplay.innerHTML = selectedTheme
   activeTheme = selectedTheme

}
function clickThemeBtn() {

   document.body.removeAttribute('class')
   document.body.classList.add(activeTheme + '-theme')
   localStorage.setItem('theme', activeTheme + '-theme')
   themeContainer.classList.add('hidden')
   colorNameDisplay.innerHTML = 'Choose Your Theme:'

}
