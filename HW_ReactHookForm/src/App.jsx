import React from 'react';
import DeliveryForm from './components/DeliveryForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="form-container">
          <h1 className="text-center mb-4">Форма доставки</h1>
          <DeliveryForm />
        </div>
      </div>
    </div>
  );
};

export default App;
