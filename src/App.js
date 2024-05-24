import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CardComponent from ""
import CardComponent from "./component/CardComponent";
import CardDetailComponent from "./component/CardDetailComponent"
import DetailsFormComponent from "./component/DetailsFormComponent"
import DebitCreditForm from "./component/DeditCardForm";
import HomePageComponent from "./component/HomePageComponent";
import Slidercomponent from "./component/SliderComponent";

import GetaddressDataComponent from "./component/GetaddressDataComponent";
import Login from "../src/auth/Login.jsx";
import AddProducts from "./admin/AddProducts.jsx";
import AllProduct from "./admin/AllProduct.jsx";
import CustomerReviews from "./component/CustomerReviews.jsx";
import UserSign from "./auth/UserSign.jsx";
import RatingComponent from "./component/RatingComponent.jsx";
import CustomerRating from "./component/RatingComponent.jsx";
import StarRating from "./component/RatingComponent.jsx";
import AdminPannel from "./admin/AdminPannel.jsx";
import FormDetails from "./admin/Formdetails.jsx";
import AdminUser from "./admin/AdminUser.jsx";




function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePageComponent/>}/>
        <Route path="/card-details" element={<CardDetailComponent />}/>
        <Route path="card-form" element={<DetailsFormComponent/>}/>
        <Route path="admin" element={<Login/>} />
        <Route path="admin-pannel" element={<AdminPannel/>}/>
        <Route path="add-product" element={<AddProducts/>} />
        <Route path="add-all-product" element={<AllProduct/>}/>
        <Route path="all-product" element={<AllProduct/>}/>
        <Route path="card-debit" element={<DebitCreditForm/>}/>
        <Route path="Cards-Details" element={<FormDetails/>}/>
        <Route path="User-Details" element={<AdminUser/>}/>
        <Route path="User-Create" element={<UserSign/>}/>
        <Route path="home-page" element={<HomePageComponent/>}/>
    
        
       
    </Routes>
    
      
      
        
         
 
    </>
  );
}

export default App;
