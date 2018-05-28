import React from 'react';
import { Component } from 'react';

import { Row } from 'react-materialize';
import Carousel from "./Carousel";

import './index.scss';

class Home extends Component {
    render() {
        return (
            <Row>
                <Carousel />
            </Row>
        );
    }
}

export default Home;