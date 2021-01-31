import React, { Component } from 'react'


import '../../../assets/styles/website/newuserform.css';


const PlanVersion = (props) => {
  return (
    <div>
      <div className="plan-version" onClick={props.onClick}>
        <h3>{props.label}</h3>
        <div className="plan-price">
          <span className="price-currency">PLN</span>
          <span className="price-value">{props.price}</span>
          <span className="subscription-time">/ MO</span>
        </div>
        <p>{props.desc}</p>
      </div>
      <div className="plan-description">
        {props.children}
      </div>
    </div>
  )
}

export default class Prices extends Component {
  render() {
    return (
      <div id="plans-page">
        <p className="plans-page-info">Do aktywacji okresu próbnego nie musisz podawać numeru karty płatniczej!</p>
        <div className="plans">
          <PlanVersion label="Free" desc="Zawsze darmowy" price={0} onClick={() => this.props.onCompletePage({plan: 'free'})}>
            <p>Spersonalizowane propozycje raz na miesiąc.</p>
            <p>Indywidualnie wytrenowany algorytm.</p>
          </PlanVersion>
          <PlanVersion label="Premium" desc="Pierwszy miesiąc za darmo" price={4} onClick={() => this.props.onCompletePage({plan: 'premium'})}>
            <p>Spersonalizowane propozycje raz na tydzień.</p>
            <p>Dostęp do historii propozycji.</p>
          </PlanVersion>
          <PlanVersion label="Max" desc="Dwa miesiące za darmo" price={20} onClick={() => this.props.onCompletePage({plan: 'max'})}>
            <p>Nowe propozycje w dowolnym momencie.</p>
            <p>Żniżki cenowe na wyselekcjonowane marki.</p>
          </PlanVersion>
        </div>
      </div>
    )
  }
}
