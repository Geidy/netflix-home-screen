import React from 'react';
import Card from './Card';
import '../css/Section.css'

//import for cartoon movies
import Bambi from '../assets/cartoons/Bambi.jpg'
import beauty_beast from '../assets/cartoons/beauty_beast.jpg'
import howtotrainyourdragon3 from '../assets/cartoons/howtotrainyourdragon3.jpg'
import lionkingtimPum from '../assets/cartoons/lionkingtimPum.jpg'
import mulan from '../assets/cartoons/mulan.jpg'
import pocahontas from '../assets/cartoons/pocahontas.jpg'
import snow_white from '../assets/cartoons/snow_white.jpg'



class Section1 extends React.Component {


    render() {
        var images1 = [Bambi, beauty_beast, howtotrainyourdragon3, lionkingtimPum, mulan, pocahontas, snow_white];
        
        const images1Map = images1.map(a => <Card key={a} img={a} />)
        

        console.log(images1Map);

        return (

            <div>

                <h1 className="title">{this.props.title} </h1> <br />

                <div className="card">
                    {images1Map}

                   
                </div>
                



            </div>
        );
    }
}
export default Section1;