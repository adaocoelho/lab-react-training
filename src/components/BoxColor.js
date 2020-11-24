import React from 'react';


const divStyle = {
    background: 'red'
};


function BoxColor(props) {
    return (
        <div style={divStyle} className="box">
            <p>{`rgb(${props.r}, ${props.g}, ${props.b}`} </p>
        </div>
    )
}


export default BoxColor;
