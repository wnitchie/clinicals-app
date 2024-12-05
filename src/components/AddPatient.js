import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddPatient = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://192.168.0.241:8080/api/patients', {
        "firstName": firstName,
        "lastName": lastName,
        "age": age
      });
      toast('Patient added successfully');
    } catch (error) {
      console.error('Error adding patient: ', error);
      setMessage('Error adding patient');
    }
  };

  return (
    <div>
      <h1>Add Patient</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Patient</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddPatient;