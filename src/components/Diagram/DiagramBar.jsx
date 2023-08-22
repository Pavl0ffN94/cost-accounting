import {memo} from 'react';
import './DiagramBar.css';

const DiagramBarImpl = ({value, maxValue, label}) => {
  let barFillHeight = '0%';

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + '%';
  }

  return (
    <div className='diagram-bar'>
      <div className='diagram-bar__inner'>
        <div className='diagram-bar__fill' style={{height: barFillHeight}}></div>
      </div>
      <div className='diagram-bar__label'> {label} </div>
    </div>
  );
};
export const DiagramBar = memo(DiagramBarImpl);
