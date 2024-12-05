import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPatient from './components/AddPatient';
import AddClinicals from "./components/AddClinicals";
import Home from "./components/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addPatient" element={<AddPatient />} />
            <Route path="/addClinicals/:patientId" element={<AddClinicals />} />
          </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={1000} position="top-center" hideProgressBar={true}/>
    </div>
  );
}

export default App;
