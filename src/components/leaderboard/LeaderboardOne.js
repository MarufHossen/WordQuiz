
import React,{useState,useEffect} from 'react'
import './leaderboard.css'
import {db} from '../../Fire'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
function LeaderboardOne() {
    const[datas,setDatas]=useState([]);

    useEffect(()=>{
          db.collection('QuizOneLeaderboard').onSnapshot(snapshot=>{
              setDatas(snapshot.docs.map(doc=>doc.data()))
          })
         
    },[])
    let list=datas.map(data=>data)
     
       console.log(list);
    list.sort(function(a,b){
        return b.score -a.score
    })
     console.log(list);

      let rankList=[]
     
     for(let i=1;i<=list.length;i++){
         rankList.push(i)
     }
     console.log(rankList);
   
    return (
        <>
        <Button variant="contained" style={{background:'#be5ed4',width:"200px",marginTop:'20px',marginLeft:'20px'}}>
            <Link  to="/leaderboard-2">Leaderboard Two</Link>
             </Button>

        <div className="table">
        <div className="table-content">
            <table className="table-1">
                <thead>
                    <tr>
                    <th>Ranking</th>
                    </tr>
                </thead>
                <tbody>
                    {rankList.map((r)=>(
                        <tr className="tr">
                            <td>{r}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table className="table-1">
                <thead> 
                <tr>
                      
                     <th>Name</th>
                     <th>Score</th>
                </tr>
                </thead>
                <tbody> 

                {list.map((data)=>(
                
                                        
         <tr className="tr">
             <td>{data.name}</td>
             <td>{data.score}</td>  
              
        </tr> 
                
                ) 
                )}
                </tbody>
                
            </table>
            
        </div>
        </div>
        </>
    )
}

export default LeaderboardOne
