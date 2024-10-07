import React from 'react';
import './Cardv2.css';

const Card = ({ title, Icon }) => {
    return (
      <div className="cardv2 d-flex flex-column gap-2 rounded-2">
        {Icon && <Icon className="cardv2-icon w-100 mb-3 mt-2" />} {/* Render the icon */}
        <h3 className="">{title}</h3>
      </div>
    );
  };
  
  export default Card;