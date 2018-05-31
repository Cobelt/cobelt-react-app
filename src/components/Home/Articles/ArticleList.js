import React, { Component } from 'react';

import { Row, Col } from 'reactstrap';

import Article from './Article';

import card1 from '../../../assets/cards/1.png';
import card2 from '../../../assets/cards/2.png';
import card3 from '../../../assets/cards/3.png';
import card4 from '../../../assets/cards/4.jpg';

import important1 from '../../../assets/cards/large-4.png';

class ArticleList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articleList: [
                { id: 4, title: 'Article 5', desc: 'Some quick example text to build on the card title and make up the bulk of the card\'s content. 5', imgSrc: important1, isImportant: true },
                { id: 3, title: 'Article 1', desc: 'Some quick example text to build on the card title and make up the bulk of the card\'s content. 1', imgSrc: card1 },
                { id: 2, title: 'Article 2', desc: 'Some quick example text to build on the card title and make up the bulk of the card\'s content. 2', imgSrc: card2 },
                { id: 1, title: 'Article 3', desc: 'Some quick example text to build on the card title and make up the bulk of the card\'s content. 3', imgSrc: card3 },
                { id: 0, title: 'Article 4', desc: 'Some quick example text to build on the card title and make up the bulk of the card\'s content. 4', imgSrc: card4 },
            ]
        };
    }

    getArticleList = () => {
        return this.state.articleList.map(article => {
            return (
                <Col key={article.id + '/' + article.imgSrc} sm={12} md={article.isImportant ? 12 : 6}>
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
