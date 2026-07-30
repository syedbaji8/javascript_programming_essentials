let books = [];
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = document.getElementById('pagesNumber').value;
    if (bookName && authorName && bookDescription && pagesNumber) {
        const book = {
            bookName: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        }
        books.push(book);
    } else {
        alert('Please fill empty fields')
    }
    showbooks();
    clearInputs();
    hideBookNumber();
}
function showbooks() {
    const render_books = books.map((book, index) => {
        return `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.bookName}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})">Edit</button>
        <button onclick="deleteBook(${index})">Delete Book</button>`
    }).join();
    document.getElementById('books').innerHTML = render_books;
}
function clearInputs() {
    document.getElementById('bookName').value = ''
    document.getElementById('authorName').value = ''
    document.getElementById('bookDescription').value = ''
    document.getElementById('pagesNumber').value = ''
}
function editbook(index) {
    document.getElementById('bookName').value = books[index].bookName
    document.getElementById('authorName').value = books[index].authorName
    document.getElementById('bookDescription').value = books[index].bookDescription
    document.getElementById('pagesNumber').value = books[index].pagesNumber
    showBookNumber(index);
    books.splice(index, 1)
    showbooks();
}
function deleteBook(index){
    books.splice(index, 1)
    showbooks();
}
function showBookNumber(index){
    const bookNumber = document.getElementById('bookNumber');
    bookNumber.style.display = 'block'
    bookNumber.textContent = `Book Number ${index+1}`
}
function hideBookNumber(){
    document.getElementById('bookNumber').style.display = 'none'
}
