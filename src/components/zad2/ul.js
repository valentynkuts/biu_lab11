import {useState} from "react";
import Li from "./li";

let max = 100;
let randomNum = 0;

function Ul(props) {
    const [listItems, setListItems] = useState([]);

    let numbers = []
    for (let i = 1; i <= props.number; i++) {
        numbers.push(i)
    }

    function handleClick(e) {
        e.preventDefault();

        const listItems = numbers.map((number) => {

                randomNum = Math.floor(Math.random() * Math.floor(max));
                //return <li>{randomNum}</li>
                return <Li num={randomNum} />
            }
        );
        setListItems([...listItems]);

    }

    return (
        <>
        <ul>
            {
                listItems
            }
        </ul>
            <button onClick={handleClick}>
                {'Click'}
            </button>
            </>

    );
}

export default Ul;