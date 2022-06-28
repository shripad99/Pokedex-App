import React, { Component } from 'react';
import "./App.css";
import Pokegame from './Components/Pokegame';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Pokegame/>
      </div>
    )
  }
}
