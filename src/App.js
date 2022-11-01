import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent'
import Login from './components/Login'
 
import Appointment from './components/appointment';
import DoctorsList from './components/doctors_list';
import UpdatePatient from './components/UpdatePatientsInfo';
import AppintmentList from './components/view_appoinment';
import ViewAppintmentList from './components/view';
import Admin_Login from './components/Admin_login';
import { useEffect } from 'react'
function App() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <div

      style={{
        backgroundImage: "url(/Logo.jpg)", backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }} className="App">
      <BrowserRouter>

        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<DoctorsList />} />
            <Route path="/add" element={<Appointment />} />
            <Route path="/view/:id" element={<AppintmentList />} />
            <Route path="/view" element={<ViewAppintmentList />} />
            <Route path="/update/:id" element={<UpdatePatient />} />
            <Route path="/logout" element={<h1> Logout Component</h1>} />
             
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Admin" element={<Admin_Login />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
