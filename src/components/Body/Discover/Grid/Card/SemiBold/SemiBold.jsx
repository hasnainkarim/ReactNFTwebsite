import React from 'react';
import classes from './SemiBold.module.css'

function SemiBold (props)  {
  return (
    <div className={classes.name}>{props.name}</div>
  )
}

export default SemiBold