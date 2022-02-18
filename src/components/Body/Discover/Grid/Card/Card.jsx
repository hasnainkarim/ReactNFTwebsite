import React from 'react';
import image from '../../../../../assets/images/propic.jpg';
import classes from './Card.module.css'
import SemiBold from './SemiBold/SemiBold';
import icon from '../../../../../assets/images/propic.jpg'

function Card  ({name})  {
  return (
    <div className={classes.container}>
        <div>
        <div className={classes.bg}>
    <img  className={classes.img} src={image} alt=''/>
    {/* <img className={classes.imgSmall} src={image} alt=''/> */}
    </div>
         

        </div>
        
        <div className={classes.text}>
        <SemiBold name='ArtCrypto'/>
        </div>
        <div className={classes.lower}>
                <div className={classes.horizontal}>
                    <img className={classes.pic} src={icon} alt=' '/>

                </div>
                <div className={classes.greenText}>
                    0.25 ETH

                </div>
                <div className={classes.regularText}>
                    1 0f 321

                </div>
        </div>
        <div >
            <div className={classes.blueText}>
                3h 50m 2s left

            </div>
            <div className={classes.blueText2}>
                Place a bid

            </div>

        </div>
        
    </div>
  )
}

export default Card