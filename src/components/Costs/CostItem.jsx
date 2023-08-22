import './CostItem.css';
import {memo} from 'react';
import {CostDate} from './CostDate';
import {Card} from '../UI/Card';

const CostItemImpl = ({date, title, amount}) => {
  const correctDate = new Date(date);

  return (
    <li>
      <Card className='cost-item'>
        <CostDate date={correctDate} />
        <div className='cost-item__description'>
          <h2> {title} </h2>
          <div className='cost-item__price'>${amount} </div>
        </div>
      </Card>
    </li>
  );
};

export const CostItem = memo(CostItemImpl);
