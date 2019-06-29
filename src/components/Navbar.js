import React from 'react';
import logo from '../assets/icons/Netflix-logo.png'
import profile from '../assets/icons/profile-avatar.png'
import '../css/Navbar.css'

const Navbar = () => (


    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <img src={logo} style={{ width: '110px', height: '30px', marginRight: '50px' }} />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">TV Shows</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Movies</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Recently Added</a>
                </li>

                <li className="nav-item ">
                    <a className="nav-link " href="#">My List</a>
                </li>
            </ul>


           




        </div>

        <div className="left">

<ul className="navbar-nav float">



    <i className="fas fa-search right icons">
    </i>

    {/* style={{ right: '160px', position: 'absolute', color: 'rgba(255, 255, 255, 0.5)', marginTop: '11px' }}>  */}


    <li className="nav-item right" >
        <a className="nav-link " href="#">Kids</a>
    </li>

    <li className="nav-item right">
        <a className="nav-link " href="#">DVD</a>
    </li>


    <i className="fas fa-bell right icons" >

    </i>
    {/* style={{ right: '90px', position: 'absolute', color: 'rgba(255, 255, 255, 0.5)', marginTop: '11px' }}> */}


    <img src={profile} id="profile" className="right"/>

    <i className="fas fa-sort-down right icons"></i>

</ul>
</div>
    </nav >


)


export default Navbar;