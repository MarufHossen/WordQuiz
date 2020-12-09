
import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import {db} from '../../Fire'
import {useAuth} from '../context/AuthContext'
import './result.css'
function ResultOne({point,passedQuestionIndexList, quizData,numberOfCorrectAns}) {
     
    const{currentUser}=useAuth();
    
    

    useEffect(() => {

        if(currentUser === null) {
            return ;
        } else {

            const leaderboard = db.collection('QuizOneLeaderboard').doc(currentUser.uid);
             
            leaderboard.get().then(snap => {
                  
                 
                // const previousScore = snap.data().score;
                 
                // if (previousScore < point) {
                    leaderboard.set({
                        'name': currentUser.displayName,
                        'score': point,
                        
                      });
                // }
           
    
          }) 
        }
          
             
        return () => {
            
        }
    }, [ currentUser && currentUser.displayName  ])
    
    

 
    return (
        <div className="result">
            <h1>Your time is up !!</h1>
             
             <div className="result-list">
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
             {
                 passedQuestionIndexList.length === 0 ? '' : 
                 <div className="pass">
                 <h4>List of Passing Question and Answers</h4>
                  
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

             }
            
            
                 <div className="button-list">
                 <button className="BUTTON"> 
                  <Link to="/how-to-play">Try again</Link>
                  </button>
                  <button className="BUTTON">
                      <Link to="/leaderboard">See Leaderboard</Link>
                  </button>
              
                 </div>
        </div>
    )
}

export default ResultOne

