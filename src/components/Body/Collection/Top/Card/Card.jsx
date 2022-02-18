import React from 'react';
import image from '../../../../../assets/images/propic.jpg';
import classes from './Card.module.css';

function Card (props) {
  return (
    <div>
        <div className={classes.container}>
            <div className={classes.index}>{props.index}</div>
            </div>
        <div className={classes.container}>
        <img className={classes.image} src={image} alt=''/>
        </div>
        <div className={classes.container}>
        
            <div className={classes.name}>
            CryptoFunks
            </div>
            <div>
            <div  className={classes.container}>
        <img className={classes.imagesmall} src={image} alt=''/>
        </div>
            
            <div  className={classes.container}>
                <div className={classes.count}>
                19.769.39
                </div>
            </div>
            </div>
        </div>
        <div className={classes.container}>
            <div className={classes.greenpercent}>
            +26.52%
            </div>
        </div>
    </div>
  )
}

export default Card