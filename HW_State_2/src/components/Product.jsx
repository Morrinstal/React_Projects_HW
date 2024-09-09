import { useState } from 'react';
import './Product.css';

const Product = ({ image, description, price }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : prev));
  const totalPrice = price * quantity;

  return (
    <>
     <div className="product-container">
      <hr />
      <div className="product-content">
        <img src={image} alt="Product" className="product-image" />
        <div className="product-description">
          <p>{description}</p>
        </div>
      </div>
      <div className="product-bottom">
      <div className="product-quantity">
          <button onClick={decreaseQuantity} className="quantity-button">-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity} className="quantity-button">+</button>
        </div>
        <div className="product-price">${totalPrice.toFixed(2)}</div>
      </div>
      <hr />
    </div>
    </>
  );
};

export default Product;

