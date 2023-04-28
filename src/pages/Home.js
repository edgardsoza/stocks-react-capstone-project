import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Home = () => {
  const data = useSelector((state) => state.rootReducer.data);
  const navigate = useNavigate();
  const [year, setYear] = useState('');

const handleYearChange = (event) => {
  setYear(event.target.value);
};

  const handleItemClick = (date) => {
    const filteredData = data.filter((item) => item.date === date);
    navigate('/details', { state: { data: filteredData } });
  };

  const filteredData = data.filter((item) => item.calendarYear === year);

  return (
    <div className="main-container">
      <div className="image-container">
        <h2 className="image-title">Company Information</h2>
      </div>
      <h3 className="stats-by-year">Stats By Year</h3>
      <input className="filter-year" type="input" placeholder="Enter a year between 2017-2022" value={year} onChange={handleYearChange}/>
      <div className="stats-container">
        {filteredData.length ? (
          filteredData.map((item, index) => (
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
        ))) : (
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
        )}
      </div>
    </div>
  );
};

export default Home;
