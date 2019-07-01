import React from 'react';

import Bambi from '../assets/cartoons/Bambi.jpg';

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





  export default Header;