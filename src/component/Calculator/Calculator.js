import './Calculator.css';
import BTNwrapper from '../Button-Wrapper/BTNwrapper.js';
import React,{useState} from 'react';

const Calculator =() => {

const [inputExp, setinputExp] = useState(0);

return (

    <div class="Cal">

          <input type = "text" className="Cal-input" value={inputExp}/>
          <br></br>

         <BTNwrapper inputExpNew={inputExp} setinputExpNew={setinputExp}/>

    </div>

)

}
export default Calculator;