import React from 'react'
import {useAuth} from '../context/AuthContext'
import './profile.css'
 

function Profile() {
    const{currentUser}=useAuth();
    
    
  
     
   
     
    return (
        
        <div className="profile">
            <h1>Profile</h1>
            <div className="profile-info"> 
             
            <div className="name">
             <h2>  <strong>Name:</strong>{currentUser && currentUser.displayName}</h2>
            </div>
              
             <div className="email">
             <h2> <strong>Email:</strong>{currentUser && currentUser.email}</h2>
             </div>
             
             
             </div>
        </div>
         
    )
}

export default Profile
