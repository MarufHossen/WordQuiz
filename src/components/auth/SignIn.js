
import React,{useRef,useState} from 'react'
import {useAuth} from '../context/AuthContext'
import {useHistory} from 'react-router-dom'
import './signin.css'

function SignIn() {
    const emailRef =useRef();
    const passwordRef=useRef();
     
    const {login }=useAuth()
     const [error,setError] =useState('')
     const[loading,setLoading]=useState(false);
     const[email,setEmail]=useState('')
     const[pass,setPass]=useState('')
     const history =useHistory()
      
  async  function handleSubmit(e){
         e.preventDefault();

         
            try{
                setError('')
                setLoading(true)
            await   login(emailRef.current.value,passwordRef.current.value)
             
                history.push('/')
            }catch{
                     setError('Failed to sign in')
            }
            setLoading(false)
        
    }
    console.log(email);
    return (
        <div className="container">
             <h1 style={{color:'#be5ed4'}}>Login</h1>
            <form className="form" onSubmit={handleSubmit}>
                
                
                 
    {error   && <h3 className="error">{error}</h3>}
                <div className="input-field">
                          <label htmlFor="email">Email</label>
                         <input type="email"  ref={emailRef}  />
                    </div>
                   
                <div className="input-field">
                           <label htmlFor="password">Password</label>
                           <input type="password"  ref={passwordRef}  />
                       </div>  
                
                      <button className="btn">Log In</button> 
                      
            </form>
            
        </div>
    )
}

export default SignIn

