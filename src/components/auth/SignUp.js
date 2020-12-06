 

import React,{useRef,useState} from 'react'
import {useAuth} from '../context/AuthContext'
import {useHistory,Link} from 'react-router-dom' 
import {FormControl,InputLabel,Input,Button} from '@material-ui/core'
import './signup.css'
function SignUp() {
    const nameRef =useRef();
    const emailRef =useRef();
    const passwordRef=useRef();
    const passwordConfirmRef=useRef()
    const {signup }=useAuth()
     const [error,setError] =useState('')
     const[loading,setLoading]=useState(false)
     const[name,setName]=useState('')
     const[email,setEmail]=useState('')
     const[password,setPassword]=useState('')
     const[confirm,setConfirm]=useState('')
     const history =useHistory()
      
  async  function handleSubmit(e){
         e.preventDefault();
          console.log(emailRef);

         if(passwordRef.current.value !== 
            passwordConfirmRef.current.value){
            return setError('Passwords do not match')
            console.log(error);

            }
        // if(password !== confirm){
        //     return setError('Passwords do not match')
            
        // }
            try{
                setError('')
                setLoading(true)
            await   signup(emailRef.current.value,passwordRef.current.value)
                history.push('/userinfo')
            }catch{
                     setError('Failed to create an account')
            }
            setLoading(false)
        
    }
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(confirm);
    console.log(error);
    return (
        <div className="container">
              <h1>Sign Up</h1>
              {error   && <h2>{error}</h2>}
            <form onSubmit={handleSubmit}>
                
             
                 
    
    <div className="input-field">
                          <label htmlFor="text">Enter Name</label>
                         <input type="text"  ref={nameRef}  />
                    </div>
                    {/* <FormControl>
                        <InputLabel style={{color:'#fff'}}>Enter Name</InputLabel>
                        <Input value={name} onChange={e=>setName(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <InputLabel style={{color:'#fff'}}>Enter Email</InputLabel>
                        <Input value={email} onChange={e=>setEmail(e.target.value)} />
                    </FormControl>
                    <br/>
                    <FormControl>
                        <InputLabel style={{color:'#fff'}}>Enter Password</InputLabel>
                        <Input   value={password} onChange={e=>setPassword(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <InputLabel style={{color:'#fff'}}>Confirm Password</InputLabel>
                        <Input   value={confirm} onChange={e=>setConfirm(e.target.value)} />
                    </FormControl> */}


                   
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
                      {/* <Button  className="btn" variant="contained" color="secondary"> Sign Up</Button> */}
            </form>
            
        </div>
    )
}

export default SignUp
