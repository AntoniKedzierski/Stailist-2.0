import React, { Component } from 'react'

// Import components
import Button from '../../misc/Button';
import Input from '../../misc/Input';
import Select from '../../misc/Select';

// Import stylesheets
import '../../../assets/styles/website/newuserform.css';

// Import images
import LampAndLaptop from '../../../assets/images/lamp-and-laptop.png';

export default class AgeAndSex extends Component {
  state = {
    data: {
      age: "",
      sex: "",
    },
    toggleAgeWarning: false,
    toggleSexWarning: false
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  displayWarnings() {
    if (!(this.state.data.age || this.state.data.sex)) {
      this.setState({toggleSexWarning: true, toggleAgeWarning: true})
    }
    else if (!this.state.data.age) {
      this.setState({toggleAgeWarning: true})
    }
    else if (!this.state.data.sex) {
      this.setState({toggleSexWarning: true})
    }
  }

  render() {
    return (
      <div>
        <div id="age-and-sex">
          <img id="lamp-and-laptop" src={LampAndLaptop} alt="lamp" />
          <div id="aas-content">
            <h1>Poznaj się ze swoim stylistą</h1>
            <p>Aby stworzyć swojego własnego STAILIST-ę, potrzebujemy poznać twój charakter, osobowość oraz lifestyle.</p>
            <p>Zostaniesz poproszony o wypełnienie skróconej wersji testu Big Five oraz odpowiedzenie na kilka pytań pomocniczych, 
              które pozwolą stworzyć twój własny profil osobowości.</p>
            <div id="controls-on-aas">
              <Input 
                placeholder="Podaj swój wiek..." 
                warning={this.state.toggleAgeWarning} 
                value={this.state.data.age} 
                onChange={e => this.setState({data: {...this.state.data, age: e.target.value}, toggleAgeWarning: false})}
              />
              <Select 
                placeholder="Wybierz swoją płeć" 
                warning={this.state.toggleSexWarning} 
                onChange={e => this.setState({data: {...this.state.data, sex: e.target.value}, toggleSexWarning: false})}
              >
                <option value="female">Kobieta</option>
                <option value="male">Mężczyzna</option>
              </Select>
              <Button 
                label="Zaczynajmy" 
                onClick={() => {
                  if (this.state.data.sex && this.state.data.age) {
                    this.props.onCompletePage(this.state.data);
                  } 
                  else {
                    this.displayWarnings();
                  } 
                }} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
