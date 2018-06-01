import React, { Component } from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const Article = ({ article, imgHeight }) => {
    return (
        <Card>
            <div className="img-container" style={ { height: imgHeight } }>
                <CardImg top width="100%" src={article.imgSrc} alt="Card image cap" />
            </div>
            <CardBody>
                <CardTitle>{article.title}</CardTitle>
                <CardText>{article.body}</CardText>
            </CardBody>
        </Card>
    );
};

export default Article;
