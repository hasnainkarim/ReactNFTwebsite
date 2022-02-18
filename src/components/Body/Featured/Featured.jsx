import React from 'react'
import classes from './Featured.module.css';
import Upper from './Upper/Upper';
import Lower from './Lower/Lower';
import BoldText from '../../BoldText/BoldText';

function Featured  ()  {
  return (
      <div  className={classes.container}>
          <div>
              <BoldText title='COLLECTION FEATURED NFTS'/>
          </div>
         
    <div className={classes.left}>
    <div className={classes.centering}>
        <div>
            <Upper/>

        </div>
        <div className={classes.title} >
            Amazing Collection
        </div>
        <div className={classes.lower}>
            <Lower/>

        </div>

    </div>
    </div>
    <div className={classes.center}>
    <div className={classes.centering}>
        <div>
            <Upper/>

        </div>
        <div className={classes.title} >
        <div className={classes.centering}>
            Amazing Collection
            </div>
        </div>
        <div>
        <div className={classes.centering}>
            <div className={classes.lower}>
            <Lower/>
            </div>
            </div>

        </div>

    </div>
    </div>
    
    
    <div className={classes.right}>
    <div className={classes.centering}>
        <div>
            <Upper/>

        </div>
        <div className={classes.title} >

            Amazing Collection
        </div>
        <div className={classes.lower}>
            <Lower/>

        </div>
        </div>

    </div>
    
    </div>
  )
}

export default Featured;