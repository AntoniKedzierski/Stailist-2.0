import React, { Component } from 'react'

// Import stylesheet
import '../../assets/styles/misc/controls.css';

export default class Select extends Component {
  render() {
    return (
      <select 
        className={`custom-select ${this.props.warning ? "input-warning" : ""}`} 
        value={this.props.value} 
        onChange={this.props.onChange}
      >
        <option selected hidden disabled>{this.props.placeholder}</option>
        {this.props.children}
      </select>
    )
  }
}
