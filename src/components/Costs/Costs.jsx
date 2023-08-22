import './Costs.css';
import {memo} from 'react';
import {Card} from '../UI/Card';
import {CostsFilter} from '../UI/CostFilte';
import React, {useState} from 'react';
import {CostList} from './CostList';
import {CostDiagram} from './CostDiagram';
import {useSelector} from 'react-redux';
import {selectAllCosts} from '../../store/slices/costSlice';
import {selectCurrentUser} from '../../store/slices/usersSlice';

const CostsImpl = () => {
  const costs = useSelector(selectAllCosts);
  const currentUser = useSelector(selectCurrentUser);

  const [selectedYear, setSelectedYear] = useState('2023');

  const yearChangeHandler = year => {
    setSelectedYear(year);
  };

  const filteredCosts = costs.filter(cost => {
    const costDate = new Date(cost.date);
    const costYear = costDate.getFullYear().toString();
    return costYear === selectedYear && cost.userId === currentUser.id;
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
