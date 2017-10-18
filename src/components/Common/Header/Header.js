import React, { Component } from 'react';
import './Header.css';
import Navbar from '../Navbar';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav className="site-navbar navbar navbar-default navbar-fixed-top navbar-inverse bg-green">

          <Navbar />

          <div className="navbar-container container-fluid">
            <div className="collapse navbar-collapse navbar-collapse-toolbar">
              {}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
