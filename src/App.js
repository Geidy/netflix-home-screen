import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
<Navbar/>
<Header/>
<Section title= "Mob Movies"/>
     here the components will go 
    </div>
  );
}

export default App;