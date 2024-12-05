import '../App.css';
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import { AppContext } from '../context/AppContext';

const Home = () => {
  const { basename } = useContext(AppContext);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
      const fetchPatients = async () => {
        try {
          const response = await axios.get('http://192.168.0.241:8080/api/patients');
          setPatients(response.data);
        } catch (error) {
            console.error('Error fetching patients: ', error);
        }
      };
      fetchPatients();
  }, [basename]);

  return (
      <div>
          <h1>Patients</h1>
          <table>
              <thead>
              <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Age</th>
              </tr>
              </thead>
              <tbody>
              {patients.map(patient => (
                  <tr key={patient.id}>
                      <td>{patient.id}</td>
                      <td>{patient.firstName}</td>
                      <td>{patient.lastName}</td>
                      <td>{patient.age}</td>
                  </tr>
              ))}
              </tbody>
          </table>
          <Link to="/addPatient">Add Patient</Link>
      </div>
  );
}

export default Home;
