import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './components/DataSlice';

const rootReducer = {
  rootReducer: reducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), thunk, logger],
});

export default store;
