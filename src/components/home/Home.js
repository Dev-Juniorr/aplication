import React from 'react'
import './Home.css';

// Importaciones de Iconos
import {FaBook, FaBookmark, FaReact, FaCss3Alt, FaJsSquare, FaHtml5} from 'react-icons/fa';

const Home = () => {

    let name = localStorage.getItem("name")

  return (
    <>
        <div className='home'>
            <div className='logoHome'>
                <img src='https://res.cloudinary.com/dovavvnjx/image/upload/v1653929721/image_d79fjp.png' alt='logo'></img>
            </div>

            <div className='infoHome'>
                <div className='welcome'>
                    <img src='https://res.cloudinary.com/dovavvnjx/image/upload/v1654144697/4472533_looeru.png' alt='Porfile'></img>
                    <div className='text'>
                        <p className='p'>Welcome back</p>
                        <h2 className='title'>Hello, {name}</h2>
                    </div>
                </div>

                <div className='items'>
                    <div className='item'>
                        <div className='itemIcon'>{<FaBook/>}</div>
                        <div className='itemText'>Your Courses</div>
                    </div>
                    <div className='item'>
                        <div className='itemIcon'>{<FaBookmark/>}</div>
                        <div className='itemText'>Your Notes</div>
                    </div>
                </div>

                <div className='courses'>
                    <div className='titleCourses'>Available courses</div>
                    <div className='containerCourses'>

                        <div className='itemCourses'>
                            <div className='itemLogo'>{<FaHtml5/>}</div>
                            <div className='nameDate'>
                                <div className='name'>HTML</div>
                                <div className='date'>1/06/2022</div>
                            </div>
                            <div className='price'>$200.000</div>
                        </div>

                        <div className='itemCourses'>
                            <div className='itemLogo'>{<FaCss3Alt/>}</div>
                            <div className='nameDate'>
                                <div className='name'>CSS</div>
                                <div className='date'>1/06/2022</div>
                            </div>
                            <div className='price'>$400.000</div>
                        </div>

                        <div className='itemCourses'>
                            <div className='itemLogo'>{<FaJsSquare/>}</div>
                            <div className='nameDate'>
                                <div className='name'>JavaScript</div>
                                <div className='date'>1/06/2022</div>
                            </div>
                            <div className='price'>$500.000</div>
                        </div>

                        <div className='itemCourses'>
                            <div className='itemLogo'>{<FaReact/>}</div>
                            <div className='nameDate'>
                                <div className='name'>React JS</div>
                                <div className='date'>1/06/2022</div>
                            </div>
                            <div className='price'>$1.000.000</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home