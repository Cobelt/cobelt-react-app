import React, { Component } from 'react';

import { Collapse, Navbar as MaterializeNavBar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import NavIcon from '../Tools/NavIcon/index';
import Dropdown from "../Tools/Dropdown/index";

import '../../styles/Navbar.css';
import {navDropdown, navIcons, navItems} from "../../assets/fake_DB/navbar";

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

  renderNavIcons() {
    return this.state.navIcons.map(navIcon => {
      return <NavIcon
        key={'navicon/' + navIcon.route + '/' + navIcon.icon}
        route={ navIcon.route }
        icon={ navIcon.icon } />
    });
  }

  renderNavItems() {
    return this.state.navItems.map(navItem => {
      return (
        <NavItem key={'navterm/' + navItem.route + '/' + navItem.term}>
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
        <MaterializeNavBar className="bg set-1 primary" light expand="md">
          <NavbarBrand href="http://cobelt.fr">cobelt.fr</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              { showNavItem ? this.renderNavItems() : this.renderNavIcons() }
              <Dropdown direction={navDropdown.direction} fromNav={true} dropdownItems={navDropdown.items}/>
            </Nav>
          </Collapse>
        </MaterializeNavBar>
      </div>
    );
  }
}

// Pont connecte redux avec react
export default Navbar;
