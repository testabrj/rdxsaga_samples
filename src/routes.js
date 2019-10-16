import React from 'react';
import {Switch,Route,Router} from 'react-router-dom';
import Home from './components/home';

const Routes = (props) =>{

    return (
        // <Router >
            <Switch>
                <Route path="/" exact component={Home} />
                
            </Switch>
        // </Router>
    );


};


export default Routes;