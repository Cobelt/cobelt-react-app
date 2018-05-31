import React, { Component } from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

import './article.css';

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.article.id,
            image: props.article.imgSrc,
            title: props.article.title,
            desc: props.article.desc,
            isImportant: props.article.isImportant,
        };
    }

    render() {
        console.log(this.state);
        return (
            <Card>
                <div className="img-container">
                <CardImg top width="100%" src={this.state.image} alt="Card image cap" />
                </div>
                <CardBody>
                    <a href={'/article/' + this.state.id}>
                        <CardTitle>{this.state.title}</CardTitle>
                    </a>
                    <CardText>{this.state.desc}</CardText>
                </CardBody>
            </Card>
        );
    }
}

export default Article;
