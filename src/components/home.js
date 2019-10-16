import React, { Component } from 'react';
import { Card, makeStyles } from '@material-ui/core';
import { connect} from 'react-redux';
import {fetchBook} from '../actions/bookActions';
import { bindActionCreators } from 'redux';
import BookCard from './bookCard';
import composeWithSearch from '../hoc/withSearch';


class Home extends Component {
    state = { 
        books:[],
        isLoading:false,
        error:false,
        message:''
     }
   
    useStyles = makeStyles(theme => ({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      inner:{
        display:'flex',
        flexDirection:'horizontal'
      },
      gridList: {
        width: 500,
        height: 450,
      },
    }));
  
    isTermPresent = (searchTerm,books) =>{
     return books.filter((book)=>{ 
      let book_name = book.preview_url.split("/"); 
      book_name = book_name[book_name.length-1];
      console.log(book_name,searchTerm);
      console.log(book_name.includes(searchTerm));
       book_name.includes(searchTerm)});
    }
    
    componentDidMount(){     
      this.props.dispatch(fetchBook())
    }
    render() { 
        const {books} = this.props.books;
        const {searchTerm} = this.props.searchTerm;
        let isTermAvailable = this.isTermPresent(this.props.searchTerm,books);
        console.log(isTermAvailable)
        return (
         
          <div className={this.useStyles.root}>{books.length>0 && isTermAvailable.length>0?(
           <div className={this.useStyles.inner}>
              {books.map(book => (
                <BookCard book={book} key={book.bib_key}/>
              ))}
               </div>):(<Card>sorry! {searchTerm} Not found</Card>)}
            
          </div>
          );
    }

    
}

const mapStateToProps = state => {
  const newState = state.bookState;

  return {
    books:newState,
  }
}
const mapDispatchToProps = (dispatch) =>{

  let action = bindActionCreators({ fetchBook: fetchBook});
  const newAction = {...action,dispatch};
  return newAction;
}


export default connect(mapStateToProps, mapDispatchToProps) (composeWithSearch(Home));
 
