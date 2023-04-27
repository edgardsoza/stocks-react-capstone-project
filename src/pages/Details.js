import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const filteredData = location.state && location.state.data ? location.state.data : [];

  return (
    <div className="details-container">
      {filteredData.map((item) => (
        <div className="details-year-container" key={item.date}>
          <div className="details-title-container">
            <h2 className="details-title-year">{item.calendarYear}</h2>
            <h2 className="details-title-net">{item.netCashProvidedByOperatingActivities.toLocaleString()}</h2>
          </div>
          <div className="details-year-information">
            <table className="table-details">
              <thead className="table-head">
                <tr className="item-breakdown">
                  <td className="year-breakdown">
                    Year Breakdown -
                    {item.calendarYear}
                  </td>
                </tr>
              </thead>
              <tbody className="table-body">
                <tr className="odd">
                  <td>
                    Cash At the Beggining of the Period:
                  </td>
                  <td>
                    {item.cashAtBeginningOfPeriod.toLocaleString()}
                  </td>
                </tr>
                <tr className="even">
                  <td>Cash At the End of the Period:</td>
                  <td>
                    {item.cashAtEndOfPeriod.toLocaleString()}
                  </td>
                </tr>
                <tr className="odd">
                  <td>Free Cash Flow:</td>
                  <td>
                    {item.freeCashFlow.toLocaleString()}
                  </td>
                </tr>
                <tr className="even">
                  <td>Net Income:</td>
                  <td>
                    {item.netIncome.toLocaleString()}
                  </td>
                </tr>
                <tr className="odd">
                  <td>Stock Based Compensation:</td>
                  <td>
                    {item.stockBasedCompensation.toLocaleString()}
                  </td>
                </tr>
                <tr className="even">
                  <td>See full report:</td>
                  <td>
                    <a className="final-link" href={item.finalLink}>
                      Click here
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
