import React from 'react';
import PlayLogo from '../assets/icons/play.svg';
import AddLogo from '../assets/icons/add.svg';
import Bambi from '../assets/cartoons/Bambi.jpg';
//import Backdrop from './Backdrop';

/*function Header (props) {
  return (
  <div>

      <img src={Bambi} className="header-image" />

      <div className="header-data">
          <p>{props.name}</p>
      </div>

  </div>
  );

}*/




class Header extends React.Component {
    constructor(){
        super();

    };
    render() {
    const backgroundStyle = {
      backgroundSize: "cover",
      backgroundImage: "../assets/cartoons/Bambi.jpg",
      backgroundPosition: "center",
    }

  
    return (
      <header style={backgroundStyle} className="header">
        <div className="header__container">
          <h1 className="header__container-heading">Bambi</h1>
          <button onClick={() => alert("not a movie!")} className="header-btnPlay">
            <PlayLogo className="header-btnMyList-play" />
            Play
          </button>
  
          <button className="header-btnMyList">
            <AddLogo className="header-btnMyList-add" />
            My List
          </button>
          <p className="header__container-overview"> Lorem Lorem ipsun Loremippsun
          Lorem ipsun </p>
        </div>
        <div className="header--fadeBottom"></div>
      </header>
    );
  }
}
  export default Header;