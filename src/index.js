import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
    createStore,
    combineReducers
} from 'redux';


import { Provider } from "react-redux";

import * as ipReducers from "./imageProcessor/IpReducers";



const appReducers = combineReducers( { ipState: ipReducers.ipReducer} );

const imgProcStore = createStore( appReducers, {} );


console.log( imgProcStore.getState() );

const rootRender = <Provider store={imgProcStore}>
    <App />
</Provider>;

ReactDOM.render(rootRender, document.getElementById('root'));

