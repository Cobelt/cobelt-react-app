import React from 'react';
import { Component } from 'react';

import { Container, Row } from 'reactstrap';

import Carousel from "./Carousel/Carousel";
import ArticleList from "../../containers/ArticleList";

import { articleList } from '../../assets/fake_DB/articles';
import { carouselSlides } from "../../assets/fake_DB/carousel";

export default class Home extends Component {
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
        // ask to server articles
        // return server.response(articleList);
        return articleList;
    };

    render() {
        return (
            <Row>
                <Carousel items={ this.getCarouselImages() } />
                <Container>
                    <ArticleList
                        importantSize={12} mediumScreenSize={6}
                        articleList={this.state.articleList}
                        onArticleSelect={ selectedArticle => this.setState({selectedArticle}) }
                    />
                </Container>
            </Row>
        );
    }
}
