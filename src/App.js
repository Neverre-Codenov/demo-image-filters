import React, { Component } from 'react';

import { connect } from "react-redux";

import './App.css';

import ImageProcessor from './imageProcessor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React / Node.js Image Processing Demo</h1>
        </header>
        <main>
            <div className='app-description'>This is a simple react-app intended to demonstrate image processing features available through node.js and react.</div>
            <div className="image-area">
                <ImageProcessor  />
            </div>
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

