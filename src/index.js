import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers/root_reducer';
const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(ReduxThunk)) (createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
</Provider>
, document.getElementById('root'));