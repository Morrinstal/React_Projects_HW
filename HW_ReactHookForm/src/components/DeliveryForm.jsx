import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './DeliveryForm.css'; 

const DeliveryForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [selectedDelivery, setSelectedDelivery] = useState('');
  const [showDepartments, setShowDepartments] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = (data) => {
    console.log(data);
    setSuccessMessage('Success!');
    reset();
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleDeliveryChange = (e) => {
    setSelectedDelivery(e.target.value);
    setShowDepartments(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="border p-4 border-success rounded">
      <h5 className="mb-3">Доставка</h5>
      <div className="mb-4">
        {
            [
            'Самовывоз из наших магазинов',
            'Курьер по вашему адресу',
            'Самовывоз из Meest ПОШТА',
            'Самовывоз из УКРПОЧТЫ',
            'Самовывоз из Новой Почты',
            'Курьер Meest ПОШТА'
            ].map((option) => (
          <div className="form-check" key={option}>
            <input
              className="form-check-input"
              type="radio"
              id={option}
              value={option}
              {...register('deliveryOption', { required: true })}
              onChange={handleDeliveryChange}
            />
            <label className="form-check-label" htmlFor={option}>
              {option}
            </label>
          </div>
        )) }
      </div>
      {errors.deliveryOption && <p className="text-danger">Пожалуйста, выберите способ доставки!</p>}

      {showDepartments && (
        <div className="border border-success p-3 mb-4">
          <label htmlFor="departmentSelect" className="form-label">Выберите почтовое отделение:</label>
          <select 
            id="departmentSelect" 
            className="form-select" 
            {...register('department', { required: true })}
          >
            <option value="">Выберите отделение</option>
            <option value="department1">Отделение 10</option>
            <option value="department2">Отделение 2</option>
            <option value="department3">Отделение 7</option>
          </select>
          {errors.department && <p className="text-danger">Пожалуйста, выберите почтовое отделение!</p>}
        </div>
      )}

      <h5 className="mb-3">Получатель</h5>
      <div className="mb-3">
        <label className="form-label">Фамилия</label>
        <input type="text" className="form-control" {...register('lastName', { required: true, pattern: /^[A-Za-zА-Яа-яЁё\s]+$/ })} />
        {errors.lastName && <p className="text-danger">Пожалуйста, введите корректную фамилию!</p>}
      </div>
      <div className="mb-3">
        <label className="form-label">Имя</label>
        <input type="text" className="form-control" {...register('firstName', { required: true, pattern: /^[A-Za-zА-Яа-яЁё\s]+$/ })} />
        {errors.firstName && <p className="text-danger">Пожалуйста, введите корректное имя!</p>}
      </div>
      <div className="mb-3">
        <label className="form-label">Отчество</label>
        <input type="text" className="form-control" {...register('middleName', { required: true, pattern: /^[A-Za-zА-Яа-яЁё\s]*$/ })} />
        {errors.middleName && <p className="text-danger">Пожалуйста, введите корректное отчество!</p>}
      </div>
      <div className="mb-3">
        <label className="form-label">Мобильный телефон</label>
        <input type="tel" className="form-control" {...register('phone', { required: true, pattern: /^\+?[0-9\s]*$/ })} />
        {errors.phone && <p className="text-danger">Пожалуйста, введите корректный номер телефона!</p>}
      </div>
      <button type="submit" className="btn btn-primary">Отправить</button>

      {successMessage && (
        <div className="overlay">
          <div className="alert">
            {successMessage}
          </div>
        </div>
      )}
    </form>
  );
};

export default DeliveryForm;
