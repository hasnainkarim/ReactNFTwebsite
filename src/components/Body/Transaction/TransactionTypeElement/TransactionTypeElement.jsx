import React from 'react';
import classes from './TransactionTypeElement.module.css';


function TransactionTypeElement(props){
  return (
    <div className={classes.container}>
     
            <img className={classes.icon} src={props.icon} alt=' '/>

        
        <div className={classes.container}>
            <div className={classes.bolder}>
               {props.title}

            </div>
            <div className={classes.regular}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit et dolore magna aliqua. Ut enim ad 
            </div>            
        </div>
    </div>
  )
}

export default TransactionTypeElement;