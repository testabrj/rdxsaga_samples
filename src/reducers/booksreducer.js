const booksreducer = (state = {}, action) => {
    switch (action.type) {
        case 'BOOK_FETCH_REQUESTED':
            return {
                ...state, loading: true
            };
        case 'BOOKS_FETCH_SUCCEEDED':
            return {
                ...state, books: action.json[0], loading: false
            }
            default:
                return state;
    }
};
export default booksreducer;