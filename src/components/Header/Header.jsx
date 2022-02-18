import React from 'react';
// import classes from './header_module';
import Search from './Search/Search';
import Menus from './Menus/Menus';
import RoundedButtons from '../RoundeedButton/RoundedButton';
import classes from './Header_module.css'


function Header () {
  return (
    
     <div className={classes.centering}>
         
        
       <Menus className={classes.container}/>
       <Search  className={classes.container}/>
       <RoundedButtons title='Upload' className={classes.container}/>
       <RoundedButtons title='Connect Wallet' className={classes.container}/>

     </div>
    
    
  )
}

  export default Header;
