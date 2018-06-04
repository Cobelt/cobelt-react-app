import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import ArticleList from "../containers/ArticleList";
import ArticleDetail from '../containers/ArticleDetail';

export default class Article extends Component {
    render() {
        return (
            <Container>
                <Row className="margin-top percent-2">
                    <Col sm={12} md={9}>
                        <ArticleDetail baseId={4}/>
                    </Col>
                    <Col sm={12} md={3}>
                        <ArticleList
                            importantSize={12} mediumScreenSize={12} imagesHeight={'16rem'}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}
