import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Link,useHistory} from 'react-router-dom'
import {useAuth} from './context/AuthContext'

const useStyles = makeStyles((theme) =>({
    quizBtn:{
        // [theme.breakpoints.down("sm")]:{
        //     display:'none'
        // },
        marginLeft:'auto',
          color:'#fff'
      },
}))
function SignedInLinks() {
    const classes = useStyles();
    const theme = useTheme();
    const[error,setError]=useState();
    const{logout} =useAuth();
    const history=useHistory()
  async  function handleLogout(){
        setError('')
         try{
           await logout()
           history.push('/')
         }catch{
           setError('Failed to log out')
         }
    }
    return (
        <>
         <Button className={classes.quizBtn} aria-controls="simple-menu" onClick={handleLogout} aria-haspopup="true" >
        Logout
      </Button>
    <Button className={classes.quizBtn} aria-controls="simple-menu" aria-haspopup="true" >
       <Link to="/profile">Profile</Link>
      </Button>
                </>
    )
}

export default SignedInLinks
