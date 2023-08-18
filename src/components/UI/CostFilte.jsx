import './CostFilter.css';
import {memo} from 'react';

const CostsFilterImpl = props => {
  const yearChangeHandler = e => {
    props.onChangeYear(e.target.value);
  };

  return (
    <div className='costs-filter'>
      <div className='costs-filter__control'>
        <label>Выбор По Году</label>
        <select value={props.year} onChange={yearChangeHandler}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export const CostsFilter = memo(CostsFilterImpl);
