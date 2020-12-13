
import React,{useRef,useState} from 'react'
import {useAuth} from '../context/AuthContext'
import {useHistory} from 'react-router-dom' 
 
import './signup.css'
function SignUp() {
    const nameRef =useRef();
    const emailRef =useRef();
    const passwordRef=useRef();
    const passwordConfirmRef=useRef()
    const {signup }=useAuth()
     const [error,setError] =useState('')
     const history =useHistory()
      
  async  function handleSubmit(e){
         e.preventDefault();
          console.log(emailRef);

         if(passwordRef.current.value !== 
            passwordConfirmRef.current.value){
            return setError('Passwords do not match')
          

            }
        
            try{
                setError('')
                 
            await   signup(emailRef.current.value,passwordRef.current.value)
                history.push('/userinfo')
            }catch{
                     setError('Failed to create an account')
            }
            
        
    }
   
    return (
        <div className="container">
              <h1>Sign Up</h1>
              {error   && <h2>{error}</h2>}
            <form onSubmit={handleSubmit}>
                
             
                 
    
    <div className="input-field">
                          <label htmlFor="text">Enter Name</label>
                         <input type="text"  ref={nameRef}  />
                    </div>
                   


                   
                <div className="input-field">
                          <label htmlFor="email">Email</label>
                         <input type="email"  ref={emailRef}  />
                    </div> 
                     
                 <div className="input-field">
                           <label htmlFor="password">Password</label>
                           <input type="password"  ref={passwordRef}  />
                       </div> 
                       
                        
                 <div className="input-field">
                          <label htmlFor="password">Confirm Password </label>
                          <input type="password" ref={passwordConfirmRef}    />
                      </div> 
                       
                       
                        <button className="btn">Sign Up</button>
                     
            </form>
            
        </div>
    )
}

export default SignUp
