import React from 'react';
import { Component } from 'react';

import Article from './Article';

import { Row, Col } from 'reactstrap';

import card1 from '../../../assets/cards/1.jpg';
import card2 from '../../../assets/cards/2.jpg';
import card3 from '../../../assets/cards/3.jpg';
import card4 from '../../../assets/cards/4.jpg';

class ArticleList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articleList: [
                { title: 'Article 1', desc: 'Short Desc 1', imgSrc: card1, isImportant: true },
                { title: 'Article 2', desc: 'Short Desc 2', imgSrc: card2 },
                { title: 'Article 3', desc: 'Short Desc 3', imgSrc: card3 },
                { title: 'Article 4', desc: 'Short Desc 4', imgSrc: card4 },
            ]
        };
    }

    getArticleList = () => {
        return this.state.articleList.map(article => {
            return (
                <Col sm={12} md={article.isImportant ? 12 : 6}>
                    <Article article={article} />
                </Col>
            );
        });
    };

    render() {
        return (
            <Row>
                { this.getArticleList() }
            </Row>
        );
    }
}

export default ArticleList;
