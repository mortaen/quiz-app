const homeMain = document.querySelector('.home')
const bookmarksMain = document.querySelector('.bookmarks')
const createMain = document.querySelector('.create')
const profileMain = document.querySelector('.profile')

const homeHeader = document.querySelector('.home-header')
const bookmarksHeader = document.querySelector('.bookmarks-header')
const createHeader = document.querySelector('.create-header')
const profileHeader = document.querySelector('.profile-header')
const headerElArray = document.querySelectorAll('.header')

const footerEl = document.querySelector('.footer')

const cardElArray = document.querySelectorAll('.card')

// navigation

const homeButton = document.querySelector('#home-button')
const bookmarksButton = document.querySelector('#bookmarks-button')
const createButton = document.querySelector('#create-button')
const profileButton = document.querySelector('#profile-button')

function hideAll() {
  const mainElArray = document.querySelectorAll('.main')

  mainElArray.forEach((mainEl, index) => {
    mainEl.classList.add('main--hidden')
  })

  headerElArray.forEach((headerEl, index) => {
    headerEl.classList.add('header--hidden')
  })
}

homeButton.addEventListener('click', () => {
  hideAll()
  homeMain.classList.remove('main--hidden')
  homeHeader.classList.remove('header--hidden')
  homeButton.classList.add('md-light')
  bookmarksButton.classList.remove('md-light')
  createButton.classList.remove('md-light')
  profileButton.classList.remove('md-light')
})

bookmarksButton.addEventListener('click', () => {
  hideAll()
  bookmarksMain.classList.remove('main--hidden')
  bookmarksHeader.classList.remove('header--hidden')
  homeButton.classList.remove('md-light')
  bookmarksButton.classList.add('md-light')
  createButton.classList.remove('md-light')
  profileButton.classList.remove('md-light')
})

createButton.addEventListener('click', () => {
  hideAll()
  createMain.classList.remove('main--hidden')
  createHeader.classList.remove('header--hidden')
  homeButton.classList.remove('md-light')
  bookmarksButton.classList.remove('md-light')
  createButton.classList.add('md-light')
  profileButton.classList.remove('md-light')
})

profileButton.addEventListener('click', () => {
  hideAll()
  profileMain.classList.remove('main--hidden')
  profileHeader.classList.remove('header--hidden')
  homeButton.classList.remove('md-light')
  bookmarksButton.classList.remove('md-light')
  createButton.classList.remove('md-light')
  profileButton.classList.add('md-light')
})

// bookmark toggle

const bookmarkElArray = document.querySelectorAll('.card__bookmark')

bookmarkElArray.forEach((bookmarkEl, index) => {
  bookmarkEl.innerHTML = 'bookmark_border'
})

bookmarkElArray.forEach((bookmarkEl, index) => {
  bookmarkEl.addEventListener('click', function toggleBookmark() {
    if (bookmarkEl.innerHTML === 'bookmark_border') {
      bookmarkEl.innerHTML = 'bookmark'
    } else if (bookmarkEl.innerHTML === 'bookmark') {
      bookmarkEl.innerHTML = 'bookmark_border'
    }
  })
})

// answer card toggle

const answerButtons = document.querySelectorAll('.card__answerbutton')

for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener('click', () => {
    answerButtons[i].nextElementSibling.classList.toggle('card__answer--hidden')
    if (answerButtons[i].innerText === 'show answer') {
      answerButtons[i].innerText = 'hide answer'
    } else {
      answerButtons[i].innerText = 'show answer'
    }
  })
}

// form reset

function resetForm() {
  document.querySelector('.form').reset()
}

// get bookmarked cards to appear on bookmarks page

const answerCards = document.querySelectorAll('.card')

const cardBookmark1 = document.querySelector('.card__bookmark1')

// const bookmarkedCard = document.querySelector('.card1')
// const clonedCard = bookmarkedCard.cloneNode(true)
// bookmarksMain.appendChild(clonedCard)

for (let i = 0; i < bookmarkElArray.length; i++) {
  bookmarkElArray[i].addEventListener('click', () => {
    if (bookmarkElArray[i].innerText === 'bookmark') {
      let clonedCard = bookmarkElArray[i].parentElement.cloneNode(true)
      bookmarksMain.appendChild(clonedCard)
    }
  })
}

// darkmode

const darkmodeSwitch = document.querySelector('.darkmode-switch')

const textareaArray = document.querySelectorAll('.form__textarea')

darkmodeSwitch.addEventListener('click', () => {
  document.querySelector('body').classList.toggle('darkmode')

  headerElArray.forEach(headerEl => {
    headerEl.classList.toggle('header--darkmode')
  })

  footerEl.classList.toggle('footer--darkmode')

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
