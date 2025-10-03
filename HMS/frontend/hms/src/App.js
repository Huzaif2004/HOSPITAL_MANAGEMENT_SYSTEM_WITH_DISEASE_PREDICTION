import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppointmentForm from './components/AppointmentForm';
import MessageForm from './components/MessageForm';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AboutUs from './Pages/AboutUs';
import Appointment from './Pages/Appointment';
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
  return (
    // <GoogleOAuthProvider clientId="591707316014-p189a7264gm7kt5550353fpr59gi4lfo.apps.googleusercontent.com">

    <div className="App">
      <Router>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/appointmentForm" element={<AppointmentForm/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
       
       </Routes>
       
       

      </Router>
    </div>
    // </GoogleOAuthProvider>
    
  );
}

export default App;
