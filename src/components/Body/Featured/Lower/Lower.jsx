import React from 'react'
import RoundedButton from '../../../RoundeedButton/RoundedButton';
import image from '../../../../assets/images/propic.jpg';
import classes from './Lower.module.css'

function Lower () {
  return (
      <div  className={classes.contain}>
      
              <img className={classes.propic} src={image} alt=' '/>

          
          
              <div className={classes.name}>
              by Aryan
              </div>
            

         
        
              <div className={classes.button}>
              <RoundedButton title='Total 54 items'/>
              
             
          </div>
      </div>
   
  )
}

export default Lower;