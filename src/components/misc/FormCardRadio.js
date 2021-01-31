import React, { Component, useState } from 'react'

// Import stylesheets 
import '../../assets/styles/misc/formcard.css';

const RadioButton = (props) => {
  return (
    <span className="formcard-radio" onClick={props.onClick}>
      <span className={`formcard-radio-${props.checked ? "checked" : "unchecked"}`} />
    </span>
  )
} 

const RadioInputs = (props) => {
  const [ value, setValue ] = useState(0);
  const components = [...Array(props.n).keys()].map(i => 
    <RadioButton 
      checked={value === i + 1} 
      onClick={() => {
        setValue(i + 1);
        props.onChange(i + 1);
      }}
    />
  );

  return (
    <div className="radio-container">
      {components}
    </div>
  )
}

export default class FormCardRadio extends Component {
  render() {
    return (
      <div className="form-card">
        <h2>{this.props.children}</h2>
        <div className="form-card-container">
          <span className="form-card-label">{this.props.leftLabel}</span>
          <RadioInputs n={this.props.n} onChange={this.props.onChange}/>
          <span className="form-card-label">{this.props.rightLabel}</span>
        </div>     
      </div>
    )
  }
}

