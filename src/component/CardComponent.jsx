
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CardComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token'); // Ensure token is retrieved from localStorage
        const response = await fetch('https://ecommerce-g1tg.onrender.com/getproduct', {
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
        setData(result.photos); // Use result.photos based on API response
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleClickByNowButton = (_id) => {
    navigate("/card-details", { state: { id: _id } });
  };

  return (
    <div className="row">
      {Array.isArray(data) && data.map((item, index) => {
        // Calculate final price after discount and round it to the nearest integer
        const finalPrice = Math.round(item.price - (item.price * item.discount / 100));

        return (
          <div key={index} className="col-6 mt-3">
            <div className="card h-100 mb-3">
              <div className="card-body text-center">
                <div className="image-container">
                  <img
                    className="card-img-top"
                    src={item.image.url}
                    width={200}
                    height={200}
                    alt=""
                  />
                </div>
                <div className="price-details mt-1">
                 <div className="old-price">
                  <span className="symbol">&#8377;</span>{item.price}
                </div>
                 <div className="discount fw-bold">{item.discount}% off</div>
               </div>
                <div className="card-title mt-2">{item.description}</div>
                <div className="price-with-discount text-danger">
                  <img src="/img/prime11.png" alt="" className="prime-icon" />
                  <br />
                  <div className="buyingPrice font-weight-bold">
                    <span className="symbol">&#8377;</span>
                    <span className="price fw-bold ">{finalPrice}</span>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    className="btn btn-warning btn-buy-now"
                    onClick={() => handleClickByNowButton(item._id)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardComponent;
