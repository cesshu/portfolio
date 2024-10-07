import React from 'react';
import './Card.css'; // Ensure you have a CSS file for styling, if needed.

const Card = (props) => {
  return (
    <div className="card w-100 d-flex gap-2 rounded-2 align-items-center"> {/* Added padding for better spacing */}
      {props.Icon && <props.Icon className="card-icon mb-3 mt-2" />} {/* Render the icon */}
      <h3 className="card-title">{props.title}</h3> {/* Added a class for styling */}
      <p className="card-content">{props.content}</p> {/* Added a class for styling */}
    </div>
  );
};

export default Card;
