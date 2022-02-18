import React from 'react';
import classes from './Layout.module.css';

function Layout({children}){
  return (
    <div className={classes.container}>{children}</div>
  )
}
export default Layout;
