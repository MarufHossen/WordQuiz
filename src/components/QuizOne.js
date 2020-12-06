
import React, { useState, useEffect } from 'react'
import './quiz.css'
import { BsFillForwardFill } from 'react-icons/bs';
import ProgressBar from './ProgressBar'
import Result from './Result';

// import db from '../Fire'
function QuizOne({ quizOneData }) {
  let sound = new Audio("../../assets/sounds/rightans.mp3");
  let wrong = new Audio('../../assets/sounds/wrongans.mp3');


  const quizData = quizOneData;

  /**
   * Playing Sound When Correct Button Pressed
   */
  const playCorrect = () => sound.play();
  //playing sound when wrong button pressed
  const playWrong = () => wrong.play();


  //point 
  const [point, setPoint] = useState(0);
  //passing questions
  const [passedQuestionIndexList, setPassedQuestionIndexList] = useState([]);

  // Number of correct answer
  const [numberOfCorrectAns, setNumberOfCorrectAns] = useState(0);

  //   For changing the question
  const [questionIndex, setQuestionIndex] = useState(0)

  /** Current pointer which points the current index of the list */
  const [currentIndex, setCurrentIndex] = useState(0);

  // Second Method to make the quiz logic easier. Under investigation
  const [tempAnsLetters, setTempAnsLetters] = useState([]);
  const [tempQuestionBtnLetters, setTempQuestionLetters] = useState([])
  const [correctAnswerLetters, setCorrectAnswerLetters] = useState([])
  const [rightBtn, setRightBtn] = useState(true);
  // console.log(tempAnsLetters);
  // console.log(tempQuestionBtnLetters);
  // console.log(correctAnswerLetters);

  //

  /**
   * Handling Button Pressing
   * @param ans This is the letter of the button pressed
   * @param shuffledIndex This is the number of index of shuffled letter button pressed.
   */
  const submitAns = (ansLetter, ansLetterIndex) => {
    if (ansLetter === correctAnswerLetters[currentIndex]) {
      playCorrect();

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
      playWrong();
      setRightBtn(false);

    }

  }

  function getRandomLetters(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
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


  /**
   * Reseting current game stage
   */
  const resetCurrentStage = () => {
    setTempAnsLetters([])
    setTempQuestionLetters([])
    setCurrentIndex(0);
    // setAnswerWord(shuffle(quizData[0].correctAnswer))
  }

  /**
   * The function will be call to go next question
   */
  const goToNext = () => {
    if (questionIndex < 3) {
      resetCurrentStage();
      setQuestionIndex(questionIndex + 1);
      // setPoint(point + 1);
    }

  }
  const passQues = (passedQuestionIndex) => {
    //  if(questionIndex < quizData.length-1){
    resetCurrentStage();
    setPassedQuestionIndexList([...passedQuestionIndexList, questionIndex]);
    setQuestionIndex(questionIndex + 1);

    setPoint(point);

    console.log(passedQuestionIndexList);
    // console.log(questionIndex);

    //  }


  }


  useEffect(() => {

    if (questionIndex < quizData.length) {
      setCorrectAnswerLetters(quizData[questionIndex].answer.split(""))
      setTempQuestionLetters(shuffle(quizData[questionIndex].answer));

      return () => {

      }
    }




  }, [questionIndex])
  return (
    <>
      {questionIndex === quizData.length ? (<Result numberOfCorrectAns={numberOfCorrectAns} point={point} passedQuestionIndexList={passedQuestionIndexList} quizData={quizData} />) : <div className="quiz">
        <div className="quiz-content">
          <ProgressBar />
          <button className="button">{point}</button>

          <p>{quizData[questionIndex].question}</p>


          {/* Answer Input Area */}
          <div className="quizArea">
            <div className="quizArea__blank">

              {correctAnswerLetters.map((letter, index) => (

                <div
                  className="quizArea__blank__answerLetter"
                  key={index}>
                  {tempAnsLetters[index]}
                </div>
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

          <button className="btn-icon" onClick={() => passQues(questionIndex)}>
            <BsFillForwardFill />
          </button>
          {/* <button className="sign-out" onClick={()=>firebase.auth().signOut()}>Sign Out</button> */}
        </div>
      </div>}
    </>
  )
}

export default QuizOne
