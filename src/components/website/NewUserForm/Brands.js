import React, { Component, useState } from 'react'

// Import stylesheets
import '../../../assets/styles/website/newuserform.css';
import Button from '../../misc/Button';

const brands = [
  "H&M", "Calvin Klein", "Reserved", "Zara", "Ralph Lauren", 
  "Adidas", "House", "Vistula", "New Balance", "Cropp",
  "Nike", "Versace", "Pull & Bear", "4F", "Lacoste", "Hugo Boss", 
  "Stradivarius", "Mohito", "Tommy Hilfiger", "Forever 21", "Levi's"
]

const Brand = (props) => {
  const [ marked, setMark ] = useState(false);
  return (
    <span class={marked ? "brand-card" : "brand-card-unchecked"} onClick={() => {
      if (props.onClick(props.label) === 1) {
        setMark(!marked);
      }
    }}>
      {props.label}
    </span>
  )
}

export default class Brands extends Component {
  state = {
    brands: []
  }

  drawBrands = () => {
    return brands.map(b => <Brand label={b} onClick={value => {
      if (this.state.brands.includes(value)) {
        const deleteBrand = this.state.brands.filter(b => b !== value);
        this.setState({brands: deleteBrand});
        return 1;
      } else {
        if (this.state.brands.length < 5) {
          const addBrand = [value].concat(this.state.brands);
          this.setState({brands: addBrand});
          return 1;
        } else {
          window.alert("Wybierz maksymalnie 5 marek!");
          return 0;
        }
      }
    }}/>);
  }

  submit = () => {
    this.props.onCompletePage(this.state);
  }

  render() {
    return (
      <div id="brand-page">
        <p>Które marki najczęściej wybierasz? Zaznacz maksymalnie pięć. 
          Bez obaw, STAILIST nie będzi proponował Ci jedynie tych, które zaznaczysz.</p>
        <div className="brand-table">
          {this.drawBrands()}
        </div>
        <Button label="Dalej" position="center" onClick={this.submit}/>
      </div>
    )
  }
}
