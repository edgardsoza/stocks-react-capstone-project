import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Home = () => {
  const data = useSelector((state) => state.rootReducer.data);
  const navigate = useNavigate();

  const handleItemClick = (date) => {
    const filteredData = data.filter((item) => item.date === date);
    navigate('/details', { state: { data: filteredData } });
  };

  return (
    <div className="main-container">
      <div className="image-container">
        <h2 className="image-title">Company Information</h2>
      </div>
      <h3 className="stats-by-year">Stats By Year</h3>
      <div className="stats-container">
        {data.map((item, index) => (
          <div className={index === 1 || index === 2 ? 'item-card even' : 'item-card odd'} key={item.date}>
            <button className="my-button" type="button" onClick={() => handleItemClick(item.date)}>
              <AiOutlineArrowRight />
            </button>
            <span>
              {item.calendarYear}
              <br />
              <br />
              Net Cash
              <br />
              <br />
              {item.netCashProvidedByOperatingActivities.toLocaleString()}
            </span>
          </div>
        ))}
        <div className="item-card even" />
      </div>
    </div>
  );
};

export default Home;
