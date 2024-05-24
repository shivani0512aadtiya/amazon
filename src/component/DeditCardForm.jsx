
// import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';

// const DebitCreditForm = () => {
//   const navigate = useNavigate();
//   const [errors, setErrors] = useState({});
//   const [isValid, setIsValid] = useState(false);
//   const [formData, setFormData] = useState({
//     cardNumber: "",
//     cardHolderName: "",
//     expiryMonth: "",
//     expiryYear: "",
//     cvv: "",
//     cardType: "",
//   });

//   const handleInputChange = (event) => {
//     const { id, value } = event.target;
//     setFormData({
//       ...formData,
//       [id]: value,
//     });
//   };

//   const validate = () => {
//     let errors = {};
//     let isValid = true;

//     if (!formData.cardNumber.match(/^\d{16}$/)) {
//       errors.cardNumber = "Card number must be 16 digits";
//       isValid = false;
//     }
//     if (!formData.cardHolderName.trim()) {
//       errors.cardHolderName = "Cardholder name is required";
//       isValid = false;
//     }
//     if (!formData.expiryMonth.match(/^(0[1-9]|1[0-2])$/)) {
//       errors.expiryMonth = "Expiry month must be in MM format";
//       isValid = false;
//     }
//     // if (!formData.expiryYear.match(/^\d{2}$/) || parseInt(formData.expiryYear) < new Date().getFullYear() % 100) {
//     //   errors.expiryYear = "Expiry year must be in YY format and not in the past";
//     //   isValid = false;
//     // }
//     if (!formData.cvv.match(/^\d{3}$/)) {
//       errors.cvv = "CVV must be 3 digits";
//       isValid = false;
//     }
//     if (!formData.cardType.trim()) {
//       errors.cardType = "Card type is required";
//       isValid = false;
//     }

//     setErrors(errors);
//     setIsValid(isValid);
//     return isValid;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (validate()) {
//       const payload = {
//         cardNumber: formData.cardNumber,
//         cardHolderName: formData.cardHolderName,
//         expiryMonth: formData.expiryMonth,
//         expiryYear: formData.expiryYear,
//         cvv: formData.cvv,
//         cardType: formData.cardType,
//       };
//       console.log("Submitting payload:", payload); // Log the payload

//       try {
//         const response = await fetch("https://ecommerce-g1tg.onrender.com/card", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(payload),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           console.error("Error response from server:", errorData); // Log server error response
//           throw new Error("Network response was not ok");
//         }

//         const data = await response.json();
//         console.log("Form submitted successfully", data);

//         // Clear form data
//         setFormData({
//           cardNumber: "",
//           cardHolderName: "",
//           expiryMonth: "",
//           expiryYear: "",
//           cvv: "",
//           cardType: "",
//         });
//         setErrors({});
//         setIsValid(false);
//         navigate('/home-page');
//       } catch (error) {
//         console.error("There was a problem with the submission:", error);
//       }
//     }
//   };

//   useEffect(() => {
//     validate(); // Re-validate the form every time formData changes
//   }, [formData]);

 

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-8 col-lg-6">
//           <div className="card">
//             <div className="card-header text-center">
//               <h3>Debit/Credit Card Information</h3>
//             </div>
//             <div className="card-body">
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <label htmlFor="cardNumber" className="form-label">Card Number</label>
//                   <input
//                     type="text"
//                     id="cardNumber"
//                     className="form-control"
//                     value={formData.cardNumber}
//                     onChange={handleInputChange}
//                     placeholder="Enter card number"
//                     required
//                   />
//                   {errors.cardNumber && <small className="text-danger">{errors.cardNumber}</small>}
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="cardHolderName" className="form-label">Cardholder Name</label>
//                   <input
//                     type="text"
//                     id="cardHolderName"
//                     className="form-control"
//                     value={formData.cardHolderName}
//                     onChange={handleInputChange}
//                     placeholder="Enter cardholder name"
//                     required
//                   />
//                   {errors.cardHolderName && <small className="text-danger">{errors.cardHolderName}</small>}
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="expiryMonth" className="form-label">Expiry Month</label>
//                   <input
//                     type="text"
//                     id="expiryMonth"
//                     className="form-control"
//                     value={formData.expiryMonth}
//                     onChange={handleInputChange}
//                     placeholder="MM"
//                     required
//                   />
//                   {errors.expiryMonth && <small className="text-danger">{errors.expiryMonth}</small>}
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="expiryYear" className="form-label">Expiry Year</label>
//                   <input
//                     type="text"
//                     id="expiryYear"
//                     className="form-control"
//                     value={formData.expiryYear}
//                     onChange={handleInputChange}
//                     placeholder="YY"
//                     required
//                   />
//                   {errors.expiryYear && <small className="text-danger">{errors.expiryYear}</small>}
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="cvv" className="form-label">CVV</label>
//                   <input
//                     type="text"
//                     id="cvv"
//                     className="form-control"
//                     value={formData.cvv}
//                     onChange={handleInputChange}
//                     placeholder="Enter CVV"
//                     required
//                   />
//                   {errors.cvv && <small className="text-danger">{errors.cvv}</small>}
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="cardType" className="form-label">Card Type</label>
//                     <input
//                       type="text"
//                       id="cardType"
//                       className="form-control"
//                       value={formData.cardType}
//                       onChange={handleInputChange}
//                       placeholder="Enter card type"
//                       required
//                     />
//                     {errors.cardType && <small className="text-danger">{errors.cardType}</small>}
//                 </div>
//                 <button type="submit" className="btn btn-primary w-100" disabled={!isValid}>
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DebitCreditForm;


import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

const DebitCreditForm = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [formData, setFormData] = useState({
    cardType: "",
    cardNumber: "",
    cardHolderName: "",
    bankName:"",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  // Changed to bankName
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // const handleSearchChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  const validate = () => {
    let errors = {};
    let isValid = true;

    if (!formData.cardNumber.match(/^\d{16}$/)) {
      errors.cardNumber = "Card number must be 16 digits";
      isValid = false;
    }
    if (!formData.cardHolderName.trim()) {
      errors.cardHolderName = "Cardholder name is required";
      isValid = false;
    }
    // if (!formData.expiryMonth.match(/^(0[1-9]|1[0-2])$/)) {
    //   errors.expiryMonth = "Expiry month must be in MM format";
    //   isValid = false;
    // }
    // if (!formData.expiryYear.match(/^\d{2}$/)) {
    //   errors.expiryYear = "Expiry year must be in YY format";
    //   isValid = false;
    // }
    if (!formData.cvv.match(/^\d{3}$/)) {
      errors.cvv = "CVV must be 3 digits";
      isValid = false;
    }
    if (!formData.cardType.trim()) {
      errors.cardType = "Card type is required";
      isValid = false;
    }
    if (!formData.bankName.trim()) {
      errors.bankName = "Bank name is required";
      isValid = false;
    }

    setErrors(errors);
    setIsValid(isValid);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      const payload = {
        cardType: formData.cardType,
        cardNumber: formData.cardNumber,
        cardHolderName: formData.cardHolderName,
        bankname: formData.bankName,
        expiryMonth: formData.expiryMonth,
        expiryYear: formData.expiryYear,
        cvv: formData.cvv,
        
       
      };
      console.log("Submitting payload:", payload); // Log the payload

      try {
        const response = await fetch("https://ecommerce-g1tg.onrender.com/card", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
console.log(response);
        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error response from server:", errorData); // Log server error response
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Form submitted successfully", data);

        // Clear form data
        setFormData({
          cardType: "",
          cardNumber: "",
          bankName: "",
          cardHolderName: "",
          expiryMonth: "",
          expiryYear: "",
          cvv: "",
       
         
        });
        setErrors({});
        setIsValid(false);
        navigate('/home-page');
      } catch (error) {
        console.error("There was a problem with the submission:", error);
      }
    }
  };

  useEffect(() => {
    validate(); // Re-validate the form every time formData changes
  }, [formData]);

  // List of bank options for the dropdown
  const bankOptions = [
    "State Bank of India",
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Kotak Mahindra Bank",
    "IndusInd Bank",
    "Yes Bank",
    "Punjab National Bank",
    "Bank of Baroda",
    "Union Bank of India",
    "Canara Bank",
    "Bank of India",
    "Central Bank of India",
    "Indian Bank",
    "IDFC First Bank",
    "RBL Bank",
    "UCO Bank",
    "IDBI Bank",
    "Federal Bank",
    "South Indian Bank",
    "Karur Vysya Bank",
    "Bandhan Bank",
    "Punjab & Sind Bank",
    "Dhanlaxmi Bank",
    "City Union Bank",
    "Jammu & Kashmir Bank",
    "Karnataka Bank",
    "Lakshmi Vilas Bank",
    "Saraswat Bank",
    "Tamilnad Mercantile Bank",
    "Nainital Bank"
  ];

  // const filteredOptions = bankOptions.filter(option =>
  //   option.toLowerCase().includes(searchTerm.toLowerCase())
  // );
 
  useEffect(() => {
    const filtered = bankOptions.filter(option =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
    setDropdownOpen(!!searchTerm); // Set dropdownOpen to true if search term is not empty
  }, [searchTerm]);

  useEffect(() => {
    validate();
  }, [formData]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log("Search Term:", event.target.value);
  };

  const handleBankSelect = (event) => {
    setFormData({
      ...formData,
      bankName: event.target.value,
    });
    setDropdownOpen(false); // Close dropdown when bank is selected
    inputRef.current?.focus(); // Use optional chaining to safely access focus() method
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card">
            <div className="card-header text-center">
              <h3>Debit/Credit Card Information</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">Card Number</label>
                  <input
                    type="number"
                    id="cardNumber"
                    className="form-control"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="Enter card number"
                    required
                  />
                  {errors.cardNumber && <small className="text-danger">{errors.cardNumber}</small>}
                </div>
                <div className="mb-3">
                  <label htmlFor="cardHolderName" className="form-label">Cardholder Name</label>
                  <input
                    type="text"
                    id="cardHolderName"
                    className="form-control"
                    value={formData.cardHolderName}
                    onChange={handleInputChange}
                    placeholder="Enter cardholder name"
                    required
                  />
                  {errors.cardHolderName && <small className="text-danger">{errors.cardHolderName}</small>}
                </div>
                <div className="mb-3">
                  <label htmlFor="expiryMonth" className="form-label">Expiry Month</label>
                  <input
                    type="text"
                    id="expiryMonth"
                    className="form-control"
                    value={formData.expiryMonth}
                    onChange={handleInputChange}
                    placeholder="MM"
                    required
                  />
                  {errors.expiryMonth && <small className="text-danger">{errors.expiryMonth}</small>}
                </div>
                <div className="mb-3">
                  <label htmlFor="expiryYear" className="form-label">Expiry Year</label>
                  <input
                    type="text"
                    id="expiryYear"
                    className="form-control"
                    value={formData.expiryYear}
                    onChange={handleInputChange}
                    placeholder="YY"
                    required
                  />
                  {errors.expiryYear && <small className="text-danger">{errors.expiryYear}</small>}
                </div>
                <div className="mb-3">
                  <label htmlFor="cvv" className="form-label">CVV</label>
                  <input
                    type="number"
                    id="cvv"
                    className="form-control"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="Enter CVV"
                    required
                  />
                  {errors.cvv && <small className="text-danger">{errors.cvv}</small>}
                </div>
                <div className="mb-3">
                  <label htmlFor="cardType" className="form-label">Card Type</label>
                  <input
                    type="text"
                    id="cardType"
                    className="form-control"
                    value={formData.cardType}
                    onChange={handleInputChange}
                    placeholder="Enter card type"
                    required
                  />
                  {errors.cardType && <small className="text-danger">{errors.cardType}</small>}
                </div>
                <div className="mb-3">
                  <label htmlFor="search" className="form-label">Search Bank</label>
                  <input
                    type="text"
                    id="search"
                    className="form-control"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search for bank"
                  />
                  <select
                    id="bankName"
                    className="form-control mt-2"
                    value={formData.bankName}
                    onChange={handleBankSelect} // Update selected bank name
                    size={dropdownOpen ? filteredOptions.length + 1 : 1} // Expand dropdown if search term is not empty
                    required
                  >
                    <option value="">Select a bank</option>
                    {filteredOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.bankName && <small className="text-danger">{errors.bankName}</small>}
                </div>
                <button type="submit" className="btn btn-primary w-100" disabled={!isValid}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebitCreditForm;
