import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header path='./Header' components={Header} />
      <Card path='./Card' components={Card} />
    </div>
  );
}

export default App;
