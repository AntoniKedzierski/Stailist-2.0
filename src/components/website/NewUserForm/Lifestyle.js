import React, { Component } from 'react'
import Button from '../../misc/Button';
import ChooseQuestion from '../../misc/ChooseQuestion'
import FormCardRadio from '../../misc/FormCardRadio'

const question4 = ['few-times-per-month', 'once-a-month', 'few-times-per-year', 'irregularly'];
const question6 = ["always", "rather-than-in-stores", "from-time-to-time", "never"];
const question7 = ['>2000PLN', '1000-2000PLN', '500-1000PLN', '200-500PLN', '<200PLN'];
const question8 = ['many-have-many-use', 'many-have-few-use', 'enough', 'need-more'];
const question9 = ['save-time', 'inspirations', 'collective-cloth-offer', 'help-in-choosing', 'none-of-above'];

export default class Lifestyle extends Component {
  state = {
    lifestyle: {}
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.lifestyle);
  }

  updatePoll = k => {
    return value => {
      const prevState = {...this.state.lifestyle};
      prevState[k] = value;
      this.setState({lifestyle: prevState})
    }
  }

  submitPoll = () => {
    console.log(this.props);
    if (Object.keys(this.state.lifestyle).length < 10) {
      window.alert("Odpowiedz na wszystkie pytania!");
      return 0;
    }
    const answers = {
      interestsInFashion: this.state.lifestyle[1],
      paysAttentionToApperance: this.state.lifestyle[2],
      workRequiresFormal: this.state.lifestyle[3] === 1,
      howOftenBuysClothes: question4[this.state.lifestyle[4]],
      likesShopping: this.state.lifestyle[5],
      howOftenBuysViaInternet: question6[this.state.lifestyle[6]],
      howMuchSpendsOnClothes: question7[this.state.lifestyle[7]],
      hasALotOfClothes: question8[this.state.lifestyle[8]],
      whyUsesStailist: question9[this.state.lifestyle[9]],
      visitsSportStores: this.state.lifestyle[10] === 1
    }
    this.props.onCompletePage(answers);
  }

  render() {
    return (
      <div id="lifestyle-page">
        <p>Odpowiedz na pomocnicze pytania odnośnie Twojego stylu życia i zainteresowania modą.</p>
        <div className="bigfive-question">
          <FormCardRadio leftLabel="W ogóle się nie interesuję." rightLabel="To moje hobby." n={5} onChange={this.updatePoll(1)}>
            1. Jak bardzo interesujesz się modą?
          </FormCardRadio>
        </div>
        <div className="bigfive-question">
          <FormCardRadio leftLabel="Mój wygląd jest mi obojętny." rightLabel="Staram się wyglądać jak najlepiej." n={5} onChange={this.updatePoll(2)}>
            2. Jak dużą wagę przykładasz do swojego wyglądu?
          </FormCardRadio>
        </div>
        <div className="bigfive-question">
          <ChooseQuestion labels={["Tak", "Nie"]} onChange={this.updatePoll(3)}>
            3. Czy twoja praca wymaga od Ciebie formalnego ubioru?
          </ChooseQuestion>
        </div>
        <div className="bigfive-question">
          <ChooseQuestion labels={["Klika razy w miesiącu", "Raz w miesiącu", "Kilka razy w roku", "Nieregularnie"]} onChange={this.updatePoll(4)}>
            4. Jak często kupujesz nowe ubrania?
          </ChooseQuestion>
        </div>
        <div className="bigfive-question">
          <FormCardRadio leftLabel="To przykry obowiązek." rightLabel="Uwielbiam chodzić na zakupy." n={5} onChange={this.updatePoll(5)}>
            5. Czy lubisz robić zakupy ubraniowe?
          </FormCardRadio>
        </div>
        <div className="bigfive-question">
          <ChooseQuestion labels={["Zawsze", "Częściej niż w sklepie", "Sporadycznie", "Nigdy"]} onChange={this.updatePoll(6)}>
            6. Jak często kupujesz ubrania w Internecie?
          </ChooseQuestion>
        </div>
        <div className="bigfive-question">
          <ChooseQuestion labels={["Więcej niż 2000 złotych", "Od 1000 do 2000 złotych", "Od 500 do 1000 złotych", "Od 200 do 500 złotych", "Poniżej 200 złotych"]} onChange={this.updatePoll(7)}>
            7. Jak dużo pieniędzy miesięcznie jesteś w stanie przeznaczyć na ubrania?
          </ChooseQuestion>
        </div>
        <div className="bigfive-question">
          <ChooseQuestion labels={[
            "Tak, mam ich dużo i ze wszystkich korzystam", 
            "Tak, ale używam tylko części z nich", 
            "Nie, ale tyle mi wystarczy", 
            "Nie i potrzebuję ich więcej"
            ]} onChange={this.updatePoll(8)}>
            8. Czy uważasz, że posiadasz dużo ubrań?
          </ChooseQuestion>
        </div>
        <div className="bigfive-question">
          <ChooseQuestion labels={[
            "Oszczędności czasu podczas kupowania ubrań", 
            "Inspiracji, w co mogę się ubrać", 
            "Ubrań z wielu sklepów w jednym miejscu", 
            "Pomocy w wybraniu odpowiednich ubrań",
            "Żadne z powyższych"
            ]} onChange={this.updatePoll(9)}>
            9. Czego przede wszystkim oczekujesz od cyfrowego STAILIST-y?
          </ChooseQuestion>
        </div>
        <div className="bigfive-question">
          <ChooseQuestion labels={["Tak", "Nie"]} onChange={this.updatePoll(10)}>
            10. Czy zaopatrujesz się w ubrania w sklepach sportowych?
          </ChooseQuestion>
        </div>
        <Button label="Dalej" position="center" onClick={this.submitPoll} />
      </div>
    )
  }
}
