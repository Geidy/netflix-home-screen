import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

function App() {
  return (
    <div className="App">
<Navbar/>

<Section title= "Mob Movies"/>
<Section1 title= "Cartoon Movies" />
<Section2 title= "Science Fiction" />
  
    </div>
  );
}

export default App;