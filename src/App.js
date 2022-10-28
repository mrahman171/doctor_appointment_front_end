import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent'
import Login from './components/Login'
import E_Appointment from './components/e_appointment';
import Appointment from './components/appointment';
import DoctorsList from './components/doctors_list';
import UpdatePatient from './components/UpdatePatientsInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Nav />
     <Routes>
       <Route element={<PrivateComponent />}>
       <Route path="/" element={<DoctorsList />} />
       <Route path="/add" element={<Appointment />} />
       <Route path="/update/:id" element={<UpdatePatient />} />
       <Route path="/logout" element={<h1> Logout Component</h1>} />
       <Route path="/e_appointment" element={<E_Appointment/>} />
       </Route>

       <Route path="/signup" element={<SignUp />} />
       <Route path="/login" element={<Login />} />

     </Routes>
     </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;
