import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import store from '../store';
import { expect, describe, it } from '@jest/globals';

describe('Home component', () => {
  it('should render without errors', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Stats By Year')).toBeInTheDocument();
  });
});

describe('filterByDate', () => {
  const handleItemClick = (data, date) => data.filter(((item) => item.date === date));

  it('should return the data for a given date', () => {
    const data = [
      { date: '2021-01-01', value: 100 },
      { date: '2021-02-01', value: 200 },
      { date: '2021-03-01', value: 300 },
    ];
    const filteredData = handleItemClick(data, '2021-02-01');
    expect(filteredData).toEqual([{ date: '2021-02-01', value: 200 }]);
  });
});
