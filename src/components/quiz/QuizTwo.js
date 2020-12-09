import React, { useState, useEffect } from 'react'
import './quiz.css'
import ResultTwo from '../result/ResultTwo'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AlarmOffIcon from '@material-ui/icons/AlarmOff';
function QuizTwo({ quizTwoData }) {

  const[isMute,setIsMute] = useState(true)
  //Sound Handling
  const handleSoundOff =()=>{
    setIsMute(false);
  }
  const handleSoundOn =()=>{
    setIsMute(true);
  }
  let sound = new Audio("../../assets/sounds/rightans.mp3");
  let wrong = new Audio('../../assets/sounds/wrongans.mp3');
  /**
    * Playing Sound When Correct Button Pressed
    */
  const playCorrect = () => sound.play();
  //playing sound when wrong button pressed
  const playWrong = () => wrong.play();

  const quizData = quizTwoData
  //point 
  const [point, setPoint] = useState(0);

  //   For changing the question
  const [questionIndex, setQuestionIndex] = useState(0)
  /** Current pointer which points the current index of the list */
  const [currentIndex, setCurrentIndex] = useState(0);
  // Underscore Counter to show letter instead of underscore
  let underscoreCounter = 0;

  // Number of correct answer
  const [numberOfCorrectAns, setNumberOfCorrectAns] = useState(0);
  const [rightBtn, setRightBtn] = useState(true);

  const [tempAnsLetters, setTempAnsLetters] = useState([]); // Save temporary pressed button here
  const [tempQuestionBtnLetters, setTempQuestionLetters] = useState([]) // Randomized question button here from useffect
  const [correctAnswerLetters, setCorrectAnswerLetters] = useState([]) // Save correct ans letter as list from useEffect


  function getRandomLetters(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  /**
   * Shuffling the answer string to randomize the letter
   * @returns array
   * @param string 
   */
  const shuffle = (string) => {
    let randomLetters = getRandomLetters(5);
    let randomLetterList = randomLetters.split("");
    let answerLetterList = string.split("");
    let jointList = answerLetterList.concat(randomLetterList);
    console.log(jointList);
    jointList.sort(() => Math.random() - 0.5);
    return jointList;
  }

  const resetCurrentStage = () => {
    setTempAnsLetters([])
    setTempQuestionLetters([])
    setCurrentIndex(0);
    // setAnswerWord(shuffle(quizData[0].correctAnswer))
  }

  const submitAns = (ansLetter, ansLetterIndex) => {
    console.log(ansLetter);
    console.log(correctAnswerLetters[currentIndex]);
    if (ansLetter === correctAnswerLetters[currentIndex]) {
    isMute &&  playCorrect();

      setPoint(point + 1);

      setTempAnsLetters([...tempAnsLetters, ansLetter]);
      let tempQL = tempQuestionBtnLetters;
      tempQL[ansLetterIndex] = "";
      setTempQuestionLetters(tempQL);
      setCurrentIndex(currentIndex + 1);
      if (currentIndex === quizData[questionIndex].answer.length - 1) {

        // Increase the number of correct answer
        setNumberOfCorrectAns(numberOfCorrectAns + 1);

        goToNext();


      }
    } else {
     isMute && playWrong();
      setRightBtn(false);

    }

  }

  const goToNext = () => {
    if (questionIndex < 3) {
      resetCurrentStage();
      setQuestionIndex(questionIndex + 1);
      // setPoint(point + 1);
    }

  }

  useEffect(() => {
    if (questionIndex < quizData.length) {
      setCorrectAnswerLetters(quizData[questionIndex].answer.split(""))
      setTempQuestionLetters(shuffle(quizData[questionIndex].answer));

      return () => {

      }
    }




  }, [questionIndex ]);

  //Progress bar handle
  const[style,setStyle]=useState(null)
const[dwidth,setDwidth]=useState(300);
 useEffect(()=>{
      const timer = 
      dwidth > 0 && setInterval(()=> setDwidth(dwidth - 300/120),1000)
      return()=>{
          const shape = {
              backgroundColor:'yellow',
              width:`${dwidth}px`,
              height:'100%'
          }  
          setStyle(shape)
        clearInterval(timer)}
 },[dwidth]);
 console.log(dwidth);

  return (
    <>

      {
        questionIndex === quizData.length ? (<ResultTwo numberOfCorrectAns={numberOfCorrectAns} point={point} quizData={quizData} />) : <div className="quiz">
          <div className="quiz-content">
           <div className="quiz-part">
           {
           dwidth < 1 ? <ResultTwo  numberOfCorrectAns={numberOfCorrectAns} point={point} quizData={quizData}  /> : <div style={{height:'5px',width:'300px',backgroundColor:'#333'}} className="progress-bar">
           <div style={style}  >
                
</div>

</div> 
       }
            {
            isMute ?  <AccessAlarmIcon style={{color:'yellow',marginLeft:'10px',marginTop:'-10px',cursor:'pointer'}} onClick={handleSoundOff} /> : 
            <AlarmOffIcon style={{color:'yellow',marginLeft:'10px',marginTop:'-10px',cursor:'pointer'}} onClick={handleSoundOn}/>
          }
           </div>
           { dwidth <1 ? '' :<>

           <button className="button">{point}</button>

          


{/* Answer Input Area */}
<div className="quizArea">
  <div className="quizArea__blank">

    {

      quizData[questionIndex].question.split("").map((letter, index) => (


        letter === "_" ? (
          <div
            className="quizArea__blank__answerLetter"
            key={index}>
            {tempAnsLetters[underscoreCounter++]}
          </div>
        ) :
          <p>{letter === " " ? (<p>&nbsp;</p>) : letter}</p>

      ))

    }




  </div>

  {/* Question Button Area */}
  <div className="quizArea__letterBtnArea">{tempQuestionBtnLetters.map((letter, index) => (
    <button
      disabled={letter === ""}
      className={letter === "" ? "rotate-center" : "quizArea__letterBtnArea__btn " && rightBtn ? 'quizArea__letterBtnArea__btn' : ' shake'}
      key={index}
      onClick={() => submitAns(letter, index)}>

      {letter}

    </button>))}
  </div>
</div>

            </>}
            

           
          </div>
        </div>}

    </>
  )
}

export default QuizTwo
