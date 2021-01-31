import React from 'react';

// Import stylesheets
import './assets/NavigationPanel.css';
import NavigationButton from './NavigationButton';

export default class NavigationPanel extends React.Component {
  render() {
    return (
      <div className="navigation-panel">
        <NavigationButton 
          label="Strona główna" 
          active={this.props.activePage === "main-page"}
          onClick={() => this.props.changePage("main-page")} />
        <NavigationButton 
          label="Profil"
          active={this.props.activePage === "profil"} 
          onClick={() => this.props.changePage("profil")}/>
        <NavigationButton 
          label="Przeglądaj" 
          active={this.props.activePage === "browse"}
          onClick={() => this.props.changePage("browse")} />
        <NavigationButton 
          label="Osobowość" 
          active={this.props.activePage === "personality"}
          onClick={() => this.props.changePage("personality")} />
        <NavigationButton 
          label="Informacje" 
          active={this.props.activePage === "informations"}
          onClick={() => this.props.changePage("informations")} />
      </div>
    )
  }
}