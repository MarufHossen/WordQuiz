import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(() =>({
    quizBtns:{
         
        marginLeft:'auto',
          color:'#fff'
      },
}))
function SignedOutLinks() {
    const classes = useStyles();
   
    return (
        <>
         <Button className={classes.quizBtns} aria-controls="simple-menu" aria-haspopup="true" >
         <Link to="/login">Sign Up</Link>
      </Button>
    <Button className={classes.quizBtns} aria-controls="simple-menu" aria-haspopup="true" >
        <Link to="/signin"> Login</Link>
      </Button>
                </>
    )
}

export default SignedOutLinks
