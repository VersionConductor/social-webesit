import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const IconbtnBar = ({ icon }) => (
    <div className='incoCustom-button'>
        <a href="#"><FontAwesomeIcon icon={icon} /></a>
    </div>
)

export default IconbtnBar;
