import React, { Component } from 'react';

import { NavItem } from 'reactstrap';

class NavIcon extends Component {
    constructor (props) {
        super(props);
        this.state = { route: props.route, icon: props.icon };
    }
    render () {
        return (
            <NavItem href={ this.state.route }>
                <i className="material-icons">{ this.state.icon }</i>
            </NavItem>
        );
    }
}

export default NavIcon;
