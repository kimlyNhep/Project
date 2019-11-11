import React, { Component } from 'react';
import './App.css';
import Authentication from '../components/Authentication/Authentication';

class App extends Component {
  constructor(prop) {
    super(prop);
    console.log('[App.js] constructor');
  }

  render() {
    console.log('[App.js] render');
    return (
      <div className='App'>
        <Authentication />
      </div>
    );
  }
}

export default App;
