// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const FormDetails = () => {
//     const [cardDetails, setCardDetails] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     const navigation = () => {
//         navigate('/cardDetailsc');
//     };

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             fetchCardDetails(token);
//         } else {
//             console.log("No token found in localStorage");
//             setLoading(false);
//         }
//     }, []);

//     useEffect(() => {
//         const refreshTimer = setTimeout(() => {
//           window.location.reload();
//         }, 3000);
    
//         return () => clearTimeout(refreshTimer); // Cleanup the timeout on component unmount
//       }, []);

//     const fetchCardDetails = (token) => {
//         axios.get("https://ecommerce-g1tg.onrender.com/getcard", {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         .then((res) => {
//             console.log("API Response:", res);
//             if (res.data) {
//                 setCardDetails(res.data);
//                 console.log("cardDetails data:", res.data);
//             } else {
//                 console.log("Response data is missing cardDetails:", res.data);
//                 setCardDetails([]);
//             }
//             setLoading(false);
//         })
//         .catch((error) => {
//             console.log("Error fetching cardDetails:", error);
//             setLoading(false);
//         });
//     };

//     return (
//         <div className="container">
//             <h2 className="mt-5">Your Address</h2>
//             {loading ? (
//                 <p>Loading card details...</p>
//             ) : (
//                 <table className="table table-bordered mt-3">
//                     <thead>
//                         <tr>
//                             <th>Card Number</th>
//                             <th>Card Holder Name</th>
//                             <th>Expiry Month</th>
//                             <th>Expiry Year</th>
//                             <th>CVV</th>
//                             <th>Card Type</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {cardDetails.length > 0 ? (
//                             cardDetails.map((card, index) => (
//                                 <tr key={index}>
//                                     <td>{card.cardNumber}</td>
//                                     <td>{card.cardHolderName}</td>
//                                     <td>{card.expiryMonth}</td>
//                                     <td>{card.expiryYear}</td>
//                                     <td>{card.cvv}</td>
//                                     <td>{card.cardType}</td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan="6">No card details found.</td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default FormDetails;



import axios from 'axios';
import React, { useState, useEffect } from 'react';

const FormDetails = () => {
    const [cardDetails, setCardDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchCardDetails(token);
            const intervalId = setInterval(() => fetchCardDetails(token), 3000); // Poll every 3 seconds
            return () => clearInterval(intervalId); // Cleanup interval on component unmount
        } else {
            console.log("No token found in localStorage");
            setLoading(false);
        }
    }, []);

    const fetchCardDetails = (token) => {
        axios.get("https://ecommerce-g1tg.onrender.com/getcard", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log("API Response:", res);
            if (res.data) {
                setCardDetails(res.data);
                console.log("cardDetails data:", res.data);
            } else {
                console.log("Response data is missing cardDetails:", res.data);
                setCardDetails([]);
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
                            <th>Card Number</th>
                            <th>Card Holder Name</th>
                            <th>Expiry Month</th>
                            <th>Expiry Year</th>
                            <th>CVV</th>
                            <th>Card Type</th>
                            <th>Bank Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cardDetails.length > 0 ? (
                            cardDetails.map((card, index) => (
                                <tr key={index}>
                                    <td>{card.cardNumber}</td>
                                    <td>{card.cardHolderName}</td>
                                    <td>{card.expiryMonth}</td>
                                    <td>{card.expiryYear}</td>
                                    <td>{card.cvv}</td>
                                    <td>{card.cardType}</td>
                                    <td>{card.bankname}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">No card details found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default FormDetails;

