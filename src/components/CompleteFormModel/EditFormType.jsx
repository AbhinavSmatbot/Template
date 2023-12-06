/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import { FaPlus } from "react-icons/fa6";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BsType } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
import { BsFillBadgeAdFill } from "react-icons/bs";
import { SlArrowRight } from "react-icons/sl";
import {
  Button,
  Popover,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

const EditFormType = () => {
  const [expanded, setExpanded] = useState(false);
  const [screenText, setscreenText] = useState('');
  const [screen,setScreen] = useState([{type:"Screen title",text:'Your Form'},{type:"Button",text:'Continue'},{type:"Body",text:'Select Add content to start building your form. To add new screens, select Add new in the Screens panel.'}]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  //   setSelectedOption(null);
  // };

  // const handleOptionClick = (option) => {
  //   setSelectedOption(option);
  // };

  // const open = Boolean(anchorEl);

  return (
    <>
    <div className='float-left w-[95%] m-3'>
    {screen?.map((item,index)=>(
      <div key={index} className='float-left w-full mb-3'>
         <Accordion className={` ${!expanded?'!bg-[#d6ddec]':'!bg-[#d6ddec] border border-[#d6ddec]'} !shadow-none float-left w-full !rounded font-Secondary text-xs`}>
      <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
        className='bg-[#d6ddec] !rounded !font-Secondary text-xs hover:bg-[#e4e8f1]'
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className='flex items-center text-[10px] !font-Secondary'>{item.type}</Typography>
      </AccordionSummary>
      <AccordionDetails className='bg-[#d6ddec] float-left w-full'>
        <Typography className='p-1 float-left w-full bg-[#ffffff] rounded'>
          <form className='float-left w-full' id='sdds'>
            { item.type != 'Body' && 
            <div className='relative'>
            <input name='text' className='outline-none w-[96%] border h-10 border-[#c7b5ec] rounded pl-1 my-2 mx-2' type='text' value={item.text} onChange={(e)=>{setscreenText(e.target.value)}}/>       
             <div className='absolute top-5 right-3'>
              {item.text.length>1 && 
              <p className='!font-Secondary text-xs font-semibold'>{item.text.length}</p>
              }
             </div>
            </div>
            }
            { item.type == 'Body' && 
            <div className='relative'>
            <textarea rows='6'name='textare' className='outline-none w-[96%] border resize-none border-[#c7b5ec] rounded pl-1 pr-7 my-2 mx-2' type='text' value={item.text} onChange={(e)=>{setscreenText(e.target.value)}}/>       
             <div className='absolute top-5 right-3'>
              {item.text.length>1 && 
              <p className='!font-Secondary text-xs font-semibold'>{item.text.length}</p>
              }
             </div>
            </div>
            
            }
          </form>
        </Typography>
      </AccordionDetails>
      </Accordion>

      </div>
     
    )) 
    }

    <div className='float-left relative'>
    <button className='flex items-center border border-[#c1c6cf] rounded p-2 cursor-pointer hover:bg-[#e4e8f1]'><FaPlus className='mr-2'/> Add Content</button>
    <div className='absolute top-[-131px] left-0 w-[150px] bg-[#ffffff] z-10 p-1 border border-[lightgray] rounded'>
     <p className='flex items-center p-2 rounded hover:bg-[#e4e8f1]'><BsType className='mr-1'/> Text  <SlArrowRight className='text-right ml-[60px]' /></p>
     <p className='flex items-center p-2 rounded hover:bg-[#e4e8f1]'><BsFillBadgeAdFill className='mr-1'/> Text answer <SlArrowRight className='text-right ml-1' /></p>
     <p className='flex items-center p-2 rounded hover:bg-[#e4e8f1]'><BsListUl className='mr-1'/> Selection <SlArrowRight className='text-right ml-5' /></p>
    </div>
    </div>

    
    </div>
    </>
  )
}

export default EditFormType