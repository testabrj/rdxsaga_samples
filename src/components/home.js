import React, { Component } from 'react';
import { Card, makeStyles } from '@material-ui/core';
import { connect} from 'react-redux';
import {fetchBook} from '../actions/bookActions';
import { bindActionCreators } from 'redux';
import BookCard from './bookCard';


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
  
    
    componentDidMount(){
    //  let { dispatch } = this.props.actions;   
     
      this.props.dispatch(fetchBook())
    }
    render() { 
        const {books} = this.props.books;
        return (
         
          <div className={this.useStyles.root}>{(!books.error && books.length>0)?(
           <div className={this.useStyles.inner}>
              {books.map(book => (
                <BookCard book={book} key={book.bib_key}/>
              ))}
               </div>):(<Card>Loading</Card>)}
            
          </div>
          );
    }

    
}

const mapStateToProps = state => {
  const newState = state.bookState;

  return {
    books:newState
  }
}
const mapDispatchToProps = (dispatch) =>{

  let action = bindActionCreators({ fetchBook: fetchBook});
  const newAction = {...action,dispatch};
  return newAction;
}


export default connect(mapStateToProps, mapDispatchToProps) (Home);
 
