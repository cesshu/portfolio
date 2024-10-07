import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null; // Ensure project is available

  return (
    <div className="modal-overlay d-flex align-items-center justify-content-center " onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div>
            <h2 className="modal-title text-white">{project.title}</h2>
            <span className="category">{project.category}</span>
            <p className="date text-white">{project.date}</p>
        </div>
        <img src={project.image} alt={project.title} className="modal-image" />
        <div className="mt-3">
            <span className="category">product</span>
            <p className="py-3 text-white text-uppercase">{project.title.split(' ')[0]}</p>
        </div>
        <div>
            <span className="category">category</span>
            <p className="py-3 text-white">{project.technologies}</p>
        </div>
        <div>
            <span className="category">idea</span>
            <p className="modal-description text-white py-3">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
