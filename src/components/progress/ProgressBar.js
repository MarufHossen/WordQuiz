
import React,{useEffect,useState} from 'react'
import ResultOne from '../result/ResultOne'
function ProgressBar() {
const[style,setStyle]=useState(null)
const[dwidth,setDwidth]=useState(400);
 useEffect(()=>{
      const timer = 
      dwidth > 0 && setInterval(()=> setDwidth(dwidth - 400/120),1000)
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
           dwidth < 1 ? <ResultOne /> : <div style={{height:'5px',width:'400px',backgroundColor:'#333'}} className="progress-bar">
           <div style={style}  >
                
</div>

</div> 
       }
  
   
 
 </>

    )
}

export default ProgressBar




 