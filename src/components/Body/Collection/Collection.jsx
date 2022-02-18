import React from 'react';
import Top from './Top/Top';
import Big from './Big/Big';
import Bigger from './Bigger/Bigger';
import classes from './Collection.module.css'

function Collection () {
  return (
    <div className={classes.margin}>
        
        <div  className={classes.bigger}>
            <Bigger/>

        </div> 
        <div className={classes.big}>
            <Big/>
        </div>
        <div className={classes.container}>
            <div className={classes.line}></div>

        </div> 

        <div className={classes.top}>
            <Top className={classes.floatend}/>

        </div>
    </div>
  )
}

export default Collection
