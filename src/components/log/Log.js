import React, { useState } from 'react'
import './Log.css';

// Importaciones de Iconos
import {FaEye, FaEyeSlash} from 'react-icons/fa';

const Log = () => {

    const [state, setState] = useState(false);

    const togglePass = () => {
        setState(prevState => !prevState);
    }
 
  return (
    <>
        <div className='log'>
            <div className='logo'>
                <img src='https://res.cloudinary.com/dovavvnjx/image/upload/v1653929721/image_d79fjp.png' alt='logo'></img>
            </div>

            <div className='register'>
                <div className='title'>Sign Up</div>

                <div className='inputs'>
                    <label>Full Name</label>
                    <input type="text" placeholder='Full Name'/>
                </div>

                <div className='inputs'>
                    <label>Email</label>
                    <input type="email" placeholder='Email'/>
                </div>

                <div className='inputs'>
                    <label>Password</label>
                    <input type={state ? "text" : "password"} className='pass' placeholder='Password'/>
                    <span className='icon' onClick={togglePass}>
                        {
                            state  ? <FaEyeSlash/> : <FaEye/> 
                        }
                    </span>
                </div>

                <label className="container">
                    Accept <span>Terms & Conditions</span>
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>

                <button className='button'>Create Account</button>

                <div className='o'>
                    <div className='line'></div>
                        <div className='or'>or</div>
                    <div className='line'></div>
                </div>

                <button className='button_2'>
                    <img src='https://res.cloudinary.com/dovavvnjx/image/upload/v1653967975/google_qvbc4p.png' alt='Google'></img>
                    Sign up with Google
                </button>

                <div className='create'>
                    Already have an account? <span>Sign in</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Log