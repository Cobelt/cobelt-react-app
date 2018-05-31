import React from 'react';
import { Component } from 'react';

import { Container, Row } from 'reactstrap';

import Carousel from "./Carousel/Carousel";
import ArticleList from "./Articles/ArticleList";

import slide1 from '../../assets/cards/large-1.jpg';
// import slide2 from '../../assets/cards/large-4.png';
import slide3 from '../../assets/cards/large-3.jpg';
import slide4 from '../../assets/cards/large-1.png';
import slide5 from '../../assets/cards/large-0.png';
import slide6 from '../../assets/cards/large-2.jpg';


export default class Home extends Component {
    getCarouselImages = () => {
        return ([
                { src: slide1, altText: 'Slide 1', caption: 'Slide 1' },
                //{ src: slide2, altText: 'Slide 2', caption: 'Slide 2' },
                { src: slide3, altText: 'Slide 3', caption: 'Slide 3' },
                { src: slide4, altText: 'Slide 4', caption: 'Slide 4' },
                { src: slide5, altText: 'Slide 5', caption: 'Slide 5' },
                { src: slide6, altText: 'Slide 5', caption: 'Slide 5' },
            ]
        );
    };

    render() {
        return (
            <Row>
                <Carousel items={ this.getCarouselImages() } />
                <Container>
                    <ArticleList />
                </Container>
            </Row>
        );
    }
}
