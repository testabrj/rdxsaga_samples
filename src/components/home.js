import React, { Component } from 'react';
import { Card, Paper, GridList,Grid, List, ListItem } from '@material-ui/core';

class Home extends Component {
    state = {  }
    render() { 
        return (
            <List container spacing={40} justify="center">
               <ListItem item>Home</ListItem>
               <ListItem item>Home</ListItem>
               <ListItem item>Home</ListItem>
               
            </List>
          );
    }
}
 
export default Home;