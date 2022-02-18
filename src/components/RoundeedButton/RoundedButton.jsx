import React from 'react'
// import classes from './RoundedButton.module.css';

function RoundedButton (props) {
  return (
    <div className='roundedButton'>{props.title}</div>
  )
}

export default RoundedButton;