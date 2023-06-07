import React from 'react'
import GIFS from './Gifs'
import { motion, AnimatePresence, easeInOut } from 'framer-motion'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Intro = () => {
    

    return (
        <motion.div
            initial={{ y: -400, x: -400, opacity: 0 }}
            animate={{y:0 , x:0 , opacity:1,}}
        exit={{ y: -window.innerHeight, x: -window.innerWidth, opacity: 0 }}
        
            transition={{ ease:easeInOut, duration:.4 }}
      className='h-screen w-screen relative'>
      <img
        src={GIFS[Math.floor(Math.random() * GIFS.length)]}
        className='w-screen h-screen object-cover'
        alt=''
      />
      <div className='w-screen h-screen bg-black/80 absolute top-0 left-0 flex items-center justify-center p-4'>
        <div className='flex items-center flex-col'>
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease:easeInOut, duration:.3 , delay:.2 }}
              
              className='text-white text-shadow text-5xl md:text-8xl'>PIXELGPT</motion.h1>
            <motion.p
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease:easeInOut, duration:.3 , delay:.4 }}
              className='lg:w-[40%] md:w-[70%] p-4  text-center text-xl md:text-3xl text-[#ccc]'>
            a cutting-edge platform that harnesses the power of GPT models to help you generate creative
            and compelling content quickly and easily.
                  </motion.p>
                  <Link to='/info'>
              <motion.button
                initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease:easeInOut, duration:.3 , delay:.7 }}
                whileTap={{ scale: 0.94 }}
              className='w-[250px] h-14 mt-6 text-2xl button-animation bg-[#E43535]'>
              Wooah! les goooo
            </motion.button>
                </Link>
            
        </div>
      </div>
    </motion.div>
  )
}

export default Intro
