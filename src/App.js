import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    Route,
    withRouter
} from 'react-router-dom';

import './App.css';

import Navigation from './nav/Navigation';
import ImageProcessor from './imageProcessor';
import Gallery    from './gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title">React.js Image Processing Demo</div>
        </header>
        <div className='nav-wrap'>
          <Navigation/>
        </div>
        <main>

            <Route
                exact
                path="/"
                component={ImageProcessor}
            />
            <Route
                path="/gallery"
                component={Gallery}
            />
            {/*<ImageProcessor  />*/}
        </main>
      </div>
    );
  }
}

const mapStateToProps = ( state, props ) => {
    return state;
};

App = connect(mapStateToProps)(App);
App = withRouter(App);

export default App;

