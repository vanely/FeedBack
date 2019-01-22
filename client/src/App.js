import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello there. Welcome to my FeedBack App
          </p>
          <a
            className="App-link"
            href="/auth/google"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign In With Google
          </a>
        </header>
      </div>
    );
  }
}

export default App;
