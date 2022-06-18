function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
  .then((res)=>res.json())
  .then(data=>renderBooks(data))
  // .then((data) =>{
  //   const result = data.result
  //   // console.log(result)
  //   result.map((book)=>renderBooks(book))
    
  // });
  
}
fetchBooks();


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
