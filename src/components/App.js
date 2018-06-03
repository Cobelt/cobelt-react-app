import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from './Header/index';
import ArticleList from "../containers/ArticleList";
// import ArticleDetails from './ArticleDetails/index';


export default class App extends Component {
    render() {
        return (
            <div>
                <Header />

                <Container>
                    <Row className="margin-top percent-2">
                        <Col sm={12} md={9}>
                            {/*<ArticleDetails baseId={4}/>*/}
                        </Col>
                        <Col sm={12} md={3}>
                            <ArticleList
                                importantSize={12} mediumScreenSize={12} imagesHeight={'16rem'}
                            />
                        </Col>
                    </Row>
                </Container>

                {/*<Footer />*/}
            </div>
        );
    }
}

// <div>
    // Header
        // Page component from router
    // Footer
// </div>
