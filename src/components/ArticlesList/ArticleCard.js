import React, { Component } from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

import './ArticleCard.css';

const ArticleCard = ({article, imgHeight = '30rem', onArticleSelect}) => {

    return (
        <div onClick={() => onArticleSelect(article)}>
            <Card className="article-item">
                <div className="img-container" style={ { height: imgHeight, } }>
                <CardImg top width="100%" src={article.imgSrc} alt="Card image cap" />
                </div>
                <CardBody>
                    <CardTitle>{article.title}</CardTitle>
                    <CardText>
                        {article.desc}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default ArticleCard;
