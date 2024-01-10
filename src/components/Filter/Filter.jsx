import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/filter-slice';
import style from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const handleChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <div className={style.searchContainer}>
      <label className={style.search}>
        <input
          type="text"
          name="filter"
          placeholder=" "
          className={style.inputName}
          title="Enter search name"
          onChange={handleChange}
          value={filter}
        />
      </label>
    </div>
  );
};

export default Filter;
