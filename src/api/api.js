export const getBooks = () => {

    const resp = fetch("https://openlibrary.org/api/books?bibkeys=ISBN:0201558025,LCCN:93005405&format=json")
    .then(response => 
      {
        const books = response.json();
          for(let book in books){
              console.log("book",book)
          }
        return books;} 
    )
    .catch(err => err);
    return resp;
};