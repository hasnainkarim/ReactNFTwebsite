import React from 'react'
import RoundedButtonn from './RoundeedButton/RoundedButton';
import classes from './Filter.module.css'

function Filter  ()  {
  return (
    <div>
        <div className={classes.container}>
            <RoundedButtonn title='All Categories'/>

        </div>
        <div className={classes.container}>
        <RoundedButtonn title='Art'/>
            </div>
            <div className={classes.container}>
            <RoundedButtonn title='Celebrities'/>
            </div>
            <div className={classes.container}>
            <RoundedButtonn title='Gaming'/>
            </div>
            <div className={classes.container}>
            <RoundedButtonn title='Sport'/>
            </div>
            <div className={classes.container}>
            <RoundedButtonn title='Music'/>
            </div>
            <div className={classes.container}>
            <RoundedButtonn title='Crypto'/>
            </div>
            <div className={classes.filter}>
            <RoundedButtonn title='All Filter'/>
            </div>
    </div>
  )
}

export default Filter