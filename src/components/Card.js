import React  from 'react';
//import img from './assets/mob-movies/godfather1';

const movies = (props) => (

    <div>
        <div onClick={props.movies} className="movie">
            <img src={props.img} alt className="movie" />
        </div>
    </div>

);
export default movies;