export const getBooks = () => {

    const resp = fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=4OL0pcBisDRCvjC70DkTNW94ndOA0n3G')
        .then(response => response.json)
        .catch(error => error)
    return resp;
};