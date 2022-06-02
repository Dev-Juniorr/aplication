import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../home/Home';
import Start from '../start/Start';

const AppRouters = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Start/>}/>
            <Route path='/home' element = {<Home/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouters
