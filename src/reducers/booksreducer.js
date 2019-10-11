const initialState = {books:[],loading:false,error:false,message:""}
const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOK_FETCH_REQUESTED':
            return {
                ...state, books:[],loading: true,error:false
            };
        case 'BOOKS_FETCH_SUCCEEDED':
            return {
                ...state, books: action.payload, loading: false,error:false
            }
        case 'BOOKS_FETCH_FAILED':
            return {
                ...state, books: [], loading: false,error:true,message:action.message
            }    
            default:
                return state;
    }
};
export default booksReducer;