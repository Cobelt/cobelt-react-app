import React from 'react';
import { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';

import Carousel from "../components/Carousel/Carousel";
import ArticleList from "../containers/ArticleList";

import { articleList } from '../assets/fake_DB/articles';
import { carouselSlides } from "../assets/fake_DB/carousel";

export default class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articleList: this.queryArticleList(),
        }
    }

    getCarouselImages = () => {
        return (carouselSlides)
        ;
    };

    queryArticleList = () => {
        return articleList;
    };

    render() {
        return (
            <Row>
                <Carousel items={ this.getCarouselImages() } />

                <Container>

                    <Row className="margin-top percent-2">
                        <Col sm={{size: 3, offset: 1}}>
                            <h2>Dernieres news :</h2>
                        </Col>
                    </Row>

                    <ArticleList
                        importantSize={12} mediumScreenSize={6}
                        articleList={this.state.articleList}
                        imagesHeight={'32.5rem'}
                        onArticleSelect={ selectedArticle => this.setState({selectedArticle}) }
                    />
                </Container>
            </Row>
        );
    }
}
