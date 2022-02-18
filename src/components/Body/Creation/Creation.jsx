import React from 'react'
import classes from './Creation.module.css';
import LeftPart from './LeftPart/LeftPart';
import CenterPart from './CenterPart/CenterPart';
import RightPart from './RightPart/RightPart';

function Creation () {
  return (
    <div>
        <div className={classes.left}>
            <LeftPart/>
        
            
        </div>
        <div className={classes.center}>
            <CenterPart/>

        </div>
        <div className={classes.right}>
            <RightPart/>

        </div>
    </div>
  )
}

export default Creation