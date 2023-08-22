import './Diagram.css';
import {DiagramBar} from './DiagramBar';

export const Diagram = ({dataSets}) => {
  const dataSetsValues = dataSets.map(dataSet => dataSet.value);

  const maxMonthCosts = Math.max(...dataSetsValues);

  return (
    <div className='diagram'>
      {dataSets.map(dataSet => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCosts}
          label={dataSet.label}
        />
      ))}
    </div>
  );
};
