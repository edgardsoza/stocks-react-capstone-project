import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BiMicrophone } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { MdArrowBackIosNew } from 'react-icons/md';
import fetchData from './fetchData';

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      dispatch({ type: 'SET_DATA', payload: data });
    };
    getData();
  }, [dispatch]);

  return (
    <div className="header-container">
      <NavLink style={{ textDecoration: 'none', color: '#fff' }} to="/">
        <MdArrowBackIosNew />
      </NavLink>
      <h3>International Filings</h3>
      <BiMicrophone />
      <FiSettings />
    </div>
  );
};

export default Header;
