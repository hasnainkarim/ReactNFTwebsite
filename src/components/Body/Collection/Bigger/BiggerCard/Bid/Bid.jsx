import React from 'react';
import image from '../../../../../../assets/images/logo192.png';
import classes from './Bid.module.css'

function Bid ()  {
  return (
    <div>
        <div>
        <div className={classes.title}>
            Highest Bid
            </div>

        </div>
        <div>
            <div className={classes.container}>
             <img className={classes.image} src={image} alt=''/>
            </div>
            <div className={classes.container}>
                <div className={classes.number}>
                0.25 ETH
                    </div>

            </div>

        </div>
    </div>
  )
}

export default Bid