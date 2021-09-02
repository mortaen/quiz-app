const homeMain = document.querySelector('.home')
const bookmarksMain = document.querySelector('.bookmarks')
const createMain = document.querySelector('.create')
const profileMain = document.querySelector('.profile')

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

const answerElArray = document.querySelectorAll('.card__answer')

answerElArray.forEach((answerEl, index) => {
  answerEl.classList.add('card__answer--hidden')
})

const answerButtonArray = document.querySelectorAll('.card__answerbutton')

answerButtonArray.forEach((answerButton, index) => {
  answerButton.addEventListener('click', function changeAnswerButtonText() {
    if (answerButton.innerText === 'show answer') {
      answerButton.innerText = 'hide answer'
    } else if (answerButton.innerText === 'hide answer') {
      answerButton.innerText = 'show answer'
    }
  })
})

const answerEl1 = document.querySelector('.card__answer1')
const answerEl2 = document.querySelector('.card__answer2')
const answerEl3 = document.querySelector('.card__answer3')
const answerEl4 = document.querySelector('.card__answer4')
const answerEl5 = document.querySelector('.card__answer5')

const answerButton1 = document.querySelector('.card__answerbutton1')
const answerButton2 = document.querySelector('.card__answerbutton2')
const answerButton3 = document.querySelector('.card__answerbutton3')
const answerButton4 = document.querySelector('.card__answerbutton4')
const answerButton5 = document.querySelector('.card__answerbutton5')

answerButton1.addEventListener('click', function toggleAnswer() {
  answerEl1.classList.toggle('card__answer--hidden')
})

answerButton2.addEventListener('click', function toggleAnswer() {
  answerEl2.classList.toggle('card__answer--hidden')
})

answerButton3.addEventListener('click', function toggleAnswer() {
  answerEl3.classList.toggle('card__answer--hidden')
})

answerButton4.addEventListener('click', function toggleAnswer() {
  answerEl4.classList.toggle('card__answer--hidden')
})

answerButton5.addEventListener('click', function toggleAnswer() {
  answerEl5.classList.toggle('card__answer--hidden')
})
