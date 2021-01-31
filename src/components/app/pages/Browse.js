import React from 'react';

// Import stylesheets
import '../assets/Browse.css';

// Import components
import MaterialButton from '../MaterialButton';

// Samples
import Sweater1 from '../../../assets/images/proposition-samples/sweter1.jpg';
import Sweater2 from '../../../assets/images/proposition-samples/sweter2.jpg';
import Sweater3 from '../../../assets/images/proposition-samples/sweter3.jpg';
import SweaterK1 from '../../../assets/images/proposition-samples/sweter_k1.jpg';
import SweaterK2 from '../../../assets/images/proposition-samples/sweter_k2.jpg';
import Dress from '../../../assets/images/proposition-samples/sukienka1.jpg';

// Additional components
class Proposition extends React.Component {
  render() {
    return (
      <div className="proposition" >
        <img src={this.props.img} alt="node" />
        <h1>{this.props.label}</h1>
        <hr />
        <span className="price">{this.props.desc}</span>
      </div>
    )
  } 
}

// Export default
export default class Browse extends React.Component {

  maleProposition() {
    if (this.props.userSex === "male") {
      return (
        <div className="browser">
          <Proposition 
            img={Sweater1} 
            label="Czarny sweter"
            desc="69.99 PLN"/>
          <Proposition 
            img={Sweater2} 
            label="Brązowy sweter"
            desc="89.99 PLN"/>
          <Proposition 
            img={Sweater3}
            label="Szary sweter z golfem"
            desc="69.99 PLN" />
        </div>
      )
    }
  }

  femaleProposition() {
    if (this.props.userSex === "female") {
      return (
        <div className="browser">
          <Proposition 
            img={SweaterK1} 
            label="Kremowy sweter"
            desc="H&M"/>
          <Proposition 
            img={Dress} 
            label="Sukienka"
            desc="H&M"/>
          <Proposition 
            img={SweaterK2}
            label="Sweter z półgolfem"
            desc="H&M"
             />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <div className="command-bar">
          <span style={{fontSize: 20}}>
            Oto propozycje które dobrał dla Ciebie nasz algorytm. Jeśli podoba Ci sie któraś z nich, to kliknij, a nasz STAILIST-a przeniesie Cię na stronę sprzedawcy.
          </span>
          <MaterialButton label="Następne" />
        </div>
        {this.maleProposition()}
        {this.femaleProposition()}
      </div>
      
    )
  }
}