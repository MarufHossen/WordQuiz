import React, { useState, useEffect } from 'react'

import './quiz.css'
import Result from './Result'
import ProgressBar from './ProgressBar'
function QuizTwo({ quizTwoData }) {
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




  }, [questionIndex])

  return (
    <>

      {
        questionIndex === quizData.length ? (<Result numberOfCorrectAns={numberOfCorrectAns} point={point} quizData={quizData} />) : <div className="quiz">
          <div className="quiz-content">
            <ProgressBar />
            <button className="button">{point}</button>

            <p>{quizData[questionIndex].question}</p>


            {/* Answer Input Area */}
            <div className="quizArea">
              <div className="quizArea__blank">

                {

                  quizData[questionIndex].question.split("").map((letter, index) => (


                    letter == "_" ? (
                      <div
                        className="quizArea__blank__answerLetter"
                        key={index}>
                        {tempAnsLetters[underscoreCounter++]}
                      </div>
                    ) :
                      <p>{letter == " " ? (<p>&nbsp;</p>) : letter}</p>

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


            {/* <button className="sign-out" onClick={()=>firebase.auth().signOut()}>Sign Out</button> */}
          </div>
        </div>}

    </>
  )
}

export default QuizTwo
