import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const UpdateInfo = () => {
    const auth = localStorage.getItem('user');

    const [name1, setpatientName] = React.useState('');
    const [contact, setContact] = React.useState('');
    const [age, setAge] = React.useState('');
    const [name, setName] = React.useState('');
    const [specialization, setSpecialization] = React.useState('');
    const [doctor_available_start_time, setStartTime] = React.useState('');

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getDoctorsDetails();
        getPatientDetails();
        window.scrollTo(0, 0)
    }, [])

    const getDoctorsDetails = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:3000/Doctor/Find/${params.id}`);
        result = await result.json();
        setName(result.name);
        setSpecialization(result.specialization);
        setStartTime(result.doctor_available_start_time);
    }


    const getPatientDetails = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:3000/Patient/Find/${JSON.parse(auth)._id}`);
        result = await result.json();
        setpatientName(result.name);
        setContact(result.contact);
        setAge(result.age);
    }

    const Add_Appointment = async () => {
        console.warn(name1, contact, age, name, specialization, doctor_available_start_time)
        let result = await fetch("http://localhost:3000/Appointment/appointment", {
            method: 'post',
            body: JSON.stringify({ name1, contact, age, name, specialization, doctor_available_start_time }),
            headers: {
                'Content-Type': 'Application/json'
            }
        });
        result = await result.json();
        // console.warn(result);
        // localStorage.setItem("user", JSON.stringify(result.result))
        localStorage.setItem("token", JSON.stringify(result.auth))
        localStorage.clear();
        navigate('/login')

    }

    return (
        <div className='product'>
            <h1>Update Patient Info</h1>

            <input type="text" placeholder='Enter Patient name' className='inputBox'
                value={name1} onChange={(e) => { setpatientName(e.target.value) }}
            />

            <input type="text" placeholder='Enter contact Number' className='inputBox'
                value={contact} onChange={(e) => { setContact(e.target.value) }}
            />

            <input type="text" placeholder='Enter Your Age' className='inputBox'
                value={age} onChange={(e) => { setAge(e.target.value) }}
            />

            <input type="text" placeholder='Enter Doctor Name' className='inputBox'
                value={name} onChange={(e) => { setName(e.target.value) }}
            />

            <input type="text" placeholder='Enter Specialization' className='inputBox'
                value={specialization} onChange={(e) => { setSpecialization(e.target.value) }}
            />

            <input type="text" placeholder='Enter StartTime' className='inputBox'
                value={doctor_available_start_time} onChange={(e) => { setStartTime(e.target.value) }}
            />


            <button onClick={Add_Appointment} className='appButton'>Confrom Appointment</button>
        </div>
    )
}

export default UpdateInfo;