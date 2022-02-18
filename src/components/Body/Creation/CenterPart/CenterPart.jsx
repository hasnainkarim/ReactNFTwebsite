import React from 'react';
import image from '../../../../assets/images/propic.jpg';
import classes from './CenterPart.module.css'

function CenterPart  ()  {
  return (
    <div className={classes.bg}>
    <img  className={classes.img} src={image} alt=''/>
    {/* <img className={classes.imgSmall} src={image} alt=''/> */}
    </div>
  )
}

export default CenterPart