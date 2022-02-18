import React from 'react';
import image from '../../../../../assets/images/bg.jpg';
import imageProfile from '../../../../../assets/images/propic.jpg';
import RoundedButton from '../../../../RoundeedButton/RoundedButton';
import Gem from './Gem/Gem';
import classes from './BigCard.module.css';

function BigCard ()  {
  return (
    <div className={classes.margin}>
        <div className={classes.image}>
            <img className={classes.imageShaper} src={image} alt=' '/>

        </div>
        <div className={classes.info}>
            <div className={classes.spacing}>
            <div className={classes.title}>
                The Futr Abstr
            </div>
            <div className={classes.profiles}>
                <div className={classes.container}>
                <img className={classes.imageProfile} src={imageProfile} alt=' '/>

                </div>
                <div className={classes.container}>
                    <Gem/>

                </div>
                <div className={classes.container}>
                <div className={classes.number}>
                    1 of 8
                </div>
                </div>

            </div>
            <div className={classes.button}>
                <RoundedButton title='Place a bid '/>

            </div>
            </div>

        </div>
    </div>
  )
}

export default BigCard