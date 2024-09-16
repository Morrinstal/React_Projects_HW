import React from 'react';
import './Card.css';
import saleIcon from '../assets/sale.png'; 

const Card = ({ id, image, title, price, oldPrice, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          <div className="card-price-container">
            {oldPrice && (
              <div className="card-price-old-container">
                <span className="card-old-price">${oldPrice}</span>
                <img src={saleIcon} alt="Sale" className="sale-icon" /> 
              </div>
            )}
            <span className="card-price">${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;