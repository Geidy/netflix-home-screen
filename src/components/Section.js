import React from 'react';
import Card from './Card';
import '../css/Section.css'

import mafia from '../assets/mob-movies/bellamafia.jpg'
import godfather1 from '../assets/mob-movies/godfather1.jpg';
import godfather2 from '../assets/mob-movies/godfather2.png'
import bronxtale from '../assets/mob-movies/bronxtale.jpg'
import godfather3 from '../assets/mob-movies/godfather3.jpg'
import scarface from '../assets/mob-movies/scarface.jpg'


class Section extends React.Component {


    render() {
        var images = [mafia, godfather1, godfather2, bronxtale, godfather3, scarface];
      

        const imagesMap = images.map(i => <Card key={i} img={i} />)
        

        console.log(imagesMap);
        
       

        return (

            <div>

                <h1 className="title">{this.props.title} </h1> <br />

                <div className="card">
                    {imagesMap}

                   
                </div>
                



            </div>
        );
    }
}

export default Section;
