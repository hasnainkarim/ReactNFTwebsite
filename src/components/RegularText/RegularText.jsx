import React from 'react';
import classes from './RegularText.module.css';

function RegularText (props) {
  return (
    <div className={classes.container}>{props.title}</div>
  )
}

export default RegularText