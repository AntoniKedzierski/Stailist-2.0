import React from 'react';

// Import stylesheets
import './assets/MaterialButton.css';

// Import components

// Export default
export default class MaterialButton extends React.Component {
  render() {
    return (
      <span className="material-button" style={this.props.style} onClick={this.props.onClick}>
        {this.props.label}
      </span>
    )
  }
}
