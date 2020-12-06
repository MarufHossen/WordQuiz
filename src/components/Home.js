 import React, { useState,useEffect } from 'react'
 import {db} from '../Fire'
 import Button from '@material-ui/core/Button'
 
import './home.css';
import {Link} from 'react-router-dom'

function Home() {
    const[leftSidebarElements,setLeftSidebarElements]=useState([])
    const[rightSidebarElements,setRightSidebarElements]=useState([])


    useEffect(()=>{
        db.collection('LeftMenus').onSnapshot(snapshot=>{
            setLeftSidebarElements(snapshot.docs.map(doc =>({id:doc.id, data:doc.data()})))
             
             
          })
        db.collection('RightMenus').onSnapshot(snapshot=>{
            setRightSidebarElements(snapshot.docs.map(doc =>({id:doc.id, data:doc.data()})))
             
             
          })
    })
    return(
        <div className="home">
            <div className="sidebar-left">
            
               {/* <li>
                   <a href="#">Menu</a>
               </li>
               <li>
                   <a href="#">Menu</a>
               </li>
               <li>
                   <a href="#">Menu</a>
               </li> */}
               {
                   leftSidebarElements.map((data)=>(
                       <>
                       <Button style={{marginBottom:'10px',width:'100%'}}><Link to="/">{data.data.menu}</Link></Button>
                       </>
                   ))
               }
            
        
            </div>

            
             <div className="quizContent">
                   <h1>Welcome Guest!</h1>
                    <div className="intro">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vero quibusdam recusandae ullam reprehenderit doloribus quod consequuntur facilis autem quis.

                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quisquam, quod nesciunt labore, nihil perferendis quaerat eaque sapiente maiores ratione sed, fugit expedita. Aspernatur illum accusantium itaque commodi minus similique!
                        </p>
                        <Link to="/how-to-play" > <button className="Btn">
                             Start
                             </button> </Link>
                         

                    </div>
             </div>

            <div className="sidebar-right">
            
            {
                   rightSidebarElements.map((data)=>(
                       <>
                       <Button style={{marginBottom:'10px',width:'100%'}}><Link to="/">{data.data.menu}</Link></Button>
                       </>
                   ))
               }
            
                
            </div>
             
            <div className="footer">
            This is some content in footer
        </div>
             
        </div>
    )
}

 
 export default Home
 