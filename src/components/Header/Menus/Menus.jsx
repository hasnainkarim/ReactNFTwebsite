import React from 'react';
import classes from './Menus.module.css';
import container from '../Search/Search.module.css'
import Search from '../Search/Search';
import logo from '../../../assets/images/logo.PNG';


function Menus() {
  return (
    
    <div className={classes.centering}>
        <img className={classes.logo} src={logo} alt=''/>
        <div className={classes.container}>Marketplace</div>
        <div className={classes.container}>Resource</div>
        <div className={classes.container}>About</div>
        
    

    </div>
        
    
        )
}


export default Menus;