import React, { useState } from 'react';
import './Activityone.css';
import axios from 'axios';

const Activityone = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phonenumber: '',
    email: '',
    besttimetocall: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://example.com/api/submit', formData);
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className='main-box'>
      <div className='form-box'>
        <h2>Fitness Flyer Registration</h2>

        <form className='simple-form' onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className='form-row'>
            <label className='label-bold' htmlFor='firstName'>First Name</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-row'>
            <label className='label-bold' htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Number */}
          <div className='form-row'>
            <label className='label-bold' htmlFor='phonenumber'>Phone Number</label>
            <input
              type='text'
              id='phonenumber'
              name='phonenumber'
              value={formData.phonenumber}
              onChange={handleChange}
              required
              placeholder='###-####-#####'
            />
          </div>

          <div className='form-row'>
            {/* break input form ni */}
          </div>

          {/* Email Field */}
          <div className='form-row'>
            <label className='label-bold' htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-row'>
            {/* break input form ni */}
          </div>

          {/* Radio Button*/}
          <div className='form-row'>
              <legend className='label-bold'>Best time to call</legend>
              <div className='radio-group'>
                <label>
                  <input
                    type='radio'
                    name='besttimetocall'
                    value='morning'
                    checked={formData.besttimetocall === 'morning'}
                    onChange={handleChange}
                    required
                  />
                  <label className='radiobtn-lbel'>Morning</label>
                </label>

                <label>
                  <input
                    type='radio'
                    name='besttimetocall'
                    value='afternoon'
                    checked={formData.besttimetocall === 'afternoon'}
                    onChange={handleChange}
                    required
                  />
                  <label className='radiobtn-lbel' >Afternoon</label>
                </label>
              </div>
            
          </div>

          <div className='form-row'>
            {/* break input form ni */}
          </div>

          {/* Submit Button */}
          <div className='form-row'>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Activityone;
