import React, { Component } from 'react';

import './styles.scss';
import AppRouter from '../AppRouter';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <AppRouter />
      </div>
    );
  }
}

export default App;
