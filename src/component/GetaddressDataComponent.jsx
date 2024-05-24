
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GetaddressDataComponent = () => {
    const [addresses, setAddresses] = useState([]);
    const navigate = useNavigate('')

    const navigation =() =>{
        navigate('/cardDetailsc')
    }
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchAddress(token);
        }
    }, []);

    const fetchAddress = (token) => {
        axios.get("https://ecommerce-g1tg.onrender.com/getaddress",{
        
        
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
          
        )
        .then((res) => {
            console.log("API Response:", res)
            setAddresses(res.data.address);
            console.log("Address data:", res.data.address);
        })
        .catch((error) => {
            console.log("Error fetching address:", error);
        });
    };

    // const data = {
    //     name: addresses.name,
    //     mobile: addresses.mobile,
    //     pinCode:addresses.pinCode,
    //     flatNo:addresses.flatNo,
    //     area:addresses.area,
    //     landmark:addresses.landmark,
    //     town:addresses.town,
    //     State:addresses.State,
    //     country:addresses.country,
    //     addressType:addresses.addressType

    // };

    return (
        <div className="container">
            <h2 className="mt-5">Your Address</h2>
            {addresses.length > 0 ? (
                <table className="table table-bordered mt-3">
                    <thead>
                        <tr>
                        <th>Name</th>
                            <th>mobile</th>
                            <th>pinCode</th>
                            <th>flatNo</th>
                            <th>area</th>
                            <th>landmark</th>
                            <th>town</th>
                            <th>State</th>
                            <th>country</th>
                            <th>addressType</th>
                        </tr>
                    </thead>
                    <tbody>
                    {addresses.map((address, index) => (
                        <tr key={index}>
                            <td>{address.Name}</td>
                            <td>{address.mobile}</td>
                            <td>{address.pinCode}</td>
                            <td>{address.flatNo}</td>
                            <td>{address.area}</td>
                            <td>{address.landmark}</td>
                            <td>{address.town}</td>
                            <td>{address.State}</td>
                            <td>{address.country}</td>
                            <td>{address.addressType}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                  ) : (
                    <p>Loading addresses...</p>
                )}
          
        </div>
    );
};

export default GetaddressDataComponent;
