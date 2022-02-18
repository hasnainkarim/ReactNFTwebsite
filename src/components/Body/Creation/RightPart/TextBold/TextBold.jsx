import React from 'react'
import classes from './TextBold.module.css'

function TextBold (props) {
  return (
    <div className={classes.container}>{props.title}</div>
  )
}

export default TextBold