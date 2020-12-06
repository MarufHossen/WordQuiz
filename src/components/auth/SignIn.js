
import React,{useRef,useState} from 'react'
import {useAuth} from '../context/AuthContext'
import {useHistory,Link} from 'react-router-dom'
import {FormControl,InputLabel,Input,Button} from '@material-ui/core'
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
            // await   login (email,pass) 
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
            <form onSubmit={handleSubmit}>
                
                
                 
    {error   && <h1>{error}</h1>}
                <div className="input-field">
                          <label htmlFor="email">Email</label>
                         <input type="email"  ref={emailRef}  />
                    </div>
                    {/* <FormControl>
                        <InputLabel style={{color:'#fff'}}>Enter Email</InputLabel>
                        <Input value={email}onChange={e=>setEmail(e.target.value)} />
                    </FormControl> */}
                    <br/>
                    {/* <FormControl>
                        <InputLabel style={{color:'#fff'}}>Enter Password</InputLabel>
                        <Input   value={pass}onChange={e=>setPass(e.target.value)} />
                    </FormControl> */}
                <div className="input-field">
                           <label htmlFor="password">Password</label>
                           <input type="password"  ref={passwordRef}  />
                       </div>  
                
                      <button className="btn">Log In</button> 
                      {/* <br/>
                      <Button variant="contained"  style={{background:'#efcded'}}>Login</Button> */}
            </form>
            
        </div>
    )
}

export default SignIn

