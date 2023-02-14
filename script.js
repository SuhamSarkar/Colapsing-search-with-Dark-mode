const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})

// for dark theme
const toggleSwitch = document.querySelector('#toggle');
const body = document.querySelector('body');

function switchTheme(e) {
  if (e.target.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }    
}


toggleSwitch.addEventListener('change', switchTheme, false);
