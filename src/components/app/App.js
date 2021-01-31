import React from 'react';

// Import stylesheets
import './assets/Stailist.css';

// Import components
import StailistLogo from './StailistLogo';
import NavigationPanel from './NavigationPanel';
import MainPage from './pages/MainPage';
import Profile from './pages/Profile';
import Browse from './pages/Browse';
import Personality from './pages/Personality';
import Informations from './pages/Informations';


export default class App extends React.Component {
  state = {
    activePage: 'main-page',
  }

  componentDidMount() {
    const query = new URLSearchParams(window.location.search);
    const userName = query.get("username");
    const userSex = query.get("usersex");
    this.setState({
      userName: userName || "użytkowniku",
      userSex: userSex || "male",
    })
  }

  renderMainPage() {
    if (this.state.activePage === "main-page") return (
      <MainPage 
        userName={this.state.userName}/>
    )
  }

  renderProfile() {
    if (this.state.activePage === "profile") return <Profile />
  }

  renderBrowse() {
    if (this.state.activePage === "browse") return <Browse 
        userSex={this.state.userSex}/>
  }

  rednerPersonality() {
    if (this.state.activePage === "personality") return <Personality />
  }

  renderInformations() {
    if (this.setState.activePage === "informations") return <Informations />
  }

  render() {
    return (
      <div className="background">
        <span style={{marginLeft: '40px'}}><StailistLogo /></span>
        <div className="app-container">
          <NavigationPanel 
            activePage={this.state.activePage} 
            changePage={page => this.setState({activePage: page})} 
          />
          <div className="content-space">
            <div className="margin">.</div>
            <div className="content-box">
              {this.renderMainPage()}
              {this.renderProfile()}
              {this.renderBrowse()}
              {this.rednerPersonality()}
              {this.renderInformations()}
            </div>
            <div className="margin">.</div>
          </div>
        </div>
      </div>
    );
  }
}