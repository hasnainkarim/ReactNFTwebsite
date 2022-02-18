import React from 'react';
import classes from './BiggerCard.module.css';
import CardTemplate from './CardTemplate/Cardtemplate';
import Bid from './Bid/Bid';

function BiggerCard () {
  return (
    <div>
        <div className={classes.container}>
            <CardTemplate/>

        </div>
        <div className={classes.container}>
            <Bid/>

        </div>
    </div>
  )
}

export default BiggerCard