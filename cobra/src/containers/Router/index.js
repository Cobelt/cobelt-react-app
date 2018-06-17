import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomePage from "../../pages/Home";
import ArticlePage from "../../pages/Article";

class Router extends Component {
    constructor(props) {
        super(props);

        this.oldRoute = null;
    }

    routeToJSX = () => {
        if (this.props.route !== this.oldRoute) {
            this.oldRoute = this.props.route;

            switch (this.props.route) {

                case 'HOME':
                    return <HomePage />;
                case 'ARTICLE':
                    return <ArticlePage />;

                default:
                    return 'HOME';
            }

        }
    };

    render() {
        return this.routeToJSX();
    };
}



function mapStateToProps(state) {
    return {
        route: state.route,
    };
}

export default connect(mapStateToProps)(Router);