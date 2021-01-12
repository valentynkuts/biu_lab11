import {useState} from "react";
import Li from "./li";

let max = 100;
let randomNum = 0;

function Ul(props) {
    const [num, setNum] = useState(0);
    
    let numbers = []
    for (let i = 1; i <= props.number; i++) {
        numbers.push(i)
    }
    const listItems = numbers.map((number) => {

            randomNum = Math.floor(Math.random() * Math.floor(max));
            //return <li>{randomNum}</li>
        return <Li num={randomNum} />
        }
    );
    return (
        <ul>
            {
                listItems
            }
        </ul>
    );
}

export default Ul;