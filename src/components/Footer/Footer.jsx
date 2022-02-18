import React from 'react';
import classes from './Footer.module.css';
import image from '../../assets/images/logo192.png';

function Footer () {
  return (
    <div>
      <div>
      <div className={classes.partition1}>
       
        <div className={classes.boldtext}>
             NFTERS
        </div>
        <div className={classes.text}>
          The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell and discover exclusive digital items.
          </div>
          <div>
            <img  className={classes.icons} src={image} alt=' '/>
            <img className={classes.icons} src={image} alt=' '/>
            <img className={classes.icons} src={image} alt=' '/>
          
          </div>

      </div>
      <div className={classes.partition2}>
      <div className={classes.boldtext}>
        Market Place

</div>
<div className={classes.text}>
  All NFTS
  
  </div>
  <div className={classes.text}>
    New
  
  </div>
  <div className={classes.text}>
Art
</div>
<div className={classes.text}>
  Sports
  
  </div>
  <div className={classes.text}>
    Utility
  
  </div>
  <div className={classes.text}>
    Music

</div>
<div className={classes.text}>
  Domain Name
  </div>
  

      </div>
      <div className={classes.partition3}>
      <div className={classes.boldtext}>
        My Account

</div>
<div className={classes.text}>
  Profile
  
  </div>
  <div className={classes.text}>
    Favourite
  
  </div>
  <div className={classes.text}>
    My collections

</div>
<div className={classes.text}>
  settings
  
  </div>
  

      </div>
      <div className={classes.partition4}>
      <div  className={classes.boldtext}>
        Stay in the Loop

</div>
<div className={classes.text}>
  Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.
  
  </div>
  <div>
  
  </div>

      </div>
    </div>
    <div className={classes.line}>
      Copyright © 2022 Hasnain Karim 

    </div > 
    
    </div>
  )
}

export default Footer;
