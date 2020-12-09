import React, { Component } from 'react'
import firebase from 'firebase'
import UserInfo from './UserInfo';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
 
  class SignUp extends Component {

    state={isSignedIn:false}
    uiConfig ={
        signInFlow:'popup',
        signInOptions:[
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
            
        ],
        callbacks :{
            // signInSuccess:()=>false
            signInSuccessWithAuthResult:()=>false
        }
    }
componentDidMount=()=>{
    firebase.auth().onAuthStateChanged(user =>{
        this.setState({isSignedIn:!!user});

    })
}
    render() {
        return (
         
              <div style={{height:'94vh',overflowX:'hidden'}}> 
                {this.state.isSignedIn ? (
                    <>
                    <UserInfo/>
                    
                  
                  </>
                ):(
                
                     

                     <StyledFirebaseAuth 
                      uiConfig={this.uiConfig}
                      firebaseAuth={firebase.auth()}
                      
                     />
                   
                     
                     

                 )} 
             </div>
            
        )
    }
}

export default SignUp
