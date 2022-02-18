import React from 'react';
import image from '../../../../assets/images/propic.jpg';
import classes from './LeftPart.module.css'

function LeftPart ()  {
  return (
    <div>
         <div className={classes.bgUpper}>
        <img className={classes.upper} src={image} alt=''/>
        </div>
        <div className={classes.bgLower}>
        <img className={classes.lower} src={image} alt=''/>
        </div>
    </div>
  )
}

export default LeftPart;