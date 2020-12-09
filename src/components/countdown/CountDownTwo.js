
import React,{useState,useEffect } from 'react'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AlarmOffIcon from '@material-ui/icons/AlarmOff';

import {db} from '../../Fire'
import QuizTwo from '../quiz/QuizTwo';
import './countdown.css'
function CountDownTwo() {

    const[isMute,setIsMute] = useState(true);


  let countdown = new Audio('../../assets/sounds/CountDown.mp3');
  const count = () => countdown.play();
   const[counter,setCounter] = useState(3);
   
  const [quizData, setQuizData] = useState([]);
  useEffect(() => {
    db.collection('QuizTwoData').onSnapshot(snapshot => {
      setQuizData(snapshot.docs.map(doc => doc.data()))
    })
  }, [])
 useEffect(()=>{
  if( counter  > 0 && isMute) {
    count()
  }
     const timer = 
     counter > 0 && setInterval(() => setCounter(counter - 1)
      
     , 1000);
      
      
    
    
     return()=>clearInterval(timer)
 },[counter])  ;
 
   //Sound Handling
   const handleSoundOff =()=>{
    setIsMute(false);
  }
  const handleSoundOn =()=>{
    setIsMute(true);
  }

 
    return (
        <div className="countdown">
            { counter < 1 ? <QuizTwo quizTwoData={quizData}/> :
            <div className="timer"> 

            {counter}
            {
            isMute ?  <AccessAlarmIcon style={{color:'yellow',marginLeft:'10px',marginTop:'-10px',cursor:'pointer'}} onClick={handleSoundOff} /> : 
            <AlarmOffIcon style={{color:'yellow',marginLeft:'10px',marginTop:'-10px',cursor:'pointer'}} onClick={handleSoundOn}/>
          } 

            
            </div>
            }
             
        </div>
    )
}

export default CountDownTwo
