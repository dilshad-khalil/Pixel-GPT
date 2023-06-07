import React from 'react'
import {Routes , Route, useLocation } from 'react-router-dom'
import Intro from './Intro'
import Information from './Information'
import { AnimatePresence } from 'framer-motion'
import Finish from './Finish'
import PixelGpt from './PixelGpt'
const AnimatedRoutes = () => {
    const location = useLocation();
    return (
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
           {/* <Route path='/pixelGpt' element={<PixelGpt/>}/> */}
           <Route path='/' element={localStorage.getItem("user_name") ? <PixelGpt/> : <Intro/>}/>
           <Route path='/info' element={<Information/>}/>
           <Route path='/finish' element={<Finish/>}/>
        </Routes>
      </AnimatePresence>
    
  )
}

export default AnimatedRoutes