
import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import {db} from '../../Fire'
import {useAuth} from '../context/AuthContext'
import './result.css'
function ResultTwo({point,numberOfCorrectAns}) {
     
    const{currentUser}=useAuth();
    
   
   

    useEffect(() => {

        if(currentUser === null) {
            return ;
        } else {
            const leaderboard = db.collection('QuizTwoLeaderboard').doc(currentUser.uid);
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
    }, [ currentUser ,point  ])
    
    

 
    return (
        <div className="result" style={{overflowY:'hidden'}}>
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
                     
                 </table>

             </div>
           
            
                  <button className="BUTTON"> 
                  <Link to="/how-to-play-2">Try again</Link>
                  </button>
                  <button className="BUTTON">
                      <Link to="/leaderboard-2">See Leaderboard</Link>
                  </button>
              
        </div>
    )
}

export default ResultTwo

