import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Home from './components/Home';
import ArticleDetails from "./components/ArticleDetails";

// const API_KEY = 'AIzaSyD9ESp2R8sT20Nca8gBlwnHaYJ30gV663c';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
                <ArticleDetails baseId={4}/>
            </div>
        );
    }
}

// <div>
    // Header
    // Page component from router
    // Footer
// </div>

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();