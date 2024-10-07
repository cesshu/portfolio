import React from 'react';
import './Cardv2.css';

const Card = (props) => {
    return (
      <div className="cardv2 d-flex flex-column gap-2 rounded-2">
        {props.Icon && <props.Icon className="cardv2-icon w-100 mb-3 mt-2" />} {/* Render the icon */}
        <h3 className="">{props.title}</h3>
      </div>
    );
  };
  
  export default Card;