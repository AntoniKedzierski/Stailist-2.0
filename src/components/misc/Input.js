import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <div style={{position: 'relative'}}>
        <input 
          type={this.props.type ? this.props.type : "text"}
          className={`custom-input ${this.props.warning ? "input-warning" : ""}`}  
          value={this.props.value} 
          onChange={this.props.onChange} 
          required
        />
        <span className="floating-input-label">{this.props.placeholder}</span>
      </div>
    )
  }
}
