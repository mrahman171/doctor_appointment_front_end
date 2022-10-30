import React from 'react';
import logo from '../images/Logo.jpg'
import {
    Link, useNavigate
} from 'react-router-dom';
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div>
            <img
            alt='logo'
            className='logo'
             src={logo} />
            {
                auth ?

                    <ul className="nav-ul">
                        <li><Link to="/">Doctors</Link></li>
                        <li><Link to="/add">Appointment</Link></li>
                         
                        <li><Link to="/view">View Appointment</Link></li>
                        <li><Link to="/update/:id"> Update Patient Info</Link></li>
                        <li><Link to="/e_appointment">Emergency Appointment</Link></li>
                        <li> <Link onClick={logout} to="/signup">Logout ({ JSON.parse(auth).name})</Link></li>
                    </ul>
                    :
                    <ul className="nav-ul nav-right">
                        <li> <Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
            }


        </div>
    )
}

export default Nav;