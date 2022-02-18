import React from 'react';
import classes from './Bigger.module.css';
import image from '../../../../assets/images/bg.jpg';
import BiggerCard from './BiggerCard/BiggerCard';

function Bigger () {
  return (
    <div className={classes.margin}>
        <div className={classes.container}>
         <img className={classes.image} src={image} alt=''/>


        </div>
        <div>
      
                <BiggerCard/>

           
        </div>
    </div>
  )
}

export default Bigger