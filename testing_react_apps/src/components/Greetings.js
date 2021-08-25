import React, { useState } from 'react'
import Output from './Output';

const Greetings = () => {
    const [changedText, setChangedText] = useState(false);

    const changeTextHandler = ()=>{
        setChangedText(true);
    }
    return (
        <div>
            <h1>Hello World!</h1>
            {!changedText && <Output>Welcome to our Web Application!</Output>}
            {changedText && <Output>Text Changed!</Output>}
            <button onClick={changeTextHandler}>Click Here</button>
        </div>
    )
}

export default Greetings
