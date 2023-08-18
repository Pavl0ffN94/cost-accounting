import {memo} from 'react';
import './CostList.css';
import {CostItem} from './CostItem';

const CostListImpl = props => {
  if (props.costs.length === 0) {
    return <h2 className='cost-list__fallback'>В этом году расходов нет</h2>;
  }

  return (
    <ul className='cost-list'>
      {props.costs.map(cost => (
        <CostItem
          key={cost.id}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        />
      ))}
    </ul>
  );
};

export const CostList = memo(CostListImpl);
