export function hideAll() {
  const mainElArray = document.querySelectorAll('.main')
  const headerElArray = document.querySelectorAll('.header')

  mainElArray.forEach((mainEl, index) => {
    mainEl.classList.add('main--hidden')
  })

  headerElArray.forEach((headerEl, index) => {
    headerEl.classList.add('header--hidden')
  })
}
