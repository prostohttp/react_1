import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import currencies from './currencies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <aside>
            <ul className="currList">

            </ul>
        </aside>
      </div>
    );
  }
}

export default App;
