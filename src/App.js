 import React from 'react';
import Nav from './components/Nav'
import {BrowserRouter as Router,Switch} from 'react-router-dom'
 
 
import { AuthProvider } from './components/context/AuthContext';
function App() {
  return (
     
     <AuthProvider> 
        
    <Router>
       
      <Nav/>
      <Switch>
 
      </Switch>
      
      
    </Router>
   
    </AuthProvider>
     
  );
}

export default App;
