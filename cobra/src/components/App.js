import React, { Component } from 'react';

import Header from './Header/index';
import Router from "../containers/Router";
// footer import

import '../styles/App.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />

                <Router />

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
