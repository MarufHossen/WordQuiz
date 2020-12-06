import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) =>({
    quizBtn:{
        [theme.breakpoints.down("sm")]:{
            display:'none'
        },
        marginLeft:'auto',
          color:'#fff'
      },
}))
function SignedOutLinks() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <>
         <Button className={classes.quizBtn} aria-controls="simple-menu" aria-haspopup="true" >
         <Link to="/signup">Sign Up</Link>
      </Button>
    <Button className={classes.quizBtn} aria-controls="simple-menu" aria-haspopup="true" >
        <Link to="/signin"> Login</Link>
      </Button>
                </>
    )
}

export default SignedOutLinks
