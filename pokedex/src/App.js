import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Dasboard from './components/dasboard';

class App extends Component {
  render(){
  return( 
    <div className="App">
      <NavBar />
      <div className="container">
        <Dasboard />        
      </div>
    </div>
  )}
}

export default App;
