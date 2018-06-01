import React, { Component } from 'react';

import { Row, Col } from 'reactstrap';

import ArticleCard from './ArticleCard';

const ArticleList = ({articleList, onArticleSelect, importantSize, mediumScreenSize, imagesHeight}) => {

    this.getJSXArticleList = () => {
        return articleList.map(article => {
            return (
                <Col key={article.id + '/' + article.imgSrc} className="margin-bottom percent-5" sm={12} md={article.isImportant ? importantSize : mediumScreenSize} >
                    <ArticleCard
                        imgHeight={imagesHeight}
                        article={article}
                        onArticleSelect={onArticleSelect}
                    />
                </Col>
            );
        });
    };

    return (
        <Row>
            { this.getJSXArticleList() }
        </Row>
    );
};

export default ArticleList;
