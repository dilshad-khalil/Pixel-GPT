import React from 'react'
import GIFS from './Gifs'
import { motion, AnimatePresence, easeInOut, easeIn, easeOut } from 'framer-motion'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Randomize from './SVG/Randomize'
import RandomNames from './randomNames'
const Test = () => {

  const [input, setInput] = useState("");
  const [random, setRandom] = useState(false);

  const navigate = useNavigate();
  const setName = (e) => {
    e.preventDefault();
    localStorage.setItem("user_name", input);
    if (input.length === 0) {
        setInput("name can't be empty")
      setTimeout(() => {
        setInput("")
      },2000)
    } else {
      navigate('/finish')
    }
    console.log(localStorage.getItem("user_name"))
  }

  const getRandomName = () => {
    setRandom(true);
    setTimeout(() => {
      setRandom(false)
      setInput(RandomNames[Math.floor(Math.random() * RandomNames.length)])
    }, Math.floor(Math.random() * 2000))
  }

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }
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
        <div className='flex items-center flex-col'>
           <motion.h1
          initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
             transition={{ ease: easeInOut, duration: .3, delay: .2 }}
             className='text-white text-shadow text-3xl md:text-4xl text-center'>TO GET STARTED I WILL NEED SOME INFORMATION
           JUST FOR FUN 🙂</motion.h1>
           <div className='mt-6 flex flex-col items-center md:block'>
             <motion.div
             initial={{ y: -70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
               transition={{ ease: easeInOut, duration: .3, delay: .4 }}
               className='md:flex flex flex-col md:flex-row justify-center md:justify-center items-center' >
               <h1 className='text-white text-shadow text-2xl md:text-3xl'>What should i call you?:</h1>
               <form onSubmit={setName}>
                 <div className='relative'>
                   <input type="text" className='outline-none border-b-4 bg-transparent text-2xl md:ml-4 mt-4 md:mt-0 box-shadow uppercase text-white' onChange={handleInputChange} value={input} maxLength={16} />
                   <div title='random name' onClick={getRandomName} className={`absolute right-0 bottom-3 cursor-pointer ${random ? 'animate-spin' : ''}`}>
                   <Randomize fill={ "white" } width={20} height={20} />
                   </div>
                 </div>
                 
             </form>
             </motion.div>
             <motion.p
               initial={{ y: -70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
               transition={{ ease: easeInOut, duration: .3, delay: .4 }}
                className='text-white text-lg mt-2'>Shold i call you mista? JK</motion.p>
             
          </div>
             <motion.button
               initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
               transition={{ ease: easeOut, delay: .6, duration: .3  }}
               onClick={setName}
              className='w-[250px] h-14 mt-6 text-2xl button-animation bg-[#E43535]'>
              Smaaashhh!!
            </motion.button>
            
        </div>
      </div>
    </motion.div>
  )
}

export default Test