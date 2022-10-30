import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const ViewAppionment_list = () => {
    const [appointments, setAppoinments] = useState([]);

    useEffect(() => {
        getViewAppointment();
    }, []);

    const getViewAppointment = async () => {
        let result = await fetch('http://localhost:3000/Appointment/find',{
            headers:{
                authorization:JSON.parse(localStorage.getItem('token'))
            }
        });
        result = await result.json();
        setAppoinments(result);
    }

    const deleteProduct = async (id) => {
        console.warn(id)
        let result = await fetch(`http://localhost:3000/Appointment/delete/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            getViewAppointment();
        }
        
    }

    const searchHandle = async (event)=>{
        let key = event.target.value;
        if(key){
            let result = await fetch(`http://localhost:3000/Appointment/search/${key}`);
            result = await result.json()
            if(result){
                setAppoinments(result)
            }
        }else{
            getViewAppointment();
        }
        
    }

    return (
        <div className="Appoinment-list">
            <h3>Appoinment List</h3>
            <input type="" className='search-product-box' placeholder='Search Doctors'
            onChange={searchHandle}
             />
            <ul>
                <li>S. No.</li>
                <li>Appointment Time</li>
                <li>Patient_name</li>
                <li>age</li>
                <li>Doctor_name</li>
                <li>specialization</li>
                <li>Available_start_time</li>
                <li>Patient_Contact</li>

            </ul>
            {
                appointments.length>0 ? appointments.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{index + 20}</li>
                        <li>{item.name1}</li>
                        <li>{item.age}</li>
                        <li>{item.name}</li>
                        <li>{item.specialization}</li>
                        <li>{item.doctor_available_start_time}</li>
                        <li>{item.contact}</li>
                        <li><button onClick={() => deleteProduct(item._id)}>Delete</button></li>
                        

                    </ul>
                )
                :<h1>No Result Found</h1>
            }
        </div>
    )
}

export default ViewAppionment_list;