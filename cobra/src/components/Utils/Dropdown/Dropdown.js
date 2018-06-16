import React, { Component } from 'react';

import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import './Dropdown.css';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showCaret: props.showCaret || true,
            fromNav: props.fromNav || false,
            direction: props.direction || 'left',
            toggleName: props.toggleName || 'More',
            dropdownItems: props.dropdownItems,
        };
    }

    getDropdownItem() {
        return this.state.dropdownItems.map(dropdownItem => {
            const { route } = dropdownItem, { term } = dropdownItem;
            return <DropdownItem key={route + '-' + term} href={route}>{ term }</DropdownItem>
        });
    }

    render() {
        // Merci reactstrap pour left qui veut un string et right un boolean
        return (
            <UncontrolledDropdown nav={ this.state.fromNav } inNavbar={this.state.fromNav }>
                <DropdownToggle nav={ this.state.fromNav } caret={ this.state.showCaret }>
                    { this.state.toggleName }
                </DropdownToggle>
                <DropdownMenu left={ (this.state.direction === 'left').toString() } right={ this.state.direction === 'right' }>
                    { this.getDropdownItem() }
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }
}