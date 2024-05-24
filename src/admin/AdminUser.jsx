import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminUser = () => {
    const [userDetails, setUserDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const navigation = () => {
        navigate('/userDetails');
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchCardDetails(token);
        } else {
            console.log("No token found in localStorage");
            setLoading(false);
        }
    }, []);

    const fetchCardDetails = (token) => {
        axios.get("https://ecommerce-g1tg.onrender.com/getuser", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log("API Response:", res);
            if (res.data) {
                setUserDetails(res.data);
                console.log("cardDetails data:", res.data);
            } else {
                console.log("Response data is missing cardDetails:", res.data);
                setUserDetails([]);
            }
            setLoading(false);
        })
        .catch((error) => {
            console.log("Error fetching cardDetails:", error);
            setLoading(false);
        });
    };

    return (
        <div className="container">
            <h2 className="mt-5">Your Address</h2>
            {loading ? (
                <p>Loading card details...</p>
            ) : (
                <table className="table table-bordered mt-3">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>user passwoard</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {userDetails.length > 0 ? (
                            userDetails.map((card, index) => (
                                <tr key={index}>
                                    <td>{card.username}</td>
                                    <td>{card.email}</td>
                                    <td>{card.password}</td>
                                    
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">No User details found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AdminUser;
