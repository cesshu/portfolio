import React from 'react';
import './Card.css';

const Card = ({ title, content, Icon }) => {
  return (
    <div className="card w-100 d-flex gap-2 rounded-2">
      {Icon && <Icon className="card-icon w-100 mb-3 mt-2" />} {/* Render the icon */}
      <h3 className="">{title}</h3>
      <p className="">{content}</p>
    </div>
  );
};

export default Card;