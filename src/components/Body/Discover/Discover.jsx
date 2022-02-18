import React from 'react'
import BoldText from '../../BoldText/BoldText';
import Filter from './Filter/Filter';
import Grid from './Grid/Grid';
import classes from './Discover.module.css'
import RoundedButton from '../../RoundeedButton/RoundedButton';

function Discover ()  {
  return (
    <div className={classes.container}>
        <div className={classes.boldtext}>
            <BoldText title='DISCOVER MORE NFTS'/>

        </div>
        <div className={classes.filter}>
            <Filter/>

        </div>
        <div>
            <Grid/>

        </div>
        <div className={classes.btn}>
           <RoundedButton title='More NFTs'/>

        </div>
    </div>
  )
}

export default Discover;