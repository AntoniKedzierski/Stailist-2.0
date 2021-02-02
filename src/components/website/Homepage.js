import React, { Component } from 'react'

// Import stylesheets
import '../../assets/styles/website/homepage.css';

// Import images
import AppDescPhoto from '../../assets/images/app-desc-photo.png';
import Button from '../misc/Button';

export default class Homepage extends Component {
  state = {
    y: window.scrollY
  }

  onScroll = () => {
    this.setState({y: window.scrollY})
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  render() {
    return (
      <div id="homepage">
        <div id="app-desc">
          <img src={AppDescPhoto} alt="app-desc"/>
          <div id="app-desc-text">
            <div id="app-desc-text-back">
              <h1>Zadrudnij swojego własnego, cyfrowego stylistę.</h1>
              <br />
              <p>
                Oszczędzaj czas i odkrywaj inspiracje korzystając z pomocy STAILIST-a, inteligentnego cyfrowego doradcy modowego,
                który wykorzystując zaawansowane uczenie maszynowe i psychologię behawioralną, doradzi Ci, jakie ubrania możesz kupić.
              </p>
              <br />
              <Button label="Zacznij teraz" onClick={() => window.location.assign("/new-user")}/>
            </div>
          </div>
        </div>
        <div id="stailist-idea">
          <h2>Jak to działa?</h2>
          <div className={this.state.y < 240 ? "jumping-tick" : "hidden"}/>
          <div className={this.state.y < 240 ? "hidden" : "visible"}>
            <p>WYKONAJ TEST OSOBOWOŚCI</p>
            W niecałe 5 minut wypełnij najbardziej respektowany test osobowość w psychologii 
            - Big Five. Odpowiedz na dodatkowe pytania, które pozwolą określić Twój profil
            psychologiczny i pozwolą algorytmowi rozumieć Twoje potrzeby.
          </div>
          <div className={this.state.y < 360 ? "hidden" : "visible"}>
            <p>MY TWORZYMY TWÓJ PROFIL OSOBOWOŚCI</p>
            Na podstawie testu, STAILIST tworzy Twój własny profil osobowości. To dzięki niemu propozycje będą tak dobrze dobrane.
          </div>
          <div className={this.state.y < 480 ? "hidden" : "visible"}>
            <p>NASZ ALGORYTM PREZENTUJE REKOMENDACJE</p>
            Używając najważniejszych informacji o Twojej osobowości i preferencjach, algorytm
            proponuje całe zestawy ubrań, które możesz przeglądać i wybierać te, które najbardziej Ci się spodobały.
          </div>
          <div className={this.state.y < 600 ? "hidden" : "visible"}>
            <p>OCENIAJ PROPOZYCJE STAILISTA</p>
            Określaj, czy elementy, które zaproponował STAILIST pasują do Ciebie, czy nie. Dzięki temu
            będzie on uczył się Twoich indywidualnych potrzeb i z czasem będzie coraz lepszy w proponowaniu Ci ubrań.
          </div>
        </div>
        <div id="powered-by-ai" className={this.state.y < 650 ? "powered-by-ai hidden" : "powered-by-ai visible"}>
          powered by A.I.
          <br/>
          Oszczedzaj czas, odkrywaj inspiracje.
        </div>
      </div>
    )
  }
}
