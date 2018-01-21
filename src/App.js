import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
          <header>
              <h1>Hi, I'm Han.</h1>
          </header>

          <article>
              <h2>About me</h2>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
          </article>

          <footer>
              <p>copyright 2016 HW</p>
          </footer>
      </div>
    );
  }
}

export default App;
