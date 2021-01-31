import React, { Component } from 'react'

import '../../../assets/styles/website/newuserform.css';

import Button from '../../misc/Button';
import FormCardRadio from '../../misc/FormCardRadio'

const questions = {
  1: "Postrzegam siebie jako osobę lubiącą towarzystwo innych, aktywną i optymistyczną:",
  2: "Uważam się za osobę krytyczną względem innych, konfliktową:",
  3: "Postrzegam się jako osobę sumienną i zdyscyplinowaną:",
  4: "Widzę siebie jako osobę pełną niepokoju, łatwo wpadającą w przygnębienie:",
  5: "Uważam się za osobę otwartą na nowe doznania, w złożony sposób postrzegającą świat:",
  6: "Postrzegam siebie jako osobę zamkniętą w sobie, wycofaną i cichą:",
  7: "Uważam się za osobę zgodną i życzliwą:",
  8: "Widzę siebie jako osobę źle zorganizowaną, niedbałą:",
  9: "Postrzegam się, jako osobę niemartwiącą się, stabilną emocjonalnie:",
  10: " Uważam się za osobę trzymającą się utartych schematów, biorącą rzeczy wprost:"
}

export default class BigFive extends Component {
  state = {
    bigFive: {}
  }

  componentDidUpdate() {
    console.log(this.state.bigFive);
  }
  renderQuestions() {

    return Object.keys(questions).map(k => 
      <div className="bigfive-question">
        <FormCardRadio 
          n={7} 
          onChange={value => {
            const prevState = {...this.state.bigFive};
            prevState[k] = value;
            this.setState({bigFive: prevState})
          }}
          leftLabel="Zdecydowanie się nie zgadzam." 
          rightLabel="Zdecydowanie się zgadzam."
        >
          {`${k}. ${questions[k]}`}
        </FormCardRadio>
      </div>
    )
  }

  render() {
    return (
      <div id="big-five">
        <h1>BIG FIVE TEST</h1>
        <p>Zaznacz, jak bardzo zgadzasz się z poniższymi stwierdzeniami o Tobie.</p>
        {this.renderQuestions()}
        <Button label="Dalej" onClick={() => {
          if (Object.keys(this.state.bigFive).length >= 10) {
            this.props.onCompletePage(this.state);
          } else {
            window.alert("Uzupełnij wszystkie odpowiedzi!");
          }
        }} />
      </div>
    )
  }
}
