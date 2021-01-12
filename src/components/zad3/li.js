import {useState} from "react";

function Li() {
    let max = 100;
    let randomNum = Math.floor(Math.random() * Math.floor(max)).toString();
    const [num, setNum] = useState(randomNum);

    function handleClickHex(e) {
        e.preventDefault();
        let number = parseInt(num, 10);
        let hexString = number.toString(16);
        setNum(hexString);

    }

    function handleClickBinary(e) {
        e.preventDefault();
        let number = parseInt(num, 10);
        let binString = number.toString(2);

        setNum(binString);

    }

    return (
        <>
            <div>
                {num}
            </div>

            <button onClick={handleClickHex}>
                {'hex'}
            </button>

            <button onClick={handleClickBinary}>
                {'binary'}
            </button>

        </>
    );
}

export default Li;