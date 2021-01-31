import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import components
import Homepage from './components/website/Homepage';
import Nav from './components/misc/Nav';
import NewUser from './components/website/NewUser';
import App from './components/app/App';


// Main app component
class Stailist extends React.Component {
  
  render() {
    return (
      <Router>
        <div className="column">
          <Route path="/" exact>
            <Nav />
            <div className="container">
              <Homepage />
            </div>
          </Route>
          <Route path="/how-it-works">
            <Nav />
            <div>HOW IT WORKS</div>  
          </Route>          
          <Route path="/new-user">
            <Nav />
            <div className="container">
              <NewUser />
            </div>
          </Route>          
          <Route path="/app">
            <App />
          </Route>          
        </div>
      </Router>
    );
  }
}

export default Stailist;