import React  from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Link,useHistory} from 'react-router-dom'
import {useAuth} from './context/AuthContext'

const useStyles = makeStyles(() =>({
    quizBtns:{
         
        marginLeft:'auto',
          color:'#fff'
      },
}))
function SignedInLinks() {
    const classes = useStyles();
     
    
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
        <>
         <Button className={classes.quizBtns} aria-controls="simple-menu" onClick={handleLogout} aria-haspopup="true" >
        Logout
      </Button>
    <Button className={classes.quizBtns} aria-controls="simple-menu" aria-haspopup="true" >
       <Link to="/profile">Profile</Link>
      </Button>
                </>
    )
}

export default SignedInLinks
