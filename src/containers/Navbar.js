import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

import { changeRoute } from "../actions";

import { Collapse, Navbar as MaterializeNavBar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import NavIcon from '../components/Utils/NavIcon/NavIcon';
import Dropdown from "../components/Utils/Dropdown/Dropdown";

import '../styles/Navbar.css';
import {navDropdown, navIcons, navItems} from "../assets/fake_DB/navbar";

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            showNavItem: props.showNavItem,
            navIcons: props.navIcons || navIcons,
            navItems: props.navItems || navItems,
            navDropdown: props.navDropdown || navDropdown,
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    getNavIcons() {
        return this.state.navIcons.map(navIcon => {
            return <NavIcon
                key={'navicon/' + navIcon.route + '/' + navIcon.icon}
                onClick={ () => this.props.changeRoute(navIcon.route) }
                route={ navIcon.route }
                icon={ navIcon.icon } />
        });
    }

    getNavItems() {
        return this.state.navItems.map(navItem => {
            return (
            <NavItem key={'navterm/' + navItem.route + '/' + navItem.term}
                    onClick={ () => this.props.changeRoute(navItem.route) }>
                <NavLink route={ navItem.route }>
                    { navItem.term }
                </NavLink>
            </NavItem>
            );
        });
    }

    render() {
        const { showNavItem } = this.state;
        const { navDropdown } = this.state;

        return (
            <div>
                <MaterializeNavBar className="primary-color" light expand="md">
                    <NavbarBrand onClick={ () => this.props.changeRoute('HOME') }>cobelt.fr</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            { showNavItem ? this.getNavItems() : this.getNavIcons() }
                            <Dropdown direction={navDropdown.direction} fromNav={true} dropdownItems={navDropdown.items}/>
                        </Nav>
                    </Collapse>
                </MaterializeNavBar>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeRoute: changeRoute,
    }, dispatch);
}

// Pont connecte redux avec react
export default connect(mapDispatchToProps)(Navbar);
