import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const UpdateInfo = () => {
    const auth = localStorage.getItem('user');
    const [name, setName] = React.useState('');
    const [contact, setContact] = React.useState('');
    const [age, setAge] = React.useState('');
    const [password, setPassword] = React.useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getPatientDetails();
    }, [])

    const getPatientDetails = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:3000/Patient/Find/${JSON.parse(auth)._id}`);
        result = await result.json();
        setName(result.name);
        setContact(result.contact);
        setAge(result.age);
        setPassword(result.password)
    }

    const UpdatePatient = async () => {
        console.warn(name, contact, age, password)
        let result = await fetch(`http://localhost:3000/Patient/Update/${JSON.parse(auth)._id}`, {
            method: 'Put',
            body: JSON.stringify({ name, contact, age, password }),
            headers: {
                'Content-Type': 'Application/json'
            }
        });
        result = await result.json();
        if (result) {
            navigate('/')
        }

    }

    return (
        <div className='product'>
            <h1>Update Patient Info</h1>
            <input type="text" placeholder='Enter product name' className='inputBox'
                value={name} onChange={(e) => { setName(e.target.value) }}
            />

            <input type="text" placeholder='Enter contact Number' className='inputBox'
                value={contact} onChange={(e) => { setContact(e.target.value) }}
            />

            <input type="text" placeholder='Enter Your Age' className='inputBox'
                value={age} onChange={(e) => { setAge(e.target.value) }}
            />

            <input type="Password" placeholder='Enter password' className='inputBox'
                value={password} onChange={(e) => { setPassword(e.target.value) }}
            />


            <button onClick={UpdatePatient} className='appButton'>Update Patient Info</button>
        </div>
    )
}

export default UpdateInfo;