import React,{useState,useRef} from 'react'

const Watch = () => {
    
    let date =  Date();
    // let seconds = date.getSeconds()

    const[second,setSecond]= useState(date);
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
    <div className="container">
         {Hours} : {minute} : {second}
         <button className="btn btn-primary" onClick={secondFun}> Start </button>
         <button className="btn btn-warning" onClick={resetFun}> Reset </button>
         <button className="btn btn-success" onClick={pauseFun}> Stop </button>
         <br></br><br></br>
         {date}
    </div>
  )
}

export default Watch;
