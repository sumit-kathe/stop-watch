import './BTNwrapper.css';
import CalBTN from '../CalBTN/CalBTN.js';

const BTNwrapper =(props) => {

const {inputExpNew, setinputExpNew} = props;

return (

   <div className="BTNwrapper">

     <CalBTN style = {{backgroundColor : "white"}} Numberdata = {'AC'} setinputDouble = {setinputExpNew}/>    
     <CalBTN  Numberdata = {'+/-'} setinputDouble = {setinputExpNew}/>  
     <CalBTN  Numberdata = {'%'} setinputDouble = {setinputExpNew}/>     
     <CalBTN  Numberdata = {'/'} setinputDouble = {setinputExpNew}/>  
     <CalBTN  Numberdata = {'7'} setinputDouble = {setinputExpNew}/>  
     <CalBTN  Numberdata = {'8'} setinputDouble = {setinputExpNew}/>  
     <CalBTN  Numberdata = {'9'} setinputDouble = {setinputExpNew}/>  
     <CalBTN  Numberdata = {'x'} setinputDouble = {setinputExpNew}/>  
     <CalBTN  Numberdata = {'4'} setinputDouble = {setinputExpNew}/>  
     <CalBTN  Numberdata = {'5'} setinputDouble = {setinputExpNew}/>  
     <CalBTN  Numberdata = {'6'} setinputDouble = {setinputExpNew}/>    
     <CalBTN  Numberdata = {'-'} setinputDouble = {setinputExpNew}/>  
     <CalBTN  Numberdata = {'1'} setinputDouble = {setinputExpNew}/>     
     <CalBTN  Numberdata = {'2'} setinputDouble = {setinputExpNew}/>  
     <CalBTN  Numberdata = {'3'} setinputDouble = {setinputExpNew}/>  
     <CalBTN  Numberdata = {'+'} setinputDouble = {setinputExpNew}/>  
     <CalBTN  Numberdata = {'00'} setinputDouble = {setinputExpNew}/>  
     <CalBTN  Numberdata = {'.'} setinputDouble = {setinputExpNew}/>  
     <CalBTN  Numberdata = {'0'} setinputDouble = {setinputExpNew}/>  
     <CalBTN  Numberdata = {'='} setinputDouble = {setinputExpNew}/>  

   </div>

)

}
export default BTNwrapper;