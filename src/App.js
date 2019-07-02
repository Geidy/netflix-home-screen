import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

import mafia from './assets/mob-movies/bellamafia.jpg'
import godfather1 from './assets/mob-movies/godfather1.jpg';
import godfather2 from './assets/mob-movies/godfather2.png'
import bronxtale from './assets/mob-movies/bronxtale.jpg'
import godfather3 from './assets/mob-movies/godfather3.jpg'
import scarface from './assets/mob-movies/scarface.jpg'


function App() {
  var images = [mafia, godfather1, godfather2, bronxtale, godfather3, scarface];

  return (
    <div className="App">
<Navbar/>

<Section title= "Mob Movies" images = {images}/>
<Section1 title= "Cartoon Movies" />
<Section2 title= "Science Fiction" />
  
    </div>
  );
}

export default App;