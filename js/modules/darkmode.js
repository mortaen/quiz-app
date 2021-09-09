// darkmode switch function

export function addDarkmodeSwitch() {
  const darkmodeSwitchButton = document.createElement('button')
  darkmodeSwitchButton.classList.add(
    'darkmode-switch',
    'material-icons',
    'md-48'
  )

  darkmodeSwitchButton.innerText = 'toggle_off'

  document.querySelector('.home').appendChild(darkmodeSwitchButton)

  const darkmodeSwitch = document.querySelector('.darkmode-switch')

  const textareaArray = document.querySelectorAll('.form__textarea')

  const headerElArray = document.querySelectorAll('.header')

  const footerEl = document.querySelector('.footer')

  darkmodeSwitch.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('darkmode')

    headerElArray.forEach(headerEl => {
      headerEl.classList.toggle('header--darkmode')
    })

    footerEl.classList.toggle('footer--darkmode')

    const cardElArray = document.querySelectorAll('.card')
    cardElArray.forEach(cardEl => {
      cardEl.classList.toggle('darkmode')
    })

    document.querySelector('.form').classList.toggle('darkmode')

    textareaArray.forEach(textareaEl => {
      textareaEl.classList.toggle('darkmode')
    })

    document.querySelector('.profile__section').classList.toggle('darkmode')

    if (darkmodeSwitch.innerHTML === 'toggle_off') {
      darkmodeSwitch.innerHTML = 'toggle_on'
    } else {
      darkmodeSwitch.innerHTML = 'toggle_off'
    }
  })
}
