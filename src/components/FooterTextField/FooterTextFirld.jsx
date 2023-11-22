/* eslint-disable no-unused-vars */
import React from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useDispatch, useSelector } from 'react-redux';
import { updateFooterText } from '../../app/features/BodyAndFooterSlice';

const FooterTextFirld = () => {
     const dispatch = useDispatch();
     const {footer_text} = useSelector(state=>state.body)
     function getFooterText(event){
          let text = event.target.value;
          if(footer_text?.length<=60){
               dispatch(updateFooterText(text))
          }
     }
  return (
    <>
    <div className='float-left w-[95%] m-4'>
    <div className='w-full float-left border border-[#e8f0ff] text-maincolor text-left rounded p-4'>
                         <div className='text-left'>
                              <p className='text-sm font-semibold text-maincolor'>Footer<span className='text-xs font-medium bg-[#c7c0c08f] p-1 rounded-md text-[black] ml-1'>Optional</span></p>
                              <p className='text-sm mt-2 mb-2'>Add a short line of text to the bottom of your message template.</p>
                              <form autoComplete="off" className='w-full'>
                                   <FormControl className='w-full text-sm'>
                                        <OutlinedInput placeholder="Enter footer text here..." value={footer_text} onChange={getFooterText} className='text-sm h-12 font-Secondary' />

                                   </FormControl>
                              </form>
                             
                              <div className='relative'>
                                   <div className='absolute top-[-30px] right-3'>
                                        <p className='text-xs font-Secondary'>{footer_text.length}/60</p>
                                   </div>
                              </div>
                         </div>
                    </div>

    </div>
    </>
  )
}

export default FooterTextFirld