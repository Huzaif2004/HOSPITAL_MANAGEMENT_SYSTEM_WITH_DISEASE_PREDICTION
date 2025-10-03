import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import AddNewDoctor from './components/AddNewDoctor';
import Doctors from './components/Doctors';
import AddNewAdmin from './components/AddNewAdmin';
import Login from './components/Login';
import Messages from './components/Messages';
import Patients from './components/Patients';
import Receptionists from './components/Receptionists';
import Laboratory from './components/Laboratory';
import { GoogleOAuthProvider } from '@react-oauth/google';
import DiabetesPredictor from './components/DiabetesPredictor';
import HeartDiseaseForm from './components/HeartDiseaseForm';
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

  return (

    <div className={`app ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>

   <Router>
    <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/doctor/addnew" element={<AddNewDoctor/>}/>
      <Route path="/doctors" element={<Doctors/>}/>
      <Route path="/admin/addnew" element={<AddNewAdmin/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/messages" element={<Messages/>}/>
      <Route path="/patients" element={<Patients/>}/>
      <Route path="/receptionists" element={<Receptionists/>}/>
      <Route path="/lab" element={<Laboratory/>}/>
      <Route path="/laboratory/diabetes" element={<DiabetesPredictor/>}/>
      <Route path="/laboratory/heart-disease" element={<HeartDiseaseForm/>}/>
    </Routes>
   </Router>
    </div>
  );
}

export default App;
