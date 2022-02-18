import React from 'react';
import classes from './Search.module.css';
import icon from '../../../assets/images//search.png'

function Search (){
  return (
    <div className={classes.container}>
      <input className={classes.input} type='text' placeholder='Search' search/>
      <img className={classes.icon} src={icon} alt=' '/>

    </div>
    
  )
}

export default Search;