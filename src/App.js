 import React from 'react';
import Nav from './components/Nav'
import {BrowserRouter as Router,Switch} from 'react-router-dom'
 import './App.css'
 
import { AuthProvider } from './components/context/AuthContext';
function App() {
  return (
     
     <AuthProvider> 
        
    <Router>
      <div className="app"> 
      <Nav/>
      <Switch>
 
      </Switch>
      </div>
      
    </Router>
   
    </AuthProvider>
     
  );
}

export default App;
