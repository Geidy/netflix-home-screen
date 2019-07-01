import React from 'react';
import Card from './Card';
import godfather2 from '../assets/mob-movies/godfather2.png';


class Section extends React.Component{

render() {  
return(

    <div className='Section'>
        
        <h1>{this.props.title} </h1>
       <Card />
       <Card />
       <Card />
            


    </div>
);
}
}

export default Section;
