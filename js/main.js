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

import { resetForm } from './modules/resetform'
import { toggleBookmark } from './modules/toggleBookmark'
import { toggleAnswer } from './modules/toggleAnswer'
import { hideAll } from './modules/hideAll'
import { addDarkmodeSwitch } from './modules/darkmode'

// card data array

const cardDataArray = [
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
    isBookmarked: true,
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

// function to render array objects in html

function renderCard(cardData, targetEl) {
  const cardSection = document.createElement('section')
  cardSection.classList.add('card')
  targetEl.appendChild(cardSection)

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

// empty homeMain and bookmarksMain on load and load data from array

window.addEventListener('load', () => {
  reloadHomeMain()
  reloadBookmarksMain()
})

//empty homeMain on click and reload data from array

homeButton.addEventListener('click', () => {
  reloadHomeMain()
  toggleBookmark()
  toggleAnswer()
})

//homeMain: render cards and add toggles and darkmodeSwitch

function reloadHomeMain() {
  homeMain.innerHTML = ''
  cardDataArray.forEach(cardData => {
    renderCard(cardData, homeMain)
  })
  // toggleBookmark()
  // toggleAnswer()
  addDarkmodeSwitch()
}

// filter cardDataArray, so that it only contains bookmarked cards

const bookmarkedCardsArray = cardDataArray.filter(
  card => card.isBookmarked === true
)

//bookmarksMain: render cards and add toggles

function reloadBookmarksMain() {
  bookmarksMain.innerHTML = ''
  bookmarkedCardsArray.forEach(cardData => {
    renderCard(cardData, bookmarksMain)
  })
  toggleBookmark()
  toggleAnswer()
}

//create question

function addQuestion(question, answer, isBookmarked, tags) {
  cardDataArray.push(question, answer, isBookmarked, tags)
}

document.querySelector('.submit-button').addEventListener('click', () => {
  addQuestion({
    question: 'will this work?',
    answer: 'hopefully',
    isBookmarked: false,
    tags: ['experiment', 'js'],
  })
  resetForm()
})

// navigation

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

// get bookmarked cards to appear on bookmarks page

// bookmarksButton.addEventListener('click', () => {
//   while (bookmarksMain.lastChild) {
//     bookmarksMain.removeChild(bookmarksMain.lastChild)
//   }
// })

// for (let i = 0; i < bookmarkElArray.length; i++) {
//   bookmarksButton.addEventListener('click', () => {
//     if (bookmarkElArray[i].innerText === 'bookmark') {
//       let bookmarkedCard = bookmarkElArray[i].parentElement.cloneNode(true)
//       bookmarksMain.appendChild(bookmarkedCard)
//     }
//   })
// }
