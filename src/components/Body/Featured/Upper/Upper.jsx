import React from 'react';
import image from '../../../../assets/images/bg.jpg'; 
import classes from './Upper.module.css'

function Upper () {
  return (
    <div className={classes.margin}>
        <div className={classes.container}>
            <img className={classes.imageLarge}src={image} alt=' '/>

        </div>
        <div className={classes.containerRight}>
            <div>
            <img className={classes.imageSmall} src={image} alt=' '/>

            </div>
            <div>
            <img className={classes.imageSmall} src={image} alt=' '/>

            </div>
            <div>
            <img className={classes.imageSmall} src={image} alt=' '/>

            </div>

        </div>
    </div>
  )
}

export default Upper