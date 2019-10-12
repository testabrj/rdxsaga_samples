import { REQUESTED_BOOK, REQUESTED_BOOK_FAILED, REQUESTED_BOOK_SUCCEEDED } from "../actions/actionConstants";

const initialState = {books:[],loading:false,error:false,message:""}
const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUESTED_BOOK:
            return {
                ...state, books:[],loading: true,error:false
            };
        case REQUESTED_BOOK_SUCCEEDED:

            return {
                ...state, books: action.books, loading: false,error:false
            }
        case REQUESTED_BOOK_FAILED:
            return {
                ...state, books: [], loading: false,error:true,message:action.message
            }    
            default:
                return state;
    }
};
export default booksReducer;