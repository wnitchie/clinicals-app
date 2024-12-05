import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import { toast } from 'react-toastify';

const PatientDetails = () => {
  const { patientId } = useParams();
  const [patient, setPatient] = useState(null);
  const [componentName, setComponentName] = useState('');
  const [componentValue, setComponentValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://192.168.0.241:8080/api/clinicaldata/clinicals', {
        "patientId": patientId,
        "componentName": componentName,
        "componentValue": componentValue
      });

      toast('Component added successfully');
    } catch (error) {
      toast('Error adding component');
    }
  };

  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const response = await axios.get(`http://192.168.0.241:8080/api/patients/${patientId}`);
        setPatient(response.data);
      } catch (error) {
        console.error('Error fetching patient details: ', error);
      }
    };

    fetchPatientDetails();

  }, [patientId]);

  if (!patient) {
    return <div>Loading...</div>;
  }


  return (
      <div>
        <h1>Add Clinical Data</h1>
        <h2>{patient.firstName} {patient.lastName}</h2>
        <p>Age: {patient.age}</p>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Component Name:</label>
            <input
                type="text"
                value={componentName}
                onChange={(e) => setComponentName(e.target.value)}
                required
            />
          </div>
          <div>
            <label>Component Value:</label>
            <input
                type="text"
                value={componentValue}
                onChange={(e) => setComponentValue(e.target.value)}
                required
            />
          </div>
          <button type="submit">Add Component</button>
        </form>
        <Link to="/">Back to Home</Link>
      </div>
  );
};

export default PatientDetails;
