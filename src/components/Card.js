import React  from 'react';
import godfather1 from '../assets/mob-movies/godfather1.jpg';
import MovieCard from '../css/MovieCard.css';
//import img from './assets/mob-movies/godfather1';

function movies (props) {
    return (
    <div className="movie-Card">

        <img src={godfather1} className="movie-images" />

        <div className="movie-data">
            <p>{props.img}</p>
        </div>

    </div>
    );

}

   /* <div>
        <div onClick={props.movies} className="movie">
            <img src={props.img} alt className="movie" />
        </div>
    </div>*/


    export default movies;