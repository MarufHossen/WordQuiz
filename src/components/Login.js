import React, { Component } from 'react'
import firebase from 'firebase'
import UserInfo from './UserInfo';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import {Link} from 'react-router-dom'
// firebase.initializeApp({
//     apiKey: "AIzaSyCFH1_wi6LcSWicrQywpDJgX8DdNLqENPc",
//     authDomain: "practice-c4e4f.firebaseapp.com",
// })
  class SignUp extends Component {

    state={isSignedIn:false}
    uiConfig ={
        signInFlow:'popup',
        signInOptions:[
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            
        ],
        callbacks :{
            signInSuccess:()=>false
        }
    }
componentDidMount=()=>{
    firebase.auth().onAuthStateChanged(user =>{
        this.setState({isSignedIn:!!user})
    })
}
    render() {
        return (
            <div style={{height:'90vh'}}>
                {this.state.isSignedIn ? (
                    <>
                    <UserInfo/>
                    
                  
                  </>
                ):(<>
                     <StyledFirebaseAuth
                      uiConfig={this.uiConfig}
                      firebaseAuth={firebase.auth()}
                     />
                     <button style={{width:'200px',height:'70px',background:'red',margin:'o auto'}}> 
                     <Link to="/signup">Sign in with email</Link>
                     </button>
                     </>

                )}
            </div>
        )
    }
}

export default SignUp
