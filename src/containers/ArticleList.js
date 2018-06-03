import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectArticle } from '../actions/index';

import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

import '../styles/ArticleList.css';



class ArticleList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            importantSize: props.importantSize,
            mediumScreenSize: props.mediumScreenSize,
            imagesHeight: props.imagesHeight,
        };
    }

    renderList() {
        return this.props.articles.map(article => {
            return (
                <Col key={article.id + '/' + article.imgSrc} className="margin-bottom percent-5" sm={12}
                     md={article.isImportant ? this.state.importantSize : this.state.mediumScreenSize}>
                    <div className={ false ? "selected" : ""} onClick={() => this.props.selectArticle(article)}>
                        <Card className="article-item">
                            <div className="img-container" style={{height: this.state.imagesHeight,}}>
                                <CardImg top width="100%" src={article.imgSrc} alt="Card image cap"/>
                            </div>
                            <CardBody>
                                <CardTitle>{article.title}</CardTitle>
                                <CardText>
                                    {article.desc}
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
            );
        });
    };

    render() {
        return (
            <Row>
                {this.renderList()}
            </Row>
        );
    };
}



function mapStateToProps(state) {
    return {
        articles: state.articles
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectArticle: selectArticle
  }, dispatch);
}


// Pont connecte redux avec react
export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);