import React from 'react';
import './App.css';
//import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className="App">

<Header/>
<Card path='./Card' component={Card} />
     here the components will go 
    </div>
  );
}

export default App;
