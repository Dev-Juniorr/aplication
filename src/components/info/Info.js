import React from 'react'
import './Info.css';

// Importaciones de Iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Info = () => {
    const circle1 = () => {
        const circle1 = document.querySelector('.circle1');
        const circle2 = document.querySelector('.circle2');
        const circle3 = document.querySelector('.circle3');

        circle1.classList.add('active');

        circle2.classList.remove('active');
        circle3.classList.remove('active');


        const title1 = document.querySelector('.title1');
        const descrip1 = document.querySelector('.descrip1');

        const title2 = document.querySelector('.title2');
        const descrip2 = document.querySelector('.descrip2');

        const title3 = document.querySelector('.title3');
        const descrip3 = document.querySelector('.descrip3');

        title3.classList.remove('active');
        descrip3.classList.remove('active');

        title2.classList.remove('active');
        descrip2.classList.remove('active');

        title1.classList.add('active');
        descrip1.classList.add('active');
    }
    const circle2 = () => {
        const circle1 = document.querySelector('.circle1');
        const circle2 = document.querySelector('.circle2');
        const circle3 = document.querySelector('.circle3');

        circle2.classList.add('active');

        circle1.classList.remove('active');
        circle3.classList.remove('active');


        const title1 = document.querySelector('.title1');
        const descrip1 = document.querySelector('.descrip1');

        const title2 = document.querySelector('.title2');
        const descrip2 = document.querySelector('.descrip2');

        const title3 = document.querySelector('.title3');
        const descrip3 = document.querySelector('.descrip3');

        title3.classList.remove('active');
        descrip3.classList.remove('active');

        title2.classList.add('active');
        descrip2.classList.add('active');

        title1.classList.remove('active');
        descrip1.classList.remove('active');
    }
    const circle3 = () => {
        const circle1 = document.querySelector('.circle1');
        const circle2 = document.querySelector('.circle2');
        const circle3 = document.querySelector('.circle3');

        circle3.classList.add('active');

        circle1.classList.remove('active');
        circle2.classList.remove('active');


        const title1 = document.querySelector('.title1');
        const descrip1 = document.querySelector('.descrip1');

        const title2 = document.querySelector('.title2');
        const descrip2 = document.querySelector('.descrip2');

        const title3 = document.querySelector('.title3');
        const descrip3 = document.querySelector('.descrip3');

        title3.classList.add('active');
        descrip3.classList.add('active');

        title2.classList.remove('active');
        descrip2.classList.remove('active');

        title1.classList.remove('active');
        descrip1.classList.remove('active');

        const circleIcon = document.querySelector('.circleIcon');
        circleIcon.classList.add('active'); 
    }
    const register = () => {
        const info = document.querySelector('.info');
        info.classList.add('desactive');
    }

  return (
    <>
        <div className='info'>
            <div className='logo1'>
                <img src='https://res.cloudinary.com/dovavvnjx/image/upload/v1653928715/foto_eyvg3v.png' alt='Logo'></img>
            </div>

            <div className='image'>
                <img src='https://res.cloudinary.com/dovavvnjx/image/upload/v1653929721/image_d79fjp.png' alt='Usuario'></img>
            </div>

            <div className='information'>
                <div className='tips'>
                    <span className='circle1 active' onClick={circle1}></span>
                    <span className='circle2' onClick={circle2}></span>
                    <span className='circle3' onClick={circle3}></span>
                </div>
                <div className='titles'>
                    <div className='title1 active'>Access online course for free every time!</div>
                    <div className='descrip1 active'>Upgrade your basic skill to be advance with expert mentors 1</div>

                    <div className='title2'>Access to any course worldwide!</div>
                    <div className='descrip2'>Upgrade your basic skill to be advance with expert mentors 2</div>

                    <div className='title3'>Access to any course in any language!</div>
                    <div className='descrip3'>Upgrade your basic skill to be advance with expert mentors 3</div>
                </div>
                
                <div className='next'>
                    <div className='circleIcon' onClick={register}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Info