import React  from 'react';
import godfather1 from '../assets/mob-movies/godfather1.jpg';
import MovieCard from '../css/MovieCard.css';
//import img from './assets/mob-movies/godfather1';
import MovieData from './Movies';

function Card(props) {
    return (
    <div className="movie-Card">

        <img src={godfather1} className="movie-images" />

        
   
       </div>
    )
}


    export default Card;