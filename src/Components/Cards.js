import React from 'react';
import '../assets/css/Cards.css';

function Cards(props) {
    return (
        <div id="MainCard" className={props.className}>
            <div className="left">
                <p className="info">{props.info}</p>
                <h5 className="subtitle">{props.subtitle}</h5>
            </div>
            <div className="right">
                <p className="icon">{props.icon}</p>
            </div>
        </div>
    )
}

export default Cards;