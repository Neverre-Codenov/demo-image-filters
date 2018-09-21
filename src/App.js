import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route } from 'react-router-dom';

import './App.css';

import ImageProcessor from './imageProcessor';
import Navigation from './nav/Navigation';

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
                path="/gallery"
                component={ImageProcessor}
            />
            <Route
                exact
                path="/"
                component={ImageProcessor}
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

export default App;

