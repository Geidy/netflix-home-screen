import React from 'react';
import Card from './Card';
import godfather2 from '../assets/mob-movies/godfather2.png';
import ImageGallery from 'react-image-gallery';
import "node_modules/react-image-gallery/styles/scss/image-gallery.scss";
import "node_modules/react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/css/image-gallery.css";

class Section extends React.Component{
    constructor(){
        super();
    }
};


render() {   const images = [
        {
        thumbnail: '../assets/mob-movies/godfather2.png'
        },
        {
            thumbnail: '../assets/mob-movies/godfather2.png'
            },
            {
                thumbnail: '../assets/mob-movies/godfather2.png'
                },
                {
                    thumbnail: '../assets/mob-movies/godfather2.png'
                    },
                    {
                        thumbnail: '../assets/mob-movies/godfather2.png'
                        },
                        {
                            thumbnail: '../assets/mob-movies/godfather2.png'
                            }
      
    ]
};

return(

    <div className='Section'>
        <div>
        <h1>Mob Movies </h1>
            <div>
                <ImageGallery items={images} />
                {this.props.title}
                {this.props.img}

            </div>
            <Movies img={'../assets/mob-movies/godfather2.png'}  />;
            <Movies img={'../assets/mob-movies/godfather2.png'}  />;
        </div>


    </div>
);

export default Section;
