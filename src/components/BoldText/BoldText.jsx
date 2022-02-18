import React from 'react'
import classes from './BoldText.module.css'

function BoldText (props) {
  return (
    <div className={classes.container}>{props.title}</div>
  )
}

export default BoldText