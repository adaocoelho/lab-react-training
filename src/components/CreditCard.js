import React from 'react';
import './CreditCard.css';

function CreditCard(props) {
    return (
        <div className="cards">
            <div className="card" style={{backgroundColor: `${props.bgColor}` , color: `${props.color}`}}>
                <div className="info">
                <p>{props.type}</p>
                <p className="number">{props.number}</p> 
                <div className="info-footer">
                <p>Expires {props.expirationMonth} / {props.expirationYear}, {props.bank}</p> 
                    <p>{props.owner}</p> 
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default CreditCard;