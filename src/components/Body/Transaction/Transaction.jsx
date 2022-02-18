import React from 'react';
import classes from './Transaction.module.css';
import Leading from './Leading/Leading';
import TransactionTypeElement from './TransactionTypeElement/TransactionTypeElement';
import iconGrowth from '../../../assets/images/growth-graph.png';
import iconFast from '../../../assets/images/loan.png';

function Transaction (){
  return (
    <div className={classes.margin}>
        <div className={classes.container}>
       <Leading className={classes.container}/>
       </div>
       <div className={classes.types}>
        <TransactionTypeElement title='Fast Transaction' icon={iconFast} className={classes.container}/>
        </div>
        
        <div className={classes.typesEnd}>
        <TransactionTypeElement title='Growth Transaction' icon={iconGrowth} className={classes.container}/>
        </div>
        
    </div>
  )
}

export default Transaction;