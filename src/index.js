import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers/root_reducer';
import rootSaga from './sagas/rootSaga';
const sagaMiddleWare = createSagaMiddleware();

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(sagaMiddleWare)) (createStore);
const createNewStore = createStoreWithMiddleware(rootReducer);
sagaMiddleWare.run(rootSaga);

ReactDOM.render(
<Provider store={createNewStore}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
</Provider>
, document.getElementById('root'));

