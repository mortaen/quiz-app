const homeMain = document.querySelector('.home')
const bookmarksMain = document.querySelector('.bookmarks')
const createMain = document.querySelector('.create')
const profileMain = document.querySelector('.profile')

const bookmarkButton = document.querySelector('.card__bookmark')

const homeHeader = document.querySelector('.home-header')
const bookmarksHeader = document.querySelector('.bookmarks-header')
const createHeader = document.querySelector('.create-header')
const profileHeader = document.querySelector('.profile-header')

const homeButton = document.querySelector('#home-button')
const bookmarksButton = document.querySelector('#bookmarks-button')
const createButton = document.querySelector('#create-button')
const profileButton = document.querySelector('#profile-button')

function hideAll() {
  const mainElArray = document.querySelectorAll('.main')

  mainElArray.forEach((mainEl, index) => {
    mainEl.classList.add('main--hidden')
  })

  const headerElArray = document.querySelectorAll('.header')

  headerElArray.forEach((headerEl, index) => {
    headerEl.classList.add('header--hidden')
  })
}

homeButton.addEventListener('click', () => {
  hideAll()
  homeMain.classList.remove('main--hidden')
  homeHeader.classList.remove('header--hidden')
})

bookmarksButton.addEventListener('click', () => {
  hideAll()
  bookmarksMain.classList.remove('main--hidden')
  bookmarksHeader.classList.remove('header--hidden')
})

createButton.addEventListener('click', () => {
  hideAll()
  createMain.classList.remove('main--hidden')
  createHeader.classList.remove('header--hidden')
})

profileButton.addEventListener('click', () => {
  hideAll()
  profileMain.classList.remove('main--hidden')
  profileHeader.classList.remove('header--hidden')
})

// bookmarkButton

// bookmarkButton.addEventListener('click', () => {
//   bookmarkButton.classList.add('card__bookmark--bookmarked')
// })

bookmarkButton.addEventListener('click', function (e) {
  const bookmarkToggle = e.bookmarkToggle
  bookmarkToggle.classList.toggle('')
})
