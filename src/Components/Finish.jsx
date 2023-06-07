import React, { useEffect } from 'react'
import { motion, AnimatePresence, easeInOut, easeIn, easeOut } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import GIFS from './Gifs'
const Finish = () => {
    const navigate = useNavigate();

    useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // Replace "/my-link" with your desired link
    }, 3000);

    return () => clearTimeout(timer);
    }, [navigate]);
    
  return (
    <motion.div
            initial={{ y: 400, x: 400, opacity: 0 }}
            animate={{y:0 , x:0 , opacity:1}}
            exit={{ y: -window.innerHeight, x: -window.innerWidth, opacity: 0 }}
            transition={{ ease:easeInOut, duration:.4 }}
      className='h-screen w-screen relative'>
      <img
        src={GIFS[Math.floor(Math.random() * GIFS.length)]}
        className='w-screen h-screen object-cover'
        alt=''
      />
      <div className='w-screen h-screen bg-black/80 absolute top-0 left-0 flex items-center justify-center p-4'>
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
             transition={{ ease: easeInOut, duration: .3, delay: .2 }}
             className='text-white text-shadow text-3xl md:text-4xl text-center'>That's absoluteley genius you're finished now </motion.h1>
      </div>
    </motion.div>
  )
}

export default Finish