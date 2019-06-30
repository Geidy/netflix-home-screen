import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Section from './components/Section';
import Header from './components/Header';

function App() {
  return (
    <div className="App">

      <Header path='./Header' component={Header} />
      <Card path='./Card' component={Card} />
      <Section path='./Section' component={Section} />
    </div>
  );
}

export default App;
