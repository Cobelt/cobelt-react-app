import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

export default class ArticleDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            article: props.article,
            imgHeight: '39.2rem',
        };
    }

    render() {
        return (
            <Card>
                <div className="img-container" style={{height: this.state.imgHeight}}>
                    <CardImg top width="100%" src={this.state.article.imgSrc} alt="Card image cap"/>
                </div>
                <CardBody>
                    <CardTitle>{this.state.article.title}</CardTitle>
                    <CardText>{this.state.article.body}</CardText>
                </CardBody>
            </Card>
        );
    };
}
