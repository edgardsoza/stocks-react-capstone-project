import '@jest/globals';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/HeaderMain';
import store from '../store';
import fetchData from './fetchData.mock';
import { expect, it } from '@jest/globals';

it('should dispatch a SET_DATA action', async () => {
  await fetchData();
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header fetchData={fetchData} />
      </BrowserRouter>
    </Provider>,
  );

  expect(fetchData).toHaveBeenCalled();
});
