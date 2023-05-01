import React,{useState,useRef} from 'react';
import './watch.css';

const Watch = () => {
    
    let date = <p>Todays Date & current Time  -- { Date()}</p>
    // let seconds = date.getSeconds()

    const[second,setSecond]= useState(0);
    const[minute,setMinute]= useState(59);
    const[Hours,setHours]= useState(5);

    let secondTime = useRef();

    const secondFun =() =>{
        console.log('onclick clicked')
        secondTime.current = setInterval(()=>{setSecond((prevState)=> prevState + 1)},1000)
        
    }
    const resetFun =() =>{
        console.log('onclick clicked')
        clearInterval(secondTime.current)
        setSecond(0)
        setMinute(0)
        setHours(0)
    }
    const pauseFun =() =>{
        console.log('onclick clicked')
        clearInterval(secondTime.current)
        
    }
  if(second === 60 ){
    setMinute((prevState)=>prevState + 1);
    setSecond(0);
  }
  if(minute === 60 ){
    setHours((prevState)=>prevState + 1);
    setSecond(0);
    setMinute(0);
  }

  return (
    <div className="contain">
         {date}
       
        <div className='borderee'>
         {Hours} : {minute} : {second}
         </div>
         <div className="miandiv">

        <div> <button className="btn btn-primary" onClick={secondFun}> Start </button> </div> 

        <div> <button className="btn btn-warning" onClick={resetFun}> Reset </button></div>
        
        <div> <button className="btn btn-success" onClick={pauseFun}> Stop </button> </div> 

         </div>
         <br></br>

    </div>
  )
}

export default Watch;
