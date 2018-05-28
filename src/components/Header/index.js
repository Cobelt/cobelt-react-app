import React from 'react';
import { Component } from 'react';
import NavigationBar from "./NavigationBar";

class Header extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <NavigationBar />
        );
    }
}

export default Header;
