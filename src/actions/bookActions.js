import { FETCHED_BOOK, REQUESTED_BOOK_FAILED, REQUESTED_BOOK_SUCCEEDED, REQUESTED_BOOK } from "./actionConstants";

export const requestBook = () => {
    return { type: REQUESTED_BOOK }
  };
  
  export  const requestBookSuccess = (data) => {
    return { type: REQUESTED_BOOK_SUCCEEDED, url: data.message }
  };
  
  export  const requestBookError = (message) => {
    return { type: REQUESTED_BOOK_FAILED ,error:message}
  };
  
  export const fetchBook = () => {
    return { type: FETCHED_BOOK }
  };