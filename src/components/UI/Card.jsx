import './Card.css';
import {memo} from 'react';

const CardImpl = props => {
  const classes = 'card ' + props.className;
  return <div className={classes}> {props.children} </div>;
};

export const Card = memo(CardImpl);
