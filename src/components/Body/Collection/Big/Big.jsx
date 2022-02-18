import React from 'react';
import BigCard from './BigCard/BigCard';
import classes from './Big.module.css';

function Big ()  {
  return (
    <div  className={classes.container}>
        <div>
            <BigCard/>
        </div>
        <div>
        <BigCard/>

        </div>
        <div>
        <BigCard/>

        </div>
    </div>
  )
}

export default Big