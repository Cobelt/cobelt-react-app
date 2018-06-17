import React, { Component } from 'react';
import '../styles/App.css';
import ProjectsList from './Projects';

import Navbar from "./Navbar";

export default class App extends Component {
  render() {
    return (
      <div>

        <Navbar showNavItem={true} />

        <ProjectsList />

        {/*<Footer />*/}
      </div>
    );
  }
}
