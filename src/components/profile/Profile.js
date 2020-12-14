import React from 'react'
import {useAuth} from '../context/AuthContext'
import {useHistory} from 'react-router-dom'
import './profile.css'
 
 

function Profile() {
    const{currentUser}=useAuth();
    
    const{logout} =useAuth();
  
    const history=useHistory()
    async  function handleLogout(){
         
           try{
             await logout()
             history.push('/')
           }catch{
             
           }
      }
   
     
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
              
              <div className="profile-edit">
                  {/* <button>Update</button> */}
                  <button onClick ={handleLogout}>Logout</button>
              </div>
             
             </div>
        </div>
         
    )
}

export default Profile
