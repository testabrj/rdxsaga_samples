export const getBooks = () => {

    const resp = fetch("https://openlibrary.org/api/books?bibkeys=ISBN:0201558025,LCCN:93005405&format=json")
    .then(response => 
       response.json
    )
    .catch(err => err);
    return resp;
};