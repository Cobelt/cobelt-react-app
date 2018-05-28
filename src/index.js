import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.scss';

import Header from './components/Header';
import Home from './components/Home';

// const API_KEY = 'AIzaSyD9ESp2R8sT20Nca8gBlwnHaYJ30gV663c';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();