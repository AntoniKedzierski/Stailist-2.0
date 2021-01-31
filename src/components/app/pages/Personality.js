import React from 'react';

// Import stylesheets
import '../assets/Personality.css';

// Import components

const Trait = (props) => {
  return (
    <div className={props.className}>
      <h3 style={{fontSize: '28px'}}>{props.title}</h3>
      <p style={{fontSize: '22px'}}>{props.children}</p>
    </div>
  )
}

// Export default
export default class Personality extends React.Component {
  state = {
    tab: "op",
  }

  switchTab = (tab) => {
    this.setState({tab: tab})
  }

  isActive = (tab) => {
    if (this.state.tab === tab) return "selected";
  }

  isTraitActive = (tab) => {
    if (this.state.tab === tab) return "trait-active";
    return "trait-inactive";
  }

  printOpeness() {
    return (
      <Trait title="Umiarkowanie niska OTWARTOŚĆ 38%" className={this.isTraitActive("op")}>
        Masz tendencję do cenienia tradycji i utrzymywania kontaktów ze znajomymi, które budowane były z biegiem czasu. 
        Skłaniając się ku praktyczności, nie jesteś fanem szalonych abstrakcyjnych pomysłów i nowych teorii. 
        Jesteś osobą, która jest bardziej analityczna niż pomysłowa. Wolisz wypróbowane i sprawdzone, namacalne rozwiązania.
        <br /><br />
        Twój styl skłania się nieco w stronę konserwatywnego i tradycyjnego, lubisz sięgać po ikony klasycznego stylu z przeszłości.
        <br /><br />
        <span style={{fontFamily: 'forum', fontSize: '12px', float: 'right'}}>Podane wyniki są jedynie przykładem działania STAILIST-a</span>
      </Trait>
    )
  }

  printConsciouseness() {
    return (
      <Trait title="Wysoka SUMIENNOŚĆ 86%" className={this.isTraitActive("co")}>
        Doskonale radzisz sobie z formułowaniem długoterminowych celów, a następnie organizowaniem, 
        planowaniem i konsekwentną pracą nad ich osiągnięciem. Skrupulatnie zorganizowany i odpowiedzialny. 
        Masz skłonność do ostrożności i lubisz myśleć.
        <br /><br />
        Oczywiście Twój styl jest odpowiednio dorosły, dopasowany, ostry i schludny. 
        Lubisz czyste linie w projektowaniu i utrzymujesz swoje ubrania w nieskazitelnym stanie.
      </Trait>
    )
  }

  printExtraversion() {
    return (
      <Trait title="Umiarkowanie niska EKSTRAWERSJA 45%" className={this.isTraitActive("ex")}>
        Uwielbiasz dobrą imprezę, ale możesz też czuć się łatwo wyczerpanym, 
        jeśli nie masz czasu na naładowanie się: to ostrożna równowaga, którą opanowałeś przez lata. 
        <br /><br />
        Ponieważ jesteś gdzieś między ekstrawersją a introwersją, 
        twój styl w odniesieniu do tej cechy jest również zrównoważony i zróżnicowany. 
        Lubisz utwory, które nie są zbyt głośne, krzykliwe ani zbyt nudne.
      </Trait>
    )
  }

  printAgreeness() {
    return (
      <Trait title="Umiarkowanie wysoka UGODOWOŚĆ 78%" className={this.isTraitActive("ug")}>
        Przyjazny i towarzyski, umiesz być dobrym graczem zespołowym, 
        lubisz pomagać innym w potrzebie i potrafisz uwzględniać potrzeby grupy. 
        Nie lubisz rywalizować tak bardzo, jak ogólnie uważasz, że lepiej być szczęśliwym niż mieć rację.
        <br /><br />
        W rezultacie wolisz wesołą modę, która wciąga ludzi, nieagresywną muzykę i dobre filmy.
      </Trait>
    )
  }

  printNeuroticism() {
    return (
      <Trait title="Umiarkowanie wysoka STABILNOŚĆ EMOCJONALNA 65%" className={this.isTraitActive("st")}>
        Wszystko z umiarem, łącznie z emocjami, prawda? Masz zrównoważoną osobowość pod względem stabilności emocjonalnej, 
        cechy odpowiedzialnej za to, że czujemy się wrażliwi i podatni na dziwny zły nastrój. 
        <br /><br />
        Ponieważ jesteś umiarkowany, możesz przechodzić w kierunku ciemniejszych lub bardziej radosnych kolorów, 
        w zależności od nastroju, ale lubisz też mieszać swój styl, aby kontrastować oba.
      </Trait>
    )
  }

  render() {
    return (
      <div className="personality-container">
        <div className="tabs">
          <span className={this.isActive("op")} onClick={() => this.switchTab("op")}>OTWARTOŚĆ</span>
          <span className={this.isActive("co")} onClick={() => this.switchTab("co")}>SUMIENNOŚĆ</span>
          <span className={this.isActive("ex")} onClick={() => this.switchTab("ex")}>EKTRAWERSJA</span>
          <span className={this.isActive("ug")} onClick={() => this.switchTab("ug")}>UGODOWOŚĆ</span>
          <span className={this.isActive("st")} onClick={() => this.switchTab("st")}>STABILNOŚĆ EMOCJONALNA</span>
        </div>
        {this.printOpeness()}
        {this.printConsciouseness()}
        {this.printExtraversion()}
        {this.printAgreeness()}
        {this.printNeuroticism()}
      </div>
    )
  }
}