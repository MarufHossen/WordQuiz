
import React,{useEffect,useState} from 'react'
function ProgressBar() {
const[style,setStyle]=useState(null)
const[dwidth,setDwidth]=useState(400);
          
         useEffect(()=>{
            let interval =setInterval(()=>{
                setDwidth(dwidth- 400/120)
             
           },1000)
           let time=setTimeout(()=>{
               clearInterval(interval)
           },120000)
           clearTimeout(time);
                 const myStyle={
                backgroundColor:'yellow',
                 width: `${dwidth}px`,
                height:'100%',
              
        
            }
            setStyle(myStyle)
            console.log(dwidth);
         },[])
     
      
          
        //    function move(){
               
        //            i=99;
        //            let id=setInterval(frame,1000)
           
        //    function frame(){
        //        if(dwidth <=0){
        //            clearInterval(id);
        //            i=0
        //        }else{
        //            dwidth--;
        //           const myStyle={
        //                            backgroundColor:'yellow',
        //          width: `${dwidth}px`,
        //         height:'100%',
        //           }
        //           setStyle(myStyle)
        //        }
        //    }    
        //    }
        
    
    return (
       <>
 <div style={{height:'5px',width:'400px',backgroundColor:'#333'}} className="progress-bar">
<div style={style} >
   
</div>

</div> 
 
 </>

    )
}

export default ProgressBar




 