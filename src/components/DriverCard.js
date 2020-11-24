import React from 'react';

import './DriverCard.css';

function DriverCard(props) {
    return (
        <div className="driversCard">
            <img src={props.img}/>
            <div className="info-card">
                <p>{props.name}</p>
                <p>{props.car.model}</p>
                <p>{props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;