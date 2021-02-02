import React, { Component } from 'react'
import Input from '../../misc/Input'

// Import stylesheets
import '../../../assets/styles/website/newuserform.css';
import Button from '../../misc/Button';

const actions = [
  "Odczytywanie wyników testu...", "Wysyłanie danych do bazy...", "Przetwarzanie...", "Tworzenie profilu osobowości...",
  "Trenowanie modelu...", "Generowanie propozycji...", "Gotowe!"
]

const actionsTimeout = [800, 1800, 600, 2400, 4400, 600];

export default class Register extends Component {
  state = {
    username: "",
    password: "", 
    password2: "",
    action: 0,
    timeout: 0
  }

  changeAction = () => {
    if (this.state.action < 6) {
      if (this.state.timeout >= actionsTimeout[this.state.action]) {
        this.setState({action: this.state.action + 1, timeout: 0});
      } else {
        this.setState({timeout: this.state.timeout + 200}) 
      }
    }
    if (this.state.action === 6) {
      clearInterval(this.timer);
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.changeAction, 200);
  } 

  render() {
    return (
      <div id="register-page">
        <div className="processing-box">
          <div className="processing-dots" style={{display: this.state.action === 6 ? "none" : "flex"}}>
            <span id="dot-1" className="processing-dot" />
            <span id="dot-2" className="processing-dot" />
            <span id="dot-3" className="processing-dot" />
          </div>
          <span className={this.state.action === 6 ? "processing-tick" : "processing-tick-hidden"} />
          <p>{actions[this.state.action]}</p>
        </div>
        <div className="register-text-box">
          <h1>Twój STAILIST-a jest już gotowy!</h1>
          <p>Aby zobaczyć, co potrafi, załóż konto. Dzięki temu będziesz mógł przeglądać jego propozycje, kiedy tylko zechcesz.</p>
          <Input 
            placeholder="Podaj nazwę użytkownika..." 
            value={this.state.username} 
            onChange={e => this.setState({username: e.target.value})} 
          />
          <Input 
            placeholder="Podaj swoje hasło..." type="password"
            value={this.state.password} 
            onChange={e => this.setState({password: e.target.value})} 
          />
          <Input placeholder="Powtórz hasło..." type="password"
            value={this.state.password2} 
            onChange={e => this.setState({password2: e.target.value})} 
          />
          <Button label="Załóż konto" position="center" onClick={() => {
            if (this.state.username !== "" && this.state.password !== "" && this.state.password2 === this.state.password) {
              this.props.onCompletePage({
                username: this.state.username,
                password: this.state.password
              })
            } else {
              window.alert("Wypełnij poprawnie wszystkie pola!");
            }              
          }}/>
        </div>
      </div>
    )
  }
}
