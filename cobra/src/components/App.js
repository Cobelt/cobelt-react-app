import React, { Component } from 'react';

import Navbar from '../containers/Navbar';
import Router from "../containers/Router";
// footer import

import { Grid } from 'muejs';


import '../styles/App.css';

export default class App extends Component {
    render() {
        return (
            <Grid>
                <Navbar />

                <Router />

                {/*<Footer />*/}
            </Grid>
        );
    }
}

// <div>
    // Header
        // Page component from router
    // Footer
// </div>
