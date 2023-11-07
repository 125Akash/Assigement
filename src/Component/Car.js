import React, { useState } from 'react';

const Caradder = ({ onAddcar }) => {
  const [car, setCar] = useState([]);
  const [carInfo, setCarInfo] = useState({ name: '', model: '', quantity: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarInfo({ ...carInfo, [name]: value });
  };

  const handleAddCar = () => {
    const { name, model, quantity } = carInfo;
    if (name && model && quantity) {
      const existingCarIndex = car.findIndex((c) => c.name === name);
      if (existingCarIndex === -1) {
        const updatedCar = [...car, { name, model, quantity }];
        setCar(updatedCar);
        setCarInfo({ name: '', model: '', quantity: '' });
      } else {
        alert("Car already exists");
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={carInfo.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Model"
        name="model"
        value={carInfo.model}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Quantity"
        name="quantity"
        value={carInfo.quantity}
        onChange={handleChange}
      />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
};

export default Caradder;
