
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const CardDetailComponent = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null); 
  const [error, setError] = useState(null);
  const [finalPrice, setFinalPrice] = useState(null); 
  const [savings, setSavings] = useState(null); 
  const [minutes, setMinutes] = useState(15); // Set initial time in minutes
  const [seconds, setSeconds] = useState(0);  // Set initial time in seconds
  const [isExpired, setIsExpired] = useState(false);
   
  const { state } = useLocation();
  const { id } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`https://ecommerce-g1tg.onrender.com/getoneproduct/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
        setError(null);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch product data. Please try again later.');
      }
    };

    fetchData();
  }, [_id, id]);

  useEffect(() => {
    if (data && data.price && data.discount && data.discount !== 0) {
      const discountAmount = (data.price * data.discount) / 100; 
      const finalPrice = data.price - discountAmount; 
      const savings = discountAmount; 
      
      setFinalPrice(Math.round(finalPrice));  
      setSavings(Math.round(savings));        
    }
  }, [data]);

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      setIsExpired(true); // Set expired state when timer ends
      return;
    }

    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, [minutes, seconds]);



  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container">

<div className="d-flex justify-content-between">
  <div className="offer-badge fw-bold">{data.discount}%</div>
  <div className="center-image-card mt-5">
    {data.image.url && <img src={data.image.url} width="100%" className='product-image' alt="Product" />}
  </div>
  <div className=''>
    <div className="love-icon icon-container">
      <img className="" src="img/love.png" alt="Love icon" />
    </div>
    <div className="share-icon mt-2 icon-container">
      <img className="" src="img/share.png" alt="Share icon" />
    </div>
  </div>
</div>


        <div className="px-0 font-weight-bold text-black mt-2">
          <div className="product-title">{data.description}</div>
        </div>

        <div className="px-0 product-price">
          <div className="buyingPrice font-weight-bold">
            <span className="symbol">&#8377;</span>
            <span className="price fw-bold ">{finalPrice}</span>
          </div>
          <div className="flex">
            <div className="mrpPrice">
              <span className="symbol">MRP: </span>
              <span className="strike text-decoration-line-through">
                &#8377;{data.price}
              </span>
              <span className="savePrice text-danger"> Save &#8377;{savings}</span>
            </div>
          </div>
          <div className="priceimg">
            <img src="img/prime11.png" height="25px" weight="77px" alt="Prime" />
          </div>
        </div>
      </div>

      <div className="offerEnd text-center py-3">
        <h4>
          {isExpired ? (
            "Today's sale ended"
          ) : (
            <>
              Offer ends in
              <span className="offerTimer">
                {`${minutes < 10 ? '0' : ''}${minutes}min ${seconds < 10 ? '0' : ''}${seconds}sec`}
              </span>
            </>
          )}
        </h4>
      </div>

      <div className="container-fluid">
        <div className=" px-0 py-4 d-flex justify-content-center feature-container product-extra bd-highlight py-2">
          <div className="featured-item d-flex align-items-center flex-column  mb-4">
            <img className="featured-img" src="img/returns.png" width={80} alt="7 days Replacement" />
            <span className="feature-title">7 days Replacement</span>
          </div>
          <div className="featured-item d-flex align-items-center flex-column  mb-4 mx-4">
            <img className="featured-img" src="img/delivered.png" width={80} alt="Amazon Delivered" />
            <span className="feature-title">Amazon Delivered</span>
          </div>
          <div className="featured-item d-flex align-items-center flex-column  mb-4">
            <img className="featured-img" src="img/returns.png" width={80} alt="1 year warranty" />
            <span className="feature-title">1 year warranty</span>
          </div>
        </div>

        {data.color && data.specialfeature && data.components && data.material && data.uses && data.theme && data.weight && data.style && data.manifacture && data.model && data.modelNumber && data.importedBy && data.country ? (
          <div className="mt-5 py-5">
            <p className="fs-5">Features & Details</p>
            <table className="table table-striped table-bordered mb-5">
              <thead className="thead-dark">
                <tr>
                  <th>Product</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Color</td>
                  <td>{data.color}</td>
                </tr>
                <tr>
                  <td>Special Feature</td>
                  <td>{data.specialfeature}</td>
                </tr>
                <tr>
                  <td>Components</td>
                  <td>{data.components}</td>
                </tr>
                <tr>
                  <td>Material</td>
                  <td>{data.material}</td>
                </tr>
                <tr>
                  <td>Uses</td>
                  <td>{data.uses}</td>
                </tr>
                <tr>
                  <td>Theme</td>
                  <td>{data.theme}</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>{data.weight}</td>
                </tr>
                <tr>
                  <td>Style</td>
                  <td>{data.style}</td>
                </tr>
                <tr>
                  <td>Manufacturer</td>
                  <td>{data.manifacture}</td>
                </tr>
                <tr>
                  <td>Model</td>
                  <td>{data.model}</td>
                </tr>
                <tr>
                  <td>Model Number</td>
                  <td>{data.modelNumber}</td>
                </tr>
                <tr>
                  <td>Imported By</td>
                  <td>{data.importedBy}</td>
                </tr>
                <tr>
                  <td>Country</td>
                  <td>{data.country}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <p>No additional product details available.</p>
        )}
      </div>

      <div className="container-fluid mt-5 fixed-bottom">
        <div className="row">
          <div className="col-6 text-center">
            <button
              className="btn btn-add-to-cart"
              onClick={() => navigate('/card-form')}
            >
              Add to Cart
            </button>
          </div>
          <div className="col-6 text-center">
            <button
              className="btn btn-buy-now btn-yellow"
              onClick={() => navigate('/card-form')}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetailComponent;



