// answer toggle

export function toggleAnswer() {
  const answerButtons = document.querySelectorAll('.card__answerbutton')

  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener('click', () => {
      answerButtons[i].nextElementSibling.classList.toggle(
        'card__answer--hidden'
      )
      if (answerButtons[i].innerText === 'show answer') {
        answerButtons[i].innerText = 'hide answer'
      } else {
        answerButtons[i].innerText = 'show answer'
      }
    })
  }
}
