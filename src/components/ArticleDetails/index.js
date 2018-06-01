import React from 'react';
import { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';

import Article from "./Article/Article";
import ArticleList from "../ArticlesList/ArticleList";

import {articleList} from "../../assets/fake_DB/articles";

const DEFAULT_ARTICLE_ID = 4;
const QTY_ARTICLE_LIST = 4;

export default class ArticleDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedArticle: articleList.filter(article => article.id === DEFAULT_ARTICLE_ID)[0],
            articleList: this.queryNArticleListExceptOne(QTY_ARTICLE_LIST, DEFAULT_ARTICLE_ID),
        };
    }



    queryNArticleListExceptOne = (n, id) => {
        // ask to server articles
        // return server.response(articleList);

        // Pour ne pas surcharger le serveur : On en query x+1, on pop celui qu'on affiche deja si il est dans les data recupérées, sinon on pop le dernier
        // simulate server response with n = 4 and id = 4

        let data = articleList.filter(article => article.id !== id);
        if (data.length > n) {
            data.pop();
        }
        return data;
    };

    render() {
        return (
            <Container>
                <Row className="margin-top percent-2">
                    <Col sm={12} md={9}>
                        <Article article={this.state.selectedArticle} imgHeight={'39.2rem'}/>
                    </Col>
                    <Col sm={12} md={3}>
                        <ArticleList
                            importantSize={12} mediumScreenSize={12} imagesHeight={'16rem'}
                            articleList={this.state.articleList}
                            onArticleSelect={selectedArticle => this.setState({selectedArticle, articleList: this.queryNArticleListExceptOne(QTY_ARTICLE_LIST, selectedArticle.id)}) }
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}
