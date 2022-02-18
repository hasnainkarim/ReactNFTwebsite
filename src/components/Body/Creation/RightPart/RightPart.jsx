import React from 'react'
import BoldText from '../../../BoldText/BoldText'
import RegularText from '../../../RegularText/RegularText'
import RoundedButton from '../../../RoundeedButton/RoundedButton'
import TextBold from './TextBold/TextBold'

function RightPart  ()  {
  return (
    <div>
        <div>
            <TextBold title='CREATE AND SELL YOUR NFTS'/>
        </div>
        <div>
            <RegularText title='

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae magna lacus. Donec a diam scelerisque, molestie est quis, ultrices lacus. Suspendisse non gravida libero, eget aliquam leo. Pellentesque a dictum tellus, id fermentum elit. Curabitur convallis ornare lacus eget ultricies.   '/>

        </div>
        <div>
            <RoundedButton title='Sign Up Now'/>

        </div>
    </div>
  )
}

export default RightPart