import React from 'react';
import "../css/Header.css";

import Bambi from '../assets/cartoons/Bambi.jpg';

function Header (props) {
  return (
  <div>

      <img src={Bambi} className="header-image" />
      <button className="button">Play</button>
      <button className="button1"> + My List</button>

     

  </div>
  );

}





  export default Header;