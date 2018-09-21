import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    BrowserRouter as DemoRouter,
} from 'react-router-dom';
import {
    createStore,
    combineReducers
} from 'redux';

import { Provider } from "react-redux";
import * as ipReducers from "./imageProcessor/IpReducers";

const appReducers = combineReducers( { ipState: ipReducers.ipReducer} );
const imgProcStore = createStore( appReducers, {} );

const rootRender = <Provider store={imgProcStore}>
    <DemoRouter>
        <App />
    </DemoRouter>
</Provider>;

ReactDOM.render(rootRender, document.getElementById('root'));

