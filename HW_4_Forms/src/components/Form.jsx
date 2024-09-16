import { useState } from 'react';
import products from '../model/products.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();
    
    const foundProduct = products.find(
      (product) =>
        product.title.toLowerCase() === title.toLowerCase() &&
        product.price.toString() === price
    );

    if (!foundProduct) {
      setMessage('Товар не найден!');
      setMessageType('danger'); 
    } else {
      setMessage('Товар успешно добавлен в корзину!');
      setMessageType('success'); 
    }
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPrice(value);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleAddProduct} className="bg-light p-4 rounded shadow-sm">
            <h4 className="mb-3">Добавить товар</h4>
            
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Название товара</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Введите название товара"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="form-label">Цена</label>
              <input
                type="text"
                className="form-control"
                id="price"
                value={price}
                onChange={handlePriceChange}
                placeholder="Введите цену"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">Добавить в корзину</button>

            {message && (
              <div className={`alert mt-3 mb-0 alert-${messageType}`} role="alert">
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
