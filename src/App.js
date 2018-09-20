import React, { Component } from 'react';

import { connect } from "react-redux";

import './App.css';

import ImageProcessor from './imageProcessor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title">React.js Image Processing Demo</div>
        </header>
        <main>
            <ImageProcessor  />
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

