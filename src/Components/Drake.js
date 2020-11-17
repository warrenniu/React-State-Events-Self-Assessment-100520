import React, { useState } from 'react';
import { yes, no } from '../objects';

const Drake = () => {

    let [clicked, setClicked] = useState(false);
    let [yesObject] = useState(yes);
    let [noObject] = useState(no);

    const clickHandler = () => {
        setClicked(!clicked);
    };

    return (
        <>
            <h1>{clicked ? yesObject["yes-statement"] : noObject["no-statement"]}</h1>
            <img alt="Drake" src={clicked ? yesObject["yes-image"] : noObject["no-image"]} onClick={clickHandler} style={{ width: "40%", height: "40%" }} />
        </>
    );
};

export default Drake;