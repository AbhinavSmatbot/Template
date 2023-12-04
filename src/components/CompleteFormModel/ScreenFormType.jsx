/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// let initialDataFormScreen = {
//      type:"customForm",
//      title:'Your Form',
//      button:'Continue',   
// }

const ScreenFormType = () => {
  const [activeScreen, setActiveScreen] = useState('Your Form');
  const [screenText, setscreenText] = useState('');
  const [screen,setScreen] = useState([{type:"customForm",title:'Your Form',button:'Continue'}]);
  const [expanded, setExpanded] = useState(false);
  console.log("screen",screen)
  function addAnotherScreen(e){
     e.preventDefault();
     if(screenText?.length>0){
          setExpanded((prev) => !prev)
          let obj = {type:"customForm",title:screenText,button:'Continue'}
          // setscreen([...screen,obj])
          setScreen((prevScreens) => [...prevScreens, obj]);  
          setscreenText('');
          // setExpanded(false);
          
     }

  }
 
  return (
    <>
    <div className='float-left w-full'>
       <div className='float-left w-full'>
        <div className='m-1'>
        {screen?.map((scr,index)=>(
       <div key={index} className={` ${activeScreen == scr.title?'bg-[#e3dcf0]' : 'bg-[#ffff]'} rounded p-2 w-full hover:bg-[#f9f6ff]`}>
        <button>{scr.title}</button>
       </div>
  )) 
       }
        </div>
        <div className='float-left w-full'>
          <div className='m-1'>
          {/* <button className='w-full flex items-center text-[#456def] rounded p-2 hover:bg-[#f9f6ff]' onClick={addAnotherScreen}><FaPlus className='mr-2' />Add New</button> */}
          <Accordion expanded={expanded} onChange={() => setExpanded((prev) => !prev)} className={` ${!expanded?'bg-[#ffffff]':'!bg-[#d6ddec] border border-[#d6ddec]'} !shadow-none float-left w-full rounded font-Secondary text-xs`}>
        <AccordionSummary
          className='bg-[#d6ddec] rounded font-Secondary text-xs hover:bg-[#e4e8f1]'
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='flex items-center'><FaPlus className='mr-2' /> Add New</Typography>
        </AccordionSummary>
        <AccordionDetails className='bg-[#d6ddec] float-left'>
          <Typography className='p-1 float-left w-full bg-[#ffffff] rounded'>
            <form>
               <input className='outline-none w-full border h-10 border-[#c7b5ec] rounded pl-1 my-2' type='text' value={screenText} onChange={(e)=>{setscreenText(e.target.value)}}/>
               <button onClick={addAnotherScreen} className={`${screenText?.length>1?'bg-[#456def] cursor-pointer' : 'bg-[#d8dee8] cursor-not-allowed'} float-right text-[white] py-2 px-3 text-sm font-Secondary font-medium rounded`}>Add</button>
            </form>
          </Typography>
        </AccordionDetails>
      </Accordion>
          </div>
          
        </div>
       
       </div>
    </div>

    </>
  )
}

export default ScreenFormType