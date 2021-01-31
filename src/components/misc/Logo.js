import React, { Component } from 'react'

// Import stylesheets
import '../../assets/styles/misc/logo.css';

export default class Logo extends Component {
  render() {
    return (
      <span id="logo">
        <a id="logo-stailist-text" href="/">stailist</a>
        <span id="s-letter">S</span>
      </span>
    )
  }
}
