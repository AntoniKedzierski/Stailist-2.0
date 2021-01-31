import React, { Component, useState } from 'react'

// Import stylesheets
import '../../../assets/styles/website/newuserform.css';
import Button from '../../misc/Button';

const palette = [
  "#110000", "#483C32", "#AA8669", "#BC9E70", "#DFCAB5", "#FEFEFE",
  "#123554", "#7E5D88", "#DFB339", "#B2A867", "#D8D8D8", "#E684AF",
  "#8EC2DE", "#B47DC8", "#6FA255", "#6A7E3B", "#9B2A2A", "#CE3C3C"
]

const ColorSample = (props) => {
  const [ marked, setMark ] = useState(false);

  return (
    <span className="color-sample" onClick={() => {
        setMark(!marked);
        props.onClick(props.color);
      }} 
      style={{backgroundColor: props.color}}>
      <span className={marked ? "color-mark": "color-unmark"}>
        <span className="color-mark-tick" />
      </span>
    </span>
  ) 
}

export default class Colors extends Component {
  state = {
    colors: []
  }

  componentDidUpdate() {
    console.log(this.state.colors);
  }
  

  drawSamples() {
    return [...Array(palette.length).keys()].map(i => 
      <ColorSample 
        color={palette[i]}
        onClick={value => {
          if (this.state.colors.includes(value)) {
            const deleteColor = [...this.state.colors].filter(c => c !== value);
            this.setState({colors: deleteColor});
          } else {
            const addColor = [value].concat(this.state.colors);
            this.setState({colors: addColor});
          }
        }}
      />  
    )
  }

  submit = () => {
    if (this.state.colors.length > 0) {
      this.props.onCompletePage(this.state);
    } else {
      window.alert("Wybierz przynajmniej jeden color!");
    }
  }

  render() {
    return (
      <div id="color-page">
        <p>Które kolory najbardziej lubisz nosić? Zaznacz wszystkie, które pasują.</p>
        <div className="color-table">
          {this.drawSamples()}
        </div>
        <Button label="Dalej" position="center" onClick={this.submit}/>
      </div>
    )
  }
}
