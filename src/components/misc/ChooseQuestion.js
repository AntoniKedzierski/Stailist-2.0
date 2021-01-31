import React, { Component, useState } from 'react'

// Import stylesheets 
import '../../assets/styles/misc/formcard.css';

const RadioButton = (props) => {
  return (
    <div className="question-option">
      <span className="formcard-radio" onClick={props.onClick}>
        <span className={`formcard-radio-${props.checked ? "checked" : "unchecked"}`} />
      </span>
      <p>{props.label}</p>
    </div>
  )
} 

const RadioInputs = (props) => {
  const [ value, setValue ] = useState(0);
  const components = [...Array(props.n).keys()].map(i => 
    <RadioButton 
      checked={value === i + 1} 
      label={props.labels[i]}
      onClick={() => {
        setValue(i + 1);
        props.onChange(i + 1);
      }}
    />
  );

  return (
    <div className="radio-container-vertical">
      {components}
    </div>
  )
}

export default class ChooseQuestion extends Component {
  render() {
    return (
      <div className="form-card">
        <h2>{this.props.children}</h2>
        <RadioInputs n={this.props.labels.length} labels={this.props.labels} onChange={this.props.onChange}/>
      </div>
    )
  }
}
