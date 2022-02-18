import React from 'react';
import classes from './CardTemplate.module.css';
import image from '../../../../../../assets/images/propic.jpg'

function Cardtemplate ()  {
  return (
    <div>
        <div className={classes.container}>
            <img className={classes.image} src={image} alt=''/>

        </div>
        <div className={classes.container}>
        <div className={classes.title}>
            <div>The Futr Abstr

            </div>
            </div>
            <div>
            <div className={classes.number}>
                10 in the stock

            </div>
            </div>

        </div>
    </div>


    )
}

export default Cardtemplate