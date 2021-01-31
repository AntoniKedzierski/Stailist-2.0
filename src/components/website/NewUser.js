import React, { Component } from 'react'

// Import components
import AgeAndSex from './NewUserForm/AgeAndSex';
import BigFive from './NewUserForm/BigFive';
import Colors from './NewUserForm/Colors';
import Brands from './NewUserForm/Brands';
import Lifestyle from './NewUserForm/Lifestyle';
import Prices from './NewUserForm/Prices';
import Register from './NewUserForm/Register';

const Views = Object.freeze({ageAndSex: 1, bigFive: 2, colors: 3, styles: 4, 
  brands: 5, lifestyle: 6, prices: 7, register: 8, app: 9});

const exportToJson = (objectData) => {
  let filename = "export.json";
  let contentType = "application/json;charset=utf-8;";
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    var blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(objectData)))], { type: contentType });
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    var a = document.createElement('a');
    a.download = filename;
    a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(objectData));
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}



export default class NewUser extends Component {
  state = {
    userData: {},
    displayPage: Views.ageAndSex
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  nextPage = (result, page) => {
    this.setState({
      userData: {
        ...this.state.userData,
        ...result
      },
      displayPage: page}
    );
  }

  renderPage() {
    switch (this.state.displayPage) {
      case Views.ageAndSex:
        return <AgeAndSex onCompletePage={result => this.nextPage(result, Views.bigFive)} />
      case Views.bigFive:
        return <BigFive onCompletePage={result => this.nextPage(result, Views.colors)} />
      case Views.colors:
        return <Colors onCompletePage={result => this.nextPage(result, Views.brands)} />
      case Views.brands:
        return <Brands onCompletePage={result => this.nextPage(result, Views.lifestyle)} />
      case Views.lifestyle:
        return <Lifestyle onCompletePage={result => this.nextPage(result, Views.prices)}/>
      case Views.prices:
        return <Prices onCompletePage={result => this.nextPage(result, Views.register)} />
      case Views.register:
        return <Register onCompletePage={result => this.nextPage(result, Views.app)}/>
      case Views.app:
        window.location.assign(`/app?username=${this.state.userData.username}&usersex=${this.state.userData.sex}`);
      default: return <div>ERROR</div>
    }
  }

  render() {
    return (
      <div id="new-user-container">
        {this.renderPage()}
      </div>
    )
  }
}
