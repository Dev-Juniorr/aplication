import React from 'react'
import './Start.css'

// importacion de la info de la App
import Info from '../info/Info';
import Log from '../log/Log';

const Start = () => {
  return (
    <>
        <div className='all'>
            {/* <div className='src'></div> */}
            <div className='splash'>
                <img src='https://res.cloudinary.com/dovavvnjx/image/upload/v1653928715/foto_eyvg3v.png' alt='Logo'></img>
            </div>
            <div className='info'>
              <Info/>
            </div>
            <div className='log'>
              <Log/>
            </div>
        </div>
    </>
  )
}

export default Start