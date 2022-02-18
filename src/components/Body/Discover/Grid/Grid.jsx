import React from 'react';
import Card from './Card/Card';
import classes from './Grid.module.css'

function Grid ()  {
  return (
      <div>
    <div>
        <div className={classes.row}>
            <Card name='ArtCrypto'/>
        </div>
        <div className={classes.row}>
        <Card name='This NFT'/>
        </div>
        <div className={classes.row}>
        <Card name='NameCrypto'/>
        </div>
        <div className={classes.row}>
        <Card name='KingCrypto'/>
        </div>       
    </div>

    <div>
    <div className={classes.row}>
            <Card name='ArtCrypto'/>
        </div>
        <div className={classes.row}>
        <Card name='This NFT'/>
        </div>
        <div className={classes.row}>
        <Card name='NameCrypto'/>
        </div>
        <div className={classes.row}>
        <Card name='KingCrypto'/>
        </div>        
    </div>

    <div>
    <div className={classes.row}>
            <Card name='ArtCrypto'/>
        </div>
        <div className={classes.row}>
        <Card name='This NFT'/>
        </div>
        <div className={classes.row}>
        <Card name='NameCrypto'/>
        </div>
        <div className={classes.row}>
        <Card name='KingCrypto'/>
        </div>   
    </div>

    <div>
    <div className={classes.row}>
            <Card name='ArtCrypto'/>
        </div>
        <div className={classes.row}>
        <Card name='This NFT'/>
        </div>
        <div className={classes.row}>
        <Card name='NameCrypto'/>
        </div>
        <div className={classes.row}>
        <Card name='KingCrypto'/>
        </div>      
    </div>
    </div>
 
  )
}

export default Grid