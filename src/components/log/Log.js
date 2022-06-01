import React, { useState } from 'react';
import './Log.css';

// Importaciones de Iconos
import {FaEye, FaEyeSlash} from 'react-icons/fa';

const Log = () => {

    const [state, setState] = useState(false);

    const togglePass = () => {
        setState(prevState => !prevState);
    }

    const [datos, setDatos] = useState({
        name: '',
        email: '',
        password: ''
    });

    const inputDatos = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviar = (e) => {
        e.preventDefault();

        const name = datos.name;
        const email = datos.email;
        const password = datos.password;

        const nameInput = document.querySelector('.nameInput');
        const emailInput = document.querySelector('.emailInput');
        const passwordInput = document.querySelector('.passwordInput');
        const terms = document.querySelector('.terms');

        const check = document.getElementById('check').checked;
        const log = document.querySelector('.log');

        check ? terms.classList.remove('error') : terms.classList.add('error');

        datos.name === '' ? nameInput.classList.add('error') : nameInput.classList.remove('error'); localStorage.setItem('name', name);

        datos.email === '' ? emailInput.classList.add('error') : emailInput.classList.remove('error'); localStorage.setItem('email', email);
        
        datos.password === '' ? passwordInput.classList.add('error') : localStorage.setItem('password',password); datos.password.length < 7 ? passwordInput.classList.add('error') : passwordInput.classList.remove('error');

        check && datos.name && datos.email && datos.password ? log.classList.add('desactive') : log.classList.remove('desactive')

        
        
    }
 
  return (
    <>
        <div className='log'>
            <div className='logo'>
                <img src='https://res.cloudinary.com/dovavvnjx/image/upload/v1653929721/image_d79fjp.png' alt='logo'></img>
            </div>

            <div className='register'>
                <div className='title'>Sign Up</div>

            <form onSubmit={enviar}>
                <div className='inputs'>
                    <label>Full Name</label>
                    <input type="text" name='name' className='nameInput' onChange={inputDatos} placeholder='Full Name'/>
                </div>

                <div className='inputs'>
                    <label>Email</label>
                    <input type="email" name='email' className='emailInput' onChange={inputDatos} placeholder='Email'/>
                </div>

                <div className='inputs'>
                    <label>Password</label>
                    <input type={state ? "text" : "password"} name='password' onChange={inputDatos} className='passwordInput' placeholder='Password'/>
                    <span className='icon' onClick={togglePass}>
                        {
                            state  ? <FaEyeSlash/> : <FaEye/> 
                        }
                    </span>
                </div>

                <label className="container">
                    Accept <span>Terms & Conditions</span>
                    <input type="checkbox" id='check'/>
                    <span className="checkmark"></span>
                </label>
                <p className='terms'>Please accept terms & Conditions</p>

                <button className='button' type='submit'>Create Account</button>

            </form>
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