import React from 'react';


import '../css/Card.css';
import '../css/Section.css';




function Card(props) {


    return (
        <div className="card">

            <img src={props.img} className="img-styling" />


        </div>
    )
}


export default Card;