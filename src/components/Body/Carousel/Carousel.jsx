import React from 'react';
import classes from './Carousel.module.css';
import BoldText from '../../BoldText/BoldText';
import RegularText from '../../RegularText/RegularText';
import RoundedButton from '../../RoundeedButton/RoundedButton';
import logo from '../../../assets/images/bg.jpg';




function Carousel () {
  return (
      <div className={classes.margin}>
    <div className={classes.container}>

        <BoldText className={classes.title} title='DISCOVER AND COLLECT DIGITAL ART NFTS' />
        <RegularText title ='Digital marketplace for crypto collectibles and non-fungible tokens (NFTS). Buy, Sell and discover exclusive digital assets.'/>
        <RoundedButton title='Explore Now'/>
        <div className={classes.numbers}>
            <div className={classes.container}>
                <BoldText title='98K+'/>
                <RegularText title='Artwork'/>
            </div>
            <div className={classes.container}>
                <BoldText title='12K+'/>
                <RegularText title='Auction'/>
            </div>
            <div className={classes.container}>
                <BoldText title='15K+'/>
                <RegularText title='Artist'/>
            </div>
        </div>
    </div>
    <div className={classes.bg}>
    <img className={classes.logo} src={logo} alt=''/>
    </div>
   
    </div>
  )
}

export default Carousel