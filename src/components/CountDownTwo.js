import React, { useState, useEffect } from 'react'
import Countdown from 'react-countdown';
import QuizTwo from './QuizTwo';
import { db } from '../Fire'

import './countdown.css'
function CountDownTwo() {

  let countdown = new Audio('../../assets/sounds/CountDown.mp3');
  const count = () => countdown.play();
  const [quizData, setQuizData] = useState([]);
  useEffect(() => {
    db.collection('QuizTwoData').onSnapshot(snapshot => {
      setQuizData(snapshot.docs.map(doc => doc.data()))
    })
  }, [])
  const renderer = ({ seconds, completed }) => {
    if (completed) {

      return <QuizTwo quizTwoData={quizData} />


    } else {
      count()
      return <div className="countdown">

        <div className="timer">{seconds}</div>
      </div>
    }

  }

  return (
    <Countdown
      date={Date.now() + 3000}
      renderer={renderer}
    >



    </Countdown>



  )
}

export default CountDownTwo

