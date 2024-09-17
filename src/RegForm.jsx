import React, { useState } from 'react';

function RegForm() {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    address: '',
    state: '',
    country: '',
    city: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Registration Successful');
    // Reset form after submission
    setFormData({
      username: '',
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      phone: '',
      gender: '',
      address: '',
      state: '',
      country: '',
      city: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>
      
      {/* User Information */}
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>Middle Name:</label>
        <input
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* Contact Information */}
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === 'male'}
          onChange={handleInputChange}
          required
        /> Male
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === 'female'}
          onChange={handleInputChange}
          required
        /> Female
      </div>

      {/* Address Information */}
      <div>
        <label>Address:</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>

      <div>
        <label>State:</label>
        <select name="state" value={formData.state} onChange={handleInputChange} required>
          <option value="">Select State</option>
          <option value="state1">State 1</option>
          <option value="state2">State 2</option>
        </select>
      </div>

      <div>
        <label>Country:</label>
        <select name="country" value={formData.country} onChange={handleInputChange} required>
          <option value="">Select Country</option>
          <option value="country1">Country 1</option>
          <option value="country2">Country 2</option>
        </select>
      </div>

      <div>
        <label>City:</label>
        <select name="city" value={formData.city} onChange={handleInputChange} required>
          <option value="">Select City</option>
          <option value="city1">City 1</option>
          <option value="city2">City 2</option>
        </select>
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegForm;
