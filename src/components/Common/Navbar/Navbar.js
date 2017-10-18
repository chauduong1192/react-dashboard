import React, { Component } from 'react';
import './Navbar.scss';
import logo from './../../../images/logo.png';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-header">
        <div className="navbar-brand navbar-brand-center site-gridmenu-toggle">
          <img className="navbar-brand-logo" src={logo} alt="Logo" />
          <span className="navbar-brand-text hidden-xs"> Remark</span>
        </div>
      </div>
    );
  }
}
export default Navbar;
