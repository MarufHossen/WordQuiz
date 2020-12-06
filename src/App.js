 import React from 'react';
import './App.css';
import Nav from './components/Nav'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Home from './components/Home';
import { AuthProvider } from './components/context/AuthContext';
function App() {
  return (
     <AuthProvider> 
    <Router>
      <Nav/>
      <Switch>
        {/* <Route path="/" exact component={Home}/> */}
        {/* <Route path="/quiz1"component={QuizOne}/> */}
      </Switch>
      {/* <Footer/> */}
    </Router>
    </AuthProvider>
     
  );
}

export default App;
