import React, { Component } from 'react'

// Import stylesheets
import '../../assets/styles/misc/navbar.css';
import Logo from './Logo';

export default class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <div id="nav-container">
          <Logo />
          <ul id="nav-items">
            <li><a href="/">HOME</a></li>
            <li><a href="/app">APLIKACJA</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
