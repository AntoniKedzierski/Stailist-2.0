import React, { Component } from 'react'
import PropTypes from 'prop-types';

// Import stylesheets
import '../../assets/styles/misc/controls.css';

export default class Button extends Component {
  render() {
    if (this.props.position) {
      return (
        <div className="center-button" style={{alignItems: this.props.position}}>
          <div className="custom-button" onClick={this.props.onClick}>
            {this.props.label}
          </div>
        </div>
      )
    } else {
      return (
        <div className="custom-button" onClick={this.props.onClick}>
          {this.props.label}
        </div>
      )
    }
  }
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
}