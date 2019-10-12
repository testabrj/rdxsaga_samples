import React, { Component } from 'react';
import { Card, Paper, GridList,GridListTile, makeStyles, Link, Typography } from '@material-ui/core';
import { connect} from 'react-redux';
import {fetchBook} from '../actions/bookActions';
import { bindActionCreators } from 'redux';


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
            // <List container spacing={40} justify="center">
            //    <ListItem item>Home</ListItem>
            //    <ListItem item>Home</ListItem>
            //    <ListItem item>Home</ListItem>
               
            // </List>
            <div className={this.useStyles.root}>{books.length>0?(
            <GridList cellHeight={160} className={this.useStyles.gridList} cols={3}>
              {books.map(book => (
                <GridListTile key={book.bib_key} cols={1}>
                  <img src={book.thumbnail_url} alt={book.bib_key} />
                  <Typography>
                  <Link href={book.info_url} > Info URL </Link>
                  </Typography>
                </GridListTile>
              ))}
            </GridList>):(<Card>No books found</Card>)}
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
  // return {
  //   fetchBook:fetchBook()
  // }
  let action = bindActionCreators({ fetchBook: fetchBook});

  console.log("actions=",action);
  const newAction = {...action,dispatch};
  console.log("actions=",newAction);
  return newAction;
}


export default connect(mapStateToProps, mapDispatchToProps) (Home);
 
