import React, { useEffect, useRef } from 'react'
import GIFS from './Gifs'
import { motion, AnimatePresence, easeInOut, easeIn, easeOut } from 'framer-motion'
import { useState } from 'react'
import TypingAnimatoin from './TypingAnimation'
import options from './ApiRequst'
import axios from 'axios'
import Randomize from '../Components/SVG/Randomize'

const PixelGpt = () => {
  const [input, setInput] = useState("");
  const [elements, setElements] = useState([]);
  const [fetchedData, setFetchedData] = useState();
  const [isFetching, setIsFetching] = useState(true);
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * GIFS.length))
  const [dir, setDir] = useState('');
  const [error, setError] = useState(false);
  const messageListRef = useRef(null);
  const inputFocus = useRef(null);

  
  const scrollTop = ()=>{
  const messageList = messageListRef.current;
  if (messageList) {
    messageList.scrollTop = messageList.scrollHeight;
  }
  }
  const fetchData = async () => {
    axios.request(options).then(resp => {
      setFetchedData(resp.data);
      console.log(resp)
      setIsFetching(false)
      inputFocus.current.disabled  = false;
      inputFocus.current.focus();
      scrollTop();
    }).catch(err => {
      console.log(err)
      setError(true)
      setIsFetching(false)
    inputFocus.current.disabled = true;
    })
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    if (fetchedData?.choices?.length > 0) {
      setElements(prevResults => [...prevResults, fetchedData?.choices[0]?.message?.content]);
    }
  }, [fetchedData]);

  useEffect(() => {
    isArabicOrEnglish(input);
  }, [dir]);

  const appendMessage = (e) => {
    e.preventDefault();
    isArabicOrEnglish(input);
    scrollTop();
    setIsFetching(true)
    inputFocus.current.disabled = true;
    const parsedData = JSON.parse(options.data);
    parsedData.messages[0].content = input; // update the content field
    options.data = JSON.stringify(parsedData);
    setElements(prevResults => [...prevResults, input]);
    setFetchedData('');
    fetchData();
    setInput('');
  }
  
  function isArabicOrEnglish(text) {
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    if (charCode >= 0x0600 && charCode <= 0x06FF) {
      // Unicode range for Arabic characters
      setDir('rtl')
    } else if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      // Unicode range for English characters
      setDir('ltr')
    }
  }
  return 'Unknown';
  }


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: easeInOut, duration: .4 }}
      className='h-screen w-screen'>
      <img
        src={GIFS[randomNum]}
        className='w-screen h-screen object-cover'
        alt=''
      />
      <div className='w-screen h-full bg-black/80 absolute top-0 left-0 flex flex-col gap-2 p-4 flex-1'>
        <div className='w-full h-full bg-black/25 border border-white/25 p-4 overflow-y-auto ' dir={dir == 'rtl' ? 'rtl' : 'ltr'}
          ref={messageListRef}
        >
          {
              elements.map((result, index) =>
                index %2 == 0 ? <h1 className="text-white text-xl" key={index}>
                  <span className="text-[#E43535] text-xl w-[90%]">OPENAI/GPT3.5/&gt; </span>
                    <TypingAnimatoin animateText={result} />
                </h1> : <div className='relative'>
                    <h1 className="text-white text-xl" key={index}>
                    <span className="text-[#3538e4] text-xl">{ localStorage.getItem("user_name").toUpperCase() }/&gt; </span>
                      <span>{result}</span>
                    </h1>
                </div>
            
          )}

          {isFetching && (
            <div className="text-white flex items-center gap-2">
              <h1 className='text-xl text-white'>{ dir == 'rtl' ? "طب متستنى شويتين يجدعانه!" : "Loading..." }</h1>
              <div className='animate-spin'>
                <Randomize width={15} height={15} fill={"#E43535"}/>
              </div>
            </div>
          )}

          {
            error && (
              <div className="">
                <h1 className='text-xl text-white'>{dir == 'rtl' ? "يبدو ان هناك خطأ ما " : "There was an erro please check your internet connection or refresh the page"}</h1>
                <h1 className='underline text-xl text-blue-600 cursor-pointer' onClick={()=> window.location.reload()}>Refresh</h1>
            </div>
            )
          }

        </div>
        <div>
          <form onSubmit={appendMessage}>
            <input
              ref={inputFocus}
              type='text'
              onChange={(e)=> setInput(e.target.value)}
              placeholder='SEARCH HERE'
              className={`${isFetching ? 'opacity-25' : ''} max-h-[200px] min-h-[50px] overflow-y-auto h-14 text-white text-xl p-3 focus:border-[#E43535]  w-full outline-none border border-white/35 bg-black/25`}
              value={input}
            />

          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default PixelGpt