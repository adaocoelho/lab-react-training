import React from 'react';
import './Random.css';

function Random(props) {
    return (
        <div className="randomNumber">
            <p>Random value betwenn {props.min} and {props.max} => {props.random}</p>
        </div>
    )
}


export default Random;
