import React from 'react';
import Card from './Card/Card';
import classes from './Top.module.css';

function Top() {
  return (
    <div className={classes.container}>
        <div className={classes.title}>TOP COLLECTION OVER</div>
        <div className={classes.time}>Last 7 days</div>
        <div className={classes.card}>
        <Card index='1'/>
        </div>
        <div className={classes.card}>
        <Card index='2'/>
        </div>
        <div className={classes.card} >
        <Card index='3'/>
        </div>
        <div className={classes.card} >
        <Card index='4'/>
        </div>
        <div className={classes.card} >
        <Card index='5'/>
        </div>
      
    </div>
  )
}

export default Top