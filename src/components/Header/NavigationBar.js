import React, { Component } from 'react';


import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import NavIcon from '../Utils/NavIcon';
import Dropdown from "../Utils/Dropdown";

export default class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            showNavItem: props.showNavItem,
            navIcons: props.navIcons || [
                { route: "/stories", icon: "line_weight" },
                { route: "/games", icon: "games" },
                { route: "/cards", icon: "dashboard" },
                { route: "/drawings", icon: "brush" },
                { route: "/shop", icon: "shopping_cart" },
            ],
            navItems: props.navItems || [
                { route: "/stories", term: "Stories" },
                { route: "/games", term: "Games" },
                { route: "/cards", term: "Cards" },
                { route: "/drawings", term: "Drawings" },
                { route: "/shop", term: "Shop" },
            ],
            navDropdown: props.navDropdown || {
                direction: 'right',
                items: [
                    { route: "/components", term: 'Components' },
                    { route: "https://github.com/cobelt", term: 'GitHub' },
                ],
            }
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    getNavIcons() {
        return this.state.navIcons.map(navIcon => {
            return <NavIcon key={navIcon.route + '/' + navIcon.icon} route={ navIcon.route } icon={ navIcon.icon } />
        });
    }

    getNavItems() {
        return this.state.navItems.map(navItem => {
            return (
            <NavItem>
                <NavLink key={navItem.route + '/' + navItem.term} route={ navItem.route }>
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
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">cobelt.fr</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            { showNavItem ? this.getNavItems() : this.getNavIcons() }
                            <Dropdown direction={navDropdown.direction} fromNav={true} dropdownItems={navDropdown.items}/>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}