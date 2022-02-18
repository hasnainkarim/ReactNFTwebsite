import React from 'react';
import Carousel from './Carousel/Carousel';
import classes from './Body.module.css';
import Transaction from './Transaction/Transaction';
import Collection from './Collection/Collection';
import Featured from './Featured/Featured';
import Creation from './Creation/Creation';
import Discover from './Discover/Discover';

function Body (){
  return (
      <div className={classes.container}>
        <div  className={classes.caros}>
    <Carousel />
    </div>
    <div className={classes.trans}>
    <Transaction />
    </div>
    <div className={classes.coll}>
    <Collection />
    </div>
    <div className={classes.feat}>
    <Featured />
    </div>
    <div className={classes.create}>
    <Creation />
    </div>
    <div className={classes.disc}>
    <Discover />
    </div>
      </div>

  )
}

export default Body;
