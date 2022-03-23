//book title
function book(title,author,isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    
}


document.getElementById('book-form').addEventListener('submit',function(e) {
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;
    e.preventDefault()
    
})
