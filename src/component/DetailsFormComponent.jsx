import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DetailsFormComponent = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const [isChecked, setIsChecked] = useState(false);
  const [name, nameChange] = useState("");
  const [mobile, mobileChange] = useState("");
  const [pinCode, pinCodeChange] = useState("");
  const [flatNo, flatNoChange] = useState("");
  const [area, areaChange] = useState("");
  const [landmark, landmarkChange] = useState("");
  const [town, townChange] = useState("");
  const [state, stateChange] = useState("");
  const [country, countryChange] = useState("IN");
  const [addressType, addressTypeChange] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Full Name is required";
    if (!mobile) newErrors.mobile = "Mobile Number is required";
    else if (!/^\d{10}$/.test(mobile)) newErrors.mobile = "Mobile Number must be exactly 10 digits";
    if (!pinCode) newErrors.pinCode = "PIN Code is required";
    if (!flatNo) newErrors.flatNo = "Flat/House No is required";
    if (!area) newErrors.area = "Area is required";
    if (!landmark) newErrors.landmark = "Landmark is required";
    if (!town) newErrors.town = "Town/City is required";
    if (!state) newErrors.state = "State is required";
    if (!country) newErrors.country = "Country is required";
    if (!addressType) newErrors.addressType = "Address Type is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const regobj = {
        name: name,
        number: mobile,
        pincode: pinCode,
        house: flatNo,
        area: area,
        landmark: landmark,
        city: town,
        state: state,
        country: country,
        addressType: addressType,
        defaultAddress: isChecked,
      };

      try {
        const response = await axios.post(
          "https://amazon-e5nh.onrender.com/address",
          regobj
        );
        if (response) {
          console.log("response is:", JSON.stringify(response));
          navigate("/card-dedit"); // Navigate to the next page upon successful submission
        }
      } catch (error) {
        console.log("something is wrong ", error);
      }
    }
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const countries = [
    { name: "India", code: "IN" },
    { name: "United States", code: "US" },
    { name: "Algeria", code: "DZ" },
    { name: "Afghanistan", code: "AF" },
    { name: "Australia", code: "AU" },
    { name: "Afghanistan", code: "AF" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "American Samoa", code: "AS" },
    { name: "Andorra", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Anguilla", code: "AI" },
    { name: "Antarctica", code: "AQ" },
    { name: "Antigua and Barbuda", code: "AG" },
  ];

  const states = [
    { name: "Andhra Pradesh", code: "AP" },
    { name: "Arunachal Pradesh", code: "AR" },
    { name: "Assam", code: "AS" },
    { name: "Bihar", code: "BR" },
    { name: "Chhattisgarh", code: "CG" },
    { name: "Goa", code: "GA" },
    { name: "Gujarat", code: "GJ" },
    { name: "Haryana", code: "HR" },
    { name: "Himachal Pradesh", code: "HP" },
    { name: "Jharkhand", code: "JH" },
    { name: "Karnataka", code: "KA" },
    { name: "Kerala", code: "KL" },
    { name: "Madhya Pradesh", code: "MP" },
    { name: "Maharashtra", code: "MH" },
    { name: "Manipur", code: "MN" },
    { name: "Meghalaya", code: "ML" },
    { name: "Mizoram", code: "MZ" },
    { name: "Nagaland", code: "NL" },
    { name: "Odisha", code: "OR" },
    { name: "Punjab", code: "PB" },
    { name: "Rajasthan", code: "RJ" },
    { name: "Sikkim", code: "SK" },
    { name: "Tamil Nadu", code: "TN" },
    { name: "Telangana", code: "TG" },
    { name: "Tripura", code: "TR" },
    { name: "Uttar Pradesh", code: "UP" },
    { name: "Uttarakhand", code: "UK" },
    { name: "West Bengal", code: "WB" },
    { name: "Andaman and Nicobar Islands", code: "AN" },
    { name: "Chandigarh", code: "CH" },
    { name: "Lakshadweep", code: "LD" },
    { name: "Delhi", code: "DL" },
    { name: "Puducherry", code: "PY" },
    { name: "Ladakh", code: "LA" },
    { name: "Jammu and Kashmir", code: "JK" },
  ];

  useEffect(() => {
    setIsFormValid(validate());
  }, [name, mobile, pinCode, flatNo, area, landmark, town, state, country, addressType]);

  const handleMobileChange = (e) => {
    const value = e.target.value;
    if (value.length <= 10 && /^\d*$/.test(value)) {
      mobileChange(value);
    }
  };

  const addresses = [
    { name: "Home (7 am - 9 pm delivery)" },
    { name: "Office/Commercial (10 AM - 6 PM delivery)" },
  ];

  return (
    <div className="container bg-light">
      <div className="row">
        <div className="col-12 py-2 px-4 px-md-12">
          <h1 className="font-weight-medium text-2xl">Add a new address</h1>
          <form onSubmit={handlesubmit}>
            <div className="dropdown py-6">
              <select
                className="form-select py-3 px-2 w-100 rounded"
                name="country"
                value={country}
                onChange={(e) => countryChange(e.target.value)}
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
              {errors.country && (
                <small className="text-danger">{errors.country}</small>
              )}
            </div>
            <div className="form-group full-name-input">
              <label className="font-weight-semibold ml-1" htmlFor="firstName">
                Full Name:
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your Full Name"
                className="form-control py-3 px-2 border border-dark rounded"
                value={name}
                onChange={(e) => nameChange(e.target.value)}
              />
              {errors.name && (
                <small className="text-danger">{errors.name}</small>
              )}
            </div>
            <div className="form-group mobile-number-input mt-2">
              <label
                className="font-weight-semibold ml-1"
                htmlFor="mobileNumber"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobileNumber"
                placeholder="10-digit mobile number without prefixes"
                className="form-control py-3 px-2 border border-dark rounded"
                value={mobile}
                
                onChange={handleMobileChange}

              />
              {errors.mobile && (
                <small className="text-danger">{errors.mobile}</small>
              )}
            </div>
            <div className="form-group pin-code-input mt-2">
              <label className="font-weight-semibold ml-1" htmlFor="pinCode">
                PIN Code
              </label>
              <input
                type="number"
                name="pinCode"
                maxLength="6"
                placeholder="6 digits [0-9] PIN Code"
                className="form-control py-3 px-2 border border-dark rounded"
                value={pinCode}
                onChange={(e) => pinCodeChange(e.target.value)}
              />
              {errors.pinCode && (
                <small className="text-danger">{errors.pinCode}</small>
              )}
            </div>
            <div className="form-group address-input mt-2">
              <label htmlFor="flatNo" className="font-weight-semibold ml-1">
                Flat, House no., Building, Company, Apartment
              </label>
              <input
                type="text"
                name="flatNo"
                className="form-control py-3 px-2 border border-dark rounded"
                value={flatNo}
                onChange={(e) => flatNoChange(e.target.value)}
              />
              {errors.flatNo && (
                <small className="text-danger">{errors.flatNo}</small>
              )}
            </div>
            <div className="form-group address-input mt-2">
              <label htmlFor="area" className="font-weight-semibold ml-1">
                Area, Street, Sector, Village
              </label>
              <input
                type="text"
                name="area"
                className="form-control py-3 px-2 border border-dark rounded"
                value={area}
                onChange={(e) => areaChange(e.target.value)}
              />
              {errors.area && (
                <small className="text-danger">{errors.area}</small>
              )}
            </div>
            <div className="form-group address-input mt-2">
              <label htmlFor="landmark" className="font-weight-semibold ml-1">
                Landmark
              </label>
              <input
                type="text"
                name="landmark"
                placeholder="E.g. near apollo hospital"
                className="form-control py-3 px-2 border border-dark rounded"
                value={landmark}
                onChange={(e) => landmarkChange(e.target.value)}
              />
              {errors.landmark && (
                <small className="text-danger">{errors.landmark}</small>
              )}
            </div>
            <div className="form-group address-input mt-2">
              <label htmlFor="town" className="font-weight-semibold ml-1">
                Town/City
              </label>
              <input
                type="text"
                name="town"
                className="form-control py-3 px-2 border border-dark rounded"
                value={town}
                onChange={(e) => townChange(e.target.value)}
              />
              {errors.town && (
                <small className="text-danger">{errors.town}</small>
              )}
            </div>
            <div className="dropdown py-6">
              <select
                className="form-select py-3 px-2 w-100 rounded"
                name="state"
                value={state}
                onChange={(e) => stateChange(e.target.value)}
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.code} value={state.code}>
                    {state.name}
                  </option>
                ))}
              </select>
              {errors.state && (
                <small className="text-danger">{errors.state}</small>
              )}
            </div>
            <div className="dropdown py-6">
              <select
                className="form-select py-3 px-2 w-100 rounded"
                name="addressType"
                value={addressType}
                onChange={(e) => addressTypeChange(e.target.value)}
              >
                <option value="">Address Type</option>
                {addresses.map((type) => (
                  <option key={type.name} value={type.name}>
                    {type.name}
                  </option>
                ))}
              </select>
              {errors.addressType && (
                <small className="text-danger">{errors.addressType}</small>
              )}
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="defaultAddress"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="defaultAddress">
                Make this my default address
              </label>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-warning w-100 py-3 rounded"
                 onClick={() => {
                  navigate("/card-debit");
                }}
                disabled={!isFormValid}
              
              >
                Use this address
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DetailsFormComponent;
