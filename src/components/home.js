import React, { Component } from 'react';
import { Card, Paper, GridList,GridListTile, List, ListItem,makeStyles } from '@material-ui/core';
import { connect} from 'react-redux';
import {fetchBook} from '../actions/bookActions';
import { bindActionCreators } from '../../../../Library/Caches/typescript/3.6/node_modules/redux';

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
     this.props.dispatch(fetchBook());

    }
    render() { 
        
        return (
            // <List container spacing={40} justify="center">
            //    <ListItem item>Home</ListItem>
            //    <ListItem item>Home</ListItem>
            //    <ListItem item>Home</ListItem>
               
            // </List>
            <div className={this.useStyles.root}>
            <Card>{this.state.books}</Card>   
            <GridList cellHeight={160} className={this.useStyles.gridList} cols={3}>
              {this.state.books.map(tile => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                  <img src={tile.img} alt={tile.title} />
                </GridListTile>
              ))}
            </GridList>
          </div>
          );
    }

    
}

// function mapStateToProps(state) {
//   const { requestBook } = state
 

//   return {
//    state
//   }
// }

const mapStateToProps = state => {
  const newState = state.bookState;
  console.log(newState);
  return {
    newState
  }
}
const mapDispatchToProps = (dispatch) =>{
  let action = bindActionCreators({ fetchBook:fetchBook});

  console.log("actions=",action);
  const newAction = {...action,dispatch};
  console.log("actions=",newAction);
  return newAction;
}


export default connect(mapStateToProps, mapDispatchToProps) (Home);
 
