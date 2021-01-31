import React from 'react';

// Import stylesheets
import '../assets/MainPage.css';

// Import components
import MaterialButton from '../MaterialButton';


// Export default
export default class MainPage extends React.Component {
  render() {
    return (
      <div className='main-app-page'>
        <h1>Witaj!</h1>
        <p>
          Dziękujemy za założenie konta. Twój osobisty STAILIST-a jest już gotowy!
          Możesz zacząć przeglądać propozycje, które dla Ciebie przygotował.
        </p>
        <h1>CO DALEJ?</h1>
        <p>
          Zacznij przeglądać propozycje przygotowane przez STAILST-ę. Możesz również dostosować informacje
          widoczne na Twoim profilu. W zakładce 'Osobowość' znajdziesz wyniki Twojego testu psychologicznego
          oraz dowiesz się, jak wiąże się to z Twoim sposobem ubierania.
        </p>       
        <h1>WERSJA BETA APLIKACJI</h1>
        <p>
          To <strong>mogłoby tak wyglądać</strong>. Dziękujemy, że postanowiłeś przetestować nasz produkt, jednak
          aby osiągnął on zamierzoną formę, potrzebujemy Twojej opinii na jego temat. Kliknij w przycisk poniżej,
          żeby wyrazić swoje zdanie o nim!
        </p>
        
        <MaterialButton label="Wypełnij ankietę" style={{margin: '0px 20px'}} onClick={() => window.location.assign("https://forms.gle/uK7cdG4RmFnLyTvGA")}/>
      </div>
    )
  }
}
