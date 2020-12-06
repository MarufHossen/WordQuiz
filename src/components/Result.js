
import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {db} from '../Fire'
import {useAuth} from './context/AuthContext'
import './result.css'
function Result({point,passedQuestionIndexList, quizData,numberOfCorrectAns}) {
     
    const{currentUser}=useAuth();
    console.log(currentUser.uid);
   
    // TODO:: Pore dkehmu
    //    db.collection('QuizOneLeaderboard').get({
    //     name:currentUser.displayName,
    //     score:point,
    //     rank:1
    // })

    useEffect(() => {
        const leaderboard = db.collection('QuizOneLeaderboard').doc(currentUser.uid);

       console.log(currentUser.uid);
          leaderboard.get().then(snap => {
                // const previousScore = snap.data().score;
                // if (previousScore < point) {
                    leaderboard.set({
                        'name': currentUser.displayName,
                        'score': point,
                        
                      });
                // }


          })

        // leaderboard.forEach((doc) => {
        //     console.log(doc.id, '=>', doc.data());
        //   });
          
        // console.log(leaderboard.data());
        return () => {
            
        }
    }, [])
    
    

 
    return (
        <div className="result">
            <h1>Your time is up !!</h1>
             
             <div className="Table">
                 <table>
                     <tr>
                         <td>Renew Highest Ranking:</td>
                         {/* TODO:: Firebase theke ashbe data. erpor check korte hobe */}
                         <td>120</td>

                     </tr>
                     <tr>
                         <td>Your Score:</td>
                         <td>{point}</td>
                     </tr>
                     <tr>
                         <td>Number of Correct Answers:</td>
                        <td>{numberOfCorrectAns}</td>
                          
                     </tr>
                     <tr>
                     <td>Number of Passing Answers:</td>
    <td>{passedQuestionIndexList.length}</td>
                     </tr>
                 </table>

             </div>
            <div className="pass">
                <h4>List of Passing Question and Answers</h4>
                {/* {passQuestion.map(ques=>(
                    <div className="pass-content"
                    >
                    <p>{ques.question}</p>
                    <p>{ques.correctAnswer}</p>
                </div>
                ))} */}
                <table>
                    <thead>
                        <th>Pass Questions</th>
                        <th>Answer</th>
                    </thead>
                    <tbody>
                        {passedQuestionIndexList.map(index=>(
                            <tr>
                                <td>{quizData[index].question}</td>

                                <td>{quizData[index].answer}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
               
                 
            </div>
            
                  <button className="BUTTON"> 
                  <Link to="/countdown">Try again</Link>
                  </button>
              
        </div>
    )
}

export default Result

