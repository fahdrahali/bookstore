import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
    <button
      className="btn-categories"
      onClick={() => {
        dispatch(checkStatus());
      }}
      type="button"
    >
      Check status
    </button>;
};

export default Categories;
