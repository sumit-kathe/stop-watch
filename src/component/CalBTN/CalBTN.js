import './CalBTN.css';


const CalBTN=(props) => {

const {Numberdata , setinputDouble} = props;

return (

        <button className="CalBTN" onClick = {() => setinputDouble(Numberdata)}> {Numberdata} </button>

        
)


}
export default CalBTN;