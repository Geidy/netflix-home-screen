import React from 'react';
import Card from './Card';
import '../css/Section.css'

//Science Fiction movies
import blackPanther from '../assets/sc-fi-movies/blackPanther.jpg'
import snowpiercer from '../assets/sc-fi-movies/snowpiercer.jpg'
import spiderman from '../assets/sc-fi-movies/spiderman.jpg'
//import wonderwoman from '../assets/sc-fi-movies/wonderwoman.jpg'
import xmen from '../assets/sc-fi-movies/xmen.jpg'
import catwoman from '../assets/sc-fi-movies/catwoman.jpg'
import avatarO from '../assets/sc-fi-movies/avatarO.jpg'
import avengers from '../assets/sc-fi-movies/avengers.jpg'
import WonderWoman from '../assets/sc-fi-movies/WonderWoman.jpg'


class Section2 extends React.Component {


    render() {
        var images2 = [blackPanther, snowpiercer, spiderman, xmen, catwoman, avatarO, avengers, WonderWoman];
        const images2Map = images2.map(b => <Card key={b} img={b}  />)

        console.log(images2Map);

        return (

            <div>

                <h4 className="title">{this.props.title} </h4> 

                <div className="images">
                    {images2Map}

                   
                </div>


            </div>
        );
    }
}
export default Section2;