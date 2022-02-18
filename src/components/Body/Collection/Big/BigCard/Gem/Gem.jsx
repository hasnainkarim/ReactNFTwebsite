import React from 'react';
import image from '../../../../../../assets/images/logo192.png';
import classes from './Gem.module.css'

function Gem () {
  return (
    <div className={classes.border}>
        <div className={classes.container}>
            <img className={classes.image} src={image} alt=' '/>
        </div>
        <div className={classes.container}>
        <div className={classes.number}>
        0.25 ETH
        </div>
        </div>
    </div>
  )
}

export default Gem
