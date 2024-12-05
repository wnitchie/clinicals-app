import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPatient from './components/AddPatient';
import AddClinicals from "./components/AddClinicals";
import Home from "./components/Home";

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
    </div>
  );
}

export default App;
