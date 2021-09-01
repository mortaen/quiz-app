const homeMain = document.querySelector('.home')
const bookmarksMain = document.querySelector('.bookmarks')
const createMain = document.querySelector('.create')
const profileMain = document.querySelector('.profile')

const homeButton = document.querySelector('#home-button')
const bookmarksButton = document.querySelector('#bookmarks-button')
const createButton = document.querySelector('#create-button')
const profileButton = document.querySelector('#profile-button')

homeButton.addEventListener('click', () => {
  homeMain.classList.remove('main--hidden')
  bookmarksMain.classList.add('main--hidden')
  createMain.classList.add('main--hidden')
  profileMain.classList.add('main--hidden')
})

bookmarksButton.addEventListener('click', () => {
  homeMain.classList.add('main--hidden')
  createMain.classList.add('main--hidden')
  profileMain.classList.add('main--hidden')
  bookmarksMain.classList.remove('main--hidden')
})

createButton.addEventListener('click', () => {
  homeMain.classList.add('main--hidden')
  bookmarksMain.classList.add('main--hidden')
  profileMain.classList.add('main--hidden')
  createMain.classList.remove('main--hidden')
})

profileButton.addEventListener('click', () => {
  homeMain.classList.add('main--hidden')
  bookmarksMain.classList.add('main--hidden')
  createMain.classList.add('main--hidden')
  profileMain.classList.remove('main--hidden')
})
