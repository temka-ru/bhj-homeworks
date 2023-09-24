const fontSizes = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

function changeFontSize(event) {
    event.preventDefault();

    fontSizes.forEach((fontSize) => {
        fontSize.classList.remove('font-size_active');
    });
    event.target.classList.add('font-size_active');

    const size = event.target.dataset.size;
    book.classList.remove('book_fs-big', 'book_fs-small');
    if (size === 'big') {
        book.classList.add('book_fs-big');
    } else if (size === 'small') {
        book.classList.add('book_fs-small');
    }
}

fontSizes.forEach((fontSize) => {
    fontSize.addEventListener('click', changeFontSize);
});