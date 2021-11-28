import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import { AuthProvider } from './components/Auth'
/* import { NavBar } from 'react-bootstrap' */
import Nontification from './components/Timeline'
import About from './components/About'
import Setting from './components/Setting'
import './css/App.css';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/Nontification" component={Nontification} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Setting" component={Setting} />     
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
