import React from 'react';
import { Component } from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';

class NavigationBar extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <Navbar brand="artprice" right>
                <div className="nav-wrapper hide-on-small-and-down">
                    <NavItem href="/stories"><Icon>line_weight</Icon></NavItem>
                    <NavItem href="/genealogy"><Icon>supervisor_account</Icon></NavItem>
                    <NavItem href="/games"><Icon>games</Icon></NavItem>
                    <NavItem href="/cards"><Icon>dashboard</Icon></NavItem>
                    <NavItem href="/drawings"><Icon>brush</Icon></NavItem>
                    <NavItem href="/shop"><Icon>shopping_cart</Icon></NavItem>
                </div>
            </Navbar>
        );
    }
}

export default NavigationBar;
