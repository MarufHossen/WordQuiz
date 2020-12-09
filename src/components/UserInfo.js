import React,{useState} from 'react';
import {useAuth} from './context/AuthContext'
import{useHistory} from 'react-router-dom'
 
export default function UserInfo() {
  const history=useHistory()
 const[input,setInput]=useState('');
   const{currentUser}=useAuth();
 const inputHandler=(e)=>{
   setInput(e.target.value);
 }
  const onSubmit=(e)=>{  
   e.preventDefault();
    if(currentUser){
       currentUser.updateProfile({
         displayName:input
       })
       history.push('/profile')
    }
   setInput('')
   

    
  }

  return (
     <div style={{height:'90vh',display:'flex',marginTop:'50px'}}> 

    <form className="form" onSubmit={onSubmit}>
      <label htmlFor="name">Enter Profile Name</label>
      <input style={{backgroundColor:'#fff'}} type="text" value={input} onChange={inputHandler}/>
      <button className="btn">Submit</button>
    </form>
    </div>

  );
}
