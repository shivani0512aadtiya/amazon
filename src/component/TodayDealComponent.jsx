


import React, { useState, useEffect } from "react";

const TodayDealComponent = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTimeLeft => {
        if (prevTimeLeft <= 1) {
          clearInterval(interval);
          setExpired(true);
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };

  return (
    <div className="bg-dark text-white justify-content-between align-items-center d-flex align-items-start flex-column px-3 py-2">
      <div className="offerEnd  text-center d-flex flex-column align-items-center">
          <div className="offerEnd text-center py-3">
      <h4>
        {expired ? (
          "Today's sale ended"
        ) : (
          <>
            Today's Day
           
            <span className="offerTimer ms-1">{formatTime(timeLeft)}</span>
           
          </>
        )}
      </h4>
    </div>
      </div>
      <div>
        {expired ? (
          <span className="text-danger fw-bold">Expired</span>
        ) : (
          <button type="button" className="btn btn-buy-now">
            View All  
          </button>
        )}
      </div>
    </div>
  );
};

export default TodayDealComponent;

