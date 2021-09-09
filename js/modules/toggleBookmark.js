// bookmark toggle function

export function toggleBookmark() {
  const bookmarkElArray = document.querySelectorAll('.card__bookmark')

  bookmarkElArray.forEach((bookmarkEl, index) => {
    bookmarkEl.innerHTML = 'bookmark_border'
  })

  bookmarkElArray.forEach((bookmarkEl, index) => {
    bookmarkEl.addEventListener('click', function changeBookmark() {
      if (bookmarkEl.innerHTML === 'bookmark_border') {
        bookmarkEl.innerHTML = 'bookmark'
      } else if (bookmarkEl.innerHTML === 'bookmark') {
        bookmarkEl.innerHTML = 'bookmark_border'
      }
    })
  })
}
