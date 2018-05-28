import React from 'react';
import { Component } from 'react';

import { Carousel as MaterializeCarousel } from 'react-materialize';

import slide0 from '../../assets/cards/large-1.jpg';
import slide1 from '../../assets/cards/large-1.png';
import slide2 from '../../assets/cards/large-2.jpg';
import slide3 from '../../assets/cards/large-3.jpg';
import slide4 from '../../assets/cards/large-4.png';
import slide5 from '../../assets/cards/large-0.png';

import './index.scss';

class Carousel extends Component {
    render() {
        return (
            <MaterializeCarousel fixedItem={<h4 className="fixed-span">Les dernieres annonces sur le marketplace</h4>} options={{fullWidth: true}}>
                <img src={slide0} />
                <img src={slide1} />
                <img src={slide2} />
                <img src={slide3} />
                <img src={slide4} />
                <img src={slide5} />
            </MaterializeCarousel>
        );
    }
}

export default Carousel;
