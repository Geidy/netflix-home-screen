import React from 'react';
import PlayLogo from '../assets/icons/play.svg';
import AddLogo from '../assets/icons/add.svg';
import Bambi from '../assets/cartoons/Bambi.jpg';
//import Backdrop from './Backdrop';

function Header (props) {
  return (
  <div>

      <img src={Bambi} className="header-image" />

      <div className="header-data">
          <p>{props.name}</p>
      </div>

  </div>
  );

}



/*function Header(props) {
    const backgroundStyle = {
      backgroundSize: "cover",
      backgroundImage: "../assets/mob-movies/godfather1.jpg",
      backgroundPosition: "center",
    }
  
    return (
      <header style={backgroundStyle} className="header">
        <div className="header__container">
          <h1 className="header__container-heading">{props.movies}</h1>
          <button onClick={() => alert("not a movie!")} className="header__container-btnPlay">
            <PlayLogo className="header__container-btnMyList-play" />
            Play
          </button>
  
          <button className="header__container-btnMyList">
            <AddLogo className="header__container-btnMyList-add" />
            My List
          </button>
          <p className="header__container-overview">{props.movies}</p>
        </div>
        <div className="header--fadeBottom"></div>
      </header>
    )
  }*/

  export default Header;