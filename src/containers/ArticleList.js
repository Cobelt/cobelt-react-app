import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeRoute, selectArticle, selectQuantityArticles } from '../actions/index';

import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

import '../styles/Articles.css';

class ArticleList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            importantSize: props.importantSize,
            mediumScreenSize: props.mediumScreenSize,
            imagesHeight: props.imagesHeight || '16rem',
            listLength: props.listLength || 6,
        };

        this.props.selectQuantityArticles(this.state.listLength);
    }

    onArticleClick(article) {
        this.props.changeRoute('ARTICLE');
        this.props.selectArticle(article);
    }

    renderCard(article, isSelected) {
        return (
            <Card className="article-item">
                <div className={ isSelected ? "selected" : "not-selected" }
                     onClick={() => this.onArticleClick(article) }>

                    <div className="img-container" style={{height: this.state.imagesHeight,}}>
                        <CardImg top width="100%" src={article.imgSrc} alt="Card image cap"/>
                    </div>

                    <CardBody>
                        <CardTitle>{article.title}</CardTitle>
                        <CardText>
                            {article.desc}
                        </CardText>
                    </CardBody>

                </div>
            </Card>
        );
    }

    renderList() {
        return this.props.articles.map(article => {
            const isSelected = (this.props.activeArticle && article.id === this.props.activeArticle.id);
            return (
                <Col key={article.id + '/' + article.imgSrc}
                    className="margin-bottom percent-5" sm={12}
                     md={article.isImportant ? this.state.importantSize : this.state.mediumScreenSize}>

                    { this.renderCard(article, isSelected) }

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
        articles: state.articles,
        activeArticle: state.activeArticle,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeRoute: changeRoute,
        selectArticle: selectArticle,
        selectQuantityArticles: selectQuantityArticles,
    }, dispatch);
}


// Pont connecte redux avec react
export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);