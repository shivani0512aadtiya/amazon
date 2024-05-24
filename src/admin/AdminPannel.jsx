import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPannel = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container my-5">
        <div className="btn-panel d-flex flex-column flex-md-row flex-md-wrap justify-content-center  gap-3 fw-bold">
          <button
            type="button"
            className="btn  btn-lg w-100 mb-3 mb-md-0 btn-buy-now"
            onClick={() => navigate('/add-product')}
          >
            Add Product
          </button>
          <button
            type="button"
            className="btn  btn-lg w-100 mb-3 mb-md-0 btn-buy-now"
            onClick={() => navigate('/all-product')}
          >
            All Product
          </button>
          <button
            type="button"
            className="btn  btn-lg w-100 mb-3 mb-md-0 btn-buy-now"
            onClick={() => navigate('/Cards-Details')}
          >
            Card Details
          </button>
          <button
            type="button"
            className="btn  btn-lg w-100 mb-3 mb-md-0 btn-buy-now"
            onClick={() => navigate('/User-Details')}
          >
            User Details
          </button>
          <button
            type="button"
            className="btn  btn-lg w-100 mb-3 mb-md-0 btn-buy-now"
            onClick={() => navigate('/User-Create')}
          >
            User Create
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminPannel;
