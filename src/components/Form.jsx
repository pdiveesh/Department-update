import React, { useState } from 'react';
import './MyForm.css';
import axios from "axios";

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const queryParams = new URLSearchParams({
        userName: formData.name,
        email: formData.email,
        mobilePhone: formData.phone
      }).toString();

      const res = await axios.post(`http://localhost:8080/api/registrate?${queryParams}`);
      
      console.log("Form submitted successfully!");
      
      setFormData({
        name: '',
        email: '',
        phone: ''
      });
    } catch (error) {
      console.error('Error occurred while submitting the form:', error);
    }
  };

  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input id="phone" name="phone" value={formData.phone} onChange={handleChange}></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
