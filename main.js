const homeMain = document.querySelector('.home')
const bookmarksMain = document.querySelector('.bookmarks')
const createMain = document.querySelector('.create')
const profileMain = document.querySelector('.profile')

const homeHeader = document.querySelector('.home-header')
const bookmarksHeader = document.querySelector('.bookmarks-header')
const createHeader = document.querySelector('.create-header')
const profileHeader = document.querySelector('.profile-header')
const headerElArray = document.querySelectorAll('.header')

const homeButton = document.querySelector('#home-button')
const bookmarksButton = document.querySelector('#bookmarks-button')
const createButton = document.querySelector('#create-button')
const profileButton = document.querySelector('#profile-button')

const footerEl = document.querySelector('.footer')

const cardElArray = document.querySelectorAll('.card')

// Array for Cards

const cardsDataArray = [
  {
    question: `Who was La Liga's Top Scorer in 2020/2021?`,
    answer: 'Lionel Messi',
    isBookmarked: false,
    tags: ['Sports', 'Football', 'La Liga'],
  },
  {
    question: 'How old was the oldest animal on earth?',
    answer:
      'A deep-sea sponge from the species Monorhaphis chuni lived to be 11000 years old.',
    isBookmarked: false,
    tags: ['Animals', 'Sea'],
  },
  {
    question: 'Which bmx rider won the most X Games medals?',
    answer: 'Dave Mirra won 24 X Games Medals over 19 appearances.',
    isBookmarked: false,
    tags: ['BMS', 'X Games', 'Sports'],
  },
  {
    question: 'How many ants live on earth?',
    answer:
      'The number of ants on earth is estimated to be about 1 quadrillion spread out over more than 12000 ant species. That’s 1000000000000000 of these insects.',
    isBookmarked: false,
    tags: ['Animals', 'Science', 'Ants'],
  },
]

//function to empty homeMain element

function emptyHomeMain() {
  while (homeMain.lastChild) {
    homeMain.removeChild(homeMain.lastChild)
  }
}

// empty homeMain on load

homeMain.addEventListener('load', () => {
  homeMain.innerHTML = ''
  console.log('homeMain emptied')
})

// function to render array objects in html

function renderCard(cardData) {
  const cardSection = document.createElement('section')
  cardSection.classList.add('card')
  homeMain.appendChild(cardSection)

  const cardBookmark = document.createElement('button')
  cardBookmark.classList.add('card__bookmark', 'material-icons', 'md-48')
  cardBookmark.ariaLabel = 'bookmark'
  cardSection.appendChild(cardBookmark)

  const cardQuestion = document.createElement('h2')
  cardQuestion.classList.add('card__question')
  cardQuestion.textContent = cardData.question
  cardSection.appendChild(cardQuestion)

  const cardButton = document.createElement('button')
  cardButton.classList.add('card__answerbutton')
  cardButton.textContent = 'show answer'
  cardSection.appendChild(cardButton)

  const cardAnswer = document.createElement('p')
  cardAnswer.classList.add('card__answer')
  cardAnswer.classList.add('card__answer--hidden')
  cardAnswer.textContent = cardData.answer
  cardSection.appendChild(cardAnswer)

  const cardTags = document.createElement('ul')
  cardTags.classList.add('tags')
  cardSection.appendChild(cardTags)

  cardData.tags.forEach(tag => {
    const cardTag = document.createElement('li')
    cardTag.classList.add('tags__item')
    cardTag.textContent = tag
    cardTags.appendChild(cardTag)
  })
}

// renderCard(cardsDataArray[0])

//render each card of cardsDataArray

cardsDataArray.forEach(cardData => {
  renderCard(cardData)
})

//empty homeMain on click and reload data from array

homeButton.addEventListener('click', () => {
  emptyHomeMain()
  cardsDataArray.forEach(cardData => {
    renderCard(cardData)
  })
  bookmarkElArray.forEach((bookmarkEl, index) => {
    bookmarkEl.innerHTML = 'bookmark_border'
  })
})

// navigation

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

bookmarksButton.addEventListener('click', () => {
  while (bookmarksMain.lastChild) {
    bookmarksMain.removeChild(bookmarksMain.lastChild)
  }
})

for (let i = 0; i < bookmarkElArray.length; i++) {
  bookmarksButton.addEventListener('click', () => {
    if (bookmarkElArray[i].innerText === 'bookmark') {
      let bookmarkedCard = bookmarkElArray[i].parentElement.cloneNode(true)
      bookmarksMain.appendChild(bookmarkedCard)
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
