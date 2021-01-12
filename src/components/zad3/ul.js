import Li from "./li";

function Ul(props) {

    let numbers = []
    for (let i = 1; i <= props.number; i++) {
        numbers.push(i)
    }
    return (
        <div>
            {
                numbers.map(num => <Li key={num}/>)
            }
        </div>
    );
}

export default Ul;