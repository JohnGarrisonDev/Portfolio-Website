import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">
    <h1> Hello World </h1>
    <Todos></Todos>
    </div>
  );
}

export default App;
