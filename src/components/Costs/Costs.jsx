import './Costs.css';
import {memo} from 'react';
import {Card} from '../UI/Card';
import {CostsFilter} from '../UI/CostFilte';
import React, {useState} from 'react';
import {CostList} from './CostList';
import {CostDiagram} from './CostDiagram';
import {useSelector} from 'react-redux';
import {selectAllCosts} from '../../store/slices/costSlice';

const CostsImpl = () => {
  const costs = useSelector(selectAllCosts);

  console.log(costs);

  const [selectedYear, setSelectedYear] = useState('2023');

  const yearChangeHandler = year => {
    setSelectedYear(year);
  };

  const filteredCosts = costs.filter(cost => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className='costs'>
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};
export const Costs = memo(CostsImpl);
