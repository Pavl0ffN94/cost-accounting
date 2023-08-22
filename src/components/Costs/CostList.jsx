import {memo} from 'react';
import './CostList.css';
import {CostItem} from './CostItem';

const CostListImpl = ({costs}) => {
  if (costs.length === 0) {
    return <h2 className='cost-list__fallback'>В этом году расходов нет</h2>;
  }

  return (
    <ul className='cost-list'>
      {costs.map(cost => (
        <CostItem
          key={cost.id}
          date={cost.date}
          title={cost.title}
          amount={cost.amount}
        />
      ))}
    </ul>
  );
};

export const CostList = memo(CostListImpl);
