import React  from 'react';
import godfather1 from '../assets/mob-movies/godfather1.jpg';
import MovieCard from '../css/MovieCard.css';

function Card(props) {
    return (
    <div className="movie-Card">

        <img src={godfather1} className="movie-images" />

        
   
       </div>
    )
}


    export default Card;