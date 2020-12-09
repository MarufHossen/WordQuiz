import React,{useState} from 'react';
import clsx from 'clsx';
 
 
import {useAuth} from './context/AuthContext'
 
//component import
import Home from './Home'
 import QuizOne from './quiz/QuizOne'
 import ResultOne from './result/ResultOne'
 import ResultTwo from './result/ResultTwo'
 
 import CountDownTwo from './countdown/CountDownTwo'
 import CountDownOne from './countdown/CountDownOne'
 import Leaderboard from './leaderboard/Leaderboard'
 import LeaderboardTwo from './leaderboard/LeaderboardTwo'
 import LogIn from './Login';
 import UserInfo from './UserInfo'
 import HowToPlay from './howtoplay/HowToPlay'
 import HowToPlayTwo from './howtoplay/HowToPlayTwo'
 import SignedInLinks from './SignedInLinks'
 import SignedOutLinks from './SignedOutLinks'
 import SignIn from './auth/SignIn'
 import SignUp from './auth/SignUp'
 import Profile from './profile/Profile'

 
import {Link,Route} from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';


 

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
     
    background:'#efcded'
    
  },
  appBar: {
    background:'#be5ed4',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    [theme.breakpoints.up("md")]:{
        display:'none'
    },
    marginRight: theme.spacing(2),
  },
  iconButton:{
    [theme.breakpoints.down("md")]:{
        marginRight:'auto'
    },
      marginLeft: 'auto'
  },
  link:{
    textDecoration:'none',
    color:"#fff"
  },
  linkMenu:{
    textDecoration:'none',
    color:'#333'
  },
  quizButton:{
    [theme.breakpoints.down("sm")]:{
         display:'none'
    },
      marginLeft: 'auto'
  },
  quizBtn:{
    [theme.breakpoints.down("sm")]:{
        display:'none'
    },
    marginLeft:'auto',
      color:'#fff'
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Nav() {

  //auth
   const{currentUser}=useAuth()
  const classes = useStyles();
  const theme = useTheme();
  
  const [open, setOpen] = React.useState(false);
  const[listOpen,setListOpen]=useState(true);
  const[listOpens,setListOpens]=useState(true);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchor, setAnchor] = React.useState(null);
  const [anchors, setAnchors] = React.useState(null);
  const opens = Boolean(anchorEl);
 
   

  const handleList=()=>{
    setListOpen(!listOpen)
}

  const handleLists=()=>{
    setListOpens(!listOpens)
}

// const handleChange = (event) => {
//     setAuth(event.target.checked);
//   };
 
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };   
  
  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
   
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleCloseBtn = () => {
    setAnchor(null);
  };
  // const handleCloseBtns = () => {
  //   setAnchors(null);
  // };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Button   noWrap>
            <Link className={classes.link} to="/">LOGO</Link>
             
          </Button>
          <div className={ classes.quizButton}>
      <Button className={classes.quizBtn} aria-controls="simple-menu"  aria-haspopup="true" onClick={handleClick}>
        Quiz 
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={handleCloseBtn}
      >
        <MenuItem onClick={handleCloseBtn}>
        <Link className={classes.linkMenu} to="/how-to-play">Quiz 1</Link>
           </MenuItem>
        <MenuItem onClick={handleCloseBtn}>
        <Link className={classes.linkMenu} to="/how-to-play-2">Quiz 2</Link>
          </MenuItem>
        
      </Menu>
    </div>
         
    
     
    <Button className={classes.quizBtn} aria-controls="simple-menu" aria-haspopup="true" >
        <Link to="/leaderboard">Leaderboard</Link>
      </Button>
    <Button className={classes.quizBtn} aria-controls="simple-menu" aria-haspopup="true" >
        ...
      </Button>
     
      {currentUser ? (<SignedInLinks  />) : (<SignedOutLinks/>)}
       
       
       
           
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button onClick={handleList}>
                <ListItemText primary="Quiz"/> 
                {listOpen ?<ExpandLess /> : <ExpandMore /> }
            </ListItem>
            <Collapse in={listOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
             <Link to="/how-to-play">
             {/* <ListItemText primary="Quiz 1" /> */}
             <button  style={{backgroundColor:'transparent',textAlign:'center',width:'100%'}}> Quiz 1</button>
             
             </Link>
            
          </ListItem>
          <ListItem button className={classes.nested}>
              <Link to="/how-to-play">
              <button  style={{backgroundColor:'transparent',textAlign:'center',width:'100%'}}> Quiz 2</button>
              </Link>
             
            
          </ListItem>
        </List>
            </Collapse>
            <ListItem button onClick={handleLists}>
                <ListItemText primary="Leaderboard"/> 
                {listOpens ?<ExpandLess /> : <ExpandMore /> }
            </ListItem>
            <Collapse in={listOpens} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
             <Link to="/leaderboard">
             {/* <ListItemText primary="Quiz 1" /> */}
             <button  style={{backgroundColor:'transparent',textAlign:'center',width:'100%'}}> Leaderboard 1</button>
             
             </Link>
            
          </ListItem>
          <ListItem button className={classes.nested}>
              <Link to="/leaderboard">
              <button  style={{backgroundColor:'transparent',textAlign:'center',width:'100%'}}> Leaderboard 2</button>
              </Link>
            
            
          </ListItem>
        </List>
            </Collapse>
 
      <ListItem button>
        
        <ListItemText primary="...." />
      </ListItem>
      <ListItem button>
        <ListItemText primary="...." />
      </ListItem>
        </List>
        
       
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <>
             <Route exact path="/" component={Home}/>
             <Route path="/quiz1" component={QuizOne}/>
             <Route path="/result-1" component={ResultOne}/>
             <Route path="/result-2" component={ResultTwo}/>
             <Route path="/countdown-2"component={CountDownTwo}/>
             <Route path="/countdown-1"component={CountDownOne}/>
             <Route path="/leaderboard" component={Leaderboard}/>
             <Route path="/leaderboard-2"component={LeaderboardTwo}/>
             <Route path="/login" component={LogIn}/>
             <Route path="/userinfo" component={UserInfo}/>
             <Route path="/how-to-play" component={HowToPlay}/>
             <Route path="/how-to-play-2" component={HowToPlayTwo}/>
             <Route path="/signin" component={SignIn}/>
             <Route path="/signup" component={SignUp}/>
             <Route path="/profile" component={Profile}/>
             
             
             
 
         </>
      </main>
    </div>
  );
}
