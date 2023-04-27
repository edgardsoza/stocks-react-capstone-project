import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { expect, describe, it } from '@jest/globals';
import Details from '../pages/Details';

describe('Details component', () => {
  it('should render details for each item in the filtered data', () => {
    const filteredData = [
      {
        date: '2021-01-01',
        calendarYear: '2021',
        netCashProvidedByOperatingActivities: 1000,
        cashAtBeginningOfPeriod: 500,
        cashAtEndOfPeriod: 1500,
        freeCashFlow: 800,
        netIncome: 600,
        stockBasedCompensation: 200,
        finalLink: 'https://example.com/report',
      },
      {
        date: '2022-01-01',
        calendarYear: '2022',
        netCashProvidedByOperatingActivities: 2000,
        cashAtBeginningOfPeriod: 1500,
        cashAtEndOfPeriod: 2500,
        freeCashFlow: 1800,
        netIncome: 1600,
        stockBasedCompensation: 200,
        finalLink: 'https://example.com/report',
      },
    ];

    render(
      <MemoryRouter initialEntries={[{ state: { data: filteredData }, pathname: '/details' }]}>
        <Details />
      </MemoryRouter>,
    );

    filteredData.forEach((item) => {
      expect(screen.getByText(item.calendarYear)).toBeInTheDocument();
      expect(screen.getByText(
        item.netCashProvidedByOperatingActivities.toLocaleString(),
      )).toBeInTheDocument();
    });
  });
});
