import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Doctors_list = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        getDoctors();
    }, []);

    const getDoctors = async () => {
        let result = await fetch('http://localhost:3000/Doctor/find',{
            headers:{
                authorization:JSON.parse(localStorage.getItem('token'))
            }
        });
        result = await result.json();
        setDoctors(result);
    }

    // const deleteProduct = async (id) => {
    //     console.warn(id)
    //     let result = await fetch(`http://localhost:5000/product/${id}`, {
    //         method: "Delete"
    //     });
    //     result = await result.json();
    //     if (result) {
    //         getProducts();
    //     }
    // }

    const searchHandle = async (event)=>{
        let key = event.target.value;
        if(key){
            let result = await fetch(`http://localhost:3000/Doctor/search/${key}`);
            result = await result.json()
            if(result){
                setDoctors(result)
            }
        }else{
            getDoctors();
        }
        
    }

    return (
        <div className="product-list">
            <h3>Doctors List</h3>
            <input type="" className='search-product-box' placeholder='Search Doctors'
            onChange={searchHandle}
             />
            <ul>
                <li>S. No.</li>
                <li>Name</li>
                <li>specialization</li>
                <li>Available_start_time</li>
                <li>End_time</li>
                <li>Contact</li>

            </ul>
            {
                doctors.length>0 ? doctors.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.specialization}</li>
                        <li>{item.doctor_available_start_time}</li>
                        <li>{item.doctor_available_end_time}</li>
                        <li>{item.contact}</li>

                        

                    </ul>
                )
                :<h1>No Result Found</h1>
            }
        </div>
    )
}

export default Doctors_list;