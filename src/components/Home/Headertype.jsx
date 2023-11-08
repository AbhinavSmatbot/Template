/* eslint-disable react/prop-types */
// import React from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Radio } from '@mui/material';
import { useState } from 'react';
import {BsImageFill} from 'react-icons/bs';
import {MdSlowMotionVideo} from 'react-icons/md';
import {CgFileDocument} from 'react-icons/cg';
import {SlLocationPin} from 'react-icons/sl';




const Headertype = (props) => {
     const [headerText, setHeaderText] = useState('');
     const [selectedMediaType, setselectedMediaType] = useState('');

     function getHeaderText(event){
       let text = event.target.value;
       setHeaderText(text);
     }
     function changeMediaType(event){
       let mediaType = event.target.value;
     // let mediaType = str
       console.log('media_type',mediaType);
          if (mediaType == selectedMediaType) {
               setselectedMediaType('');
          } else {
               setselectedMediaType(mediaType);
          }
     }
     return (
          <div className="w-full">
               {props.Headertype == 'text'? 
               <div className='w-full float-left mt-3 border border-[#e8f0ff] text-maincolor text-left rounded p-4'>
               <div className='text-left'>
                    <p className='text-sm font-semibold text-maincolor'>Header</p>
                    <p className='text-sm mt-2 mb-2 text-[rgba(28,43,51,.65)]'>Header your template message.</p>
                    {/* <input  */}
                    <form autoComplete="off" className='w-full'>
                         <FormControl className='w-full text-sm'>
                              <OutlinedInput placeholder="Enter message template name..." value={headerText} onChange={getHeaderText} className='text-sm h-12 font-Secondary' />
                             
                         </FormControl>
                    </form>
                    <div className='relative'>
                         <div className='absolute top-[-30px] right-3'>
                              <p className='text-xs font-Secondary'>{headerText.length}/60</p>
                         </div>
                    </div>
               </div>
               </div>
               :
               <div className='w-full float-left mt-3 border border-[#e8f0ff] text-maincolor text-left rounded p-4'>
               <div className='text-left'>
                   <div className='flex flex-row justify-between p-2'>
                    <div className='iamge-1 flex flex-col justify-between items-center border border-[#c7cae0] ml-1 p-2 cursor-pointer rounded-lg min-w-[100px] hover:bg-[mintcream]'>
                    <div className='relative'>
                         <div className='absolute top-[-17px] right-[16px]'>
                              <Radio
                                   checked={selectedMediaType === 'image'}
                                   onClick={changeMediaType}
                                   value="image"
                                   name="radio-buttons"
                                   inputProps={{ 'aria-label': 'A' }}
                              />
                         </div>
                    </div>
                    <BsImageFill fontSize='50px' color='lightgray'/>
                    <p className='text-center'>Image</p>
                    </div>
                    <div className='video-1 flex flex-col justify-between items-center border border-[#c7cae0] ml-1 p-2 cursor-pointer rounded-lg min-w-[100px] hover:bg-[mintcream]'>
                    <div className='relative'>
                         <div className='absolute top-[-17px] right-[16px]'>
                              <Radio
                                   checked={selectedMediaType === 'video'}
                                   onClick={changeMediaType}
                                   value="video"
                                   name="radio-buttons"
                                   inputProps={{ 'aria-label': 'A' }}
                              />
                         </div>
                    </div>
                     <MdSlowMotionVideo fontSize='50px' color='lightgray'/>
                     <p className='text-center'>Video</p>
                    </div>
                    <div className='document-1 flex flex-col justify-between items-center border border-[#c7cae0] ml-1 p-2 cursor-pointer rounded-lg min-w-[100px] hover:bg-[mintcream]'>
                    <div className='relative'>
                         <div className='absolute top-[-17px] right-[16px]'>
                              <Radio
                                   checked={selectedMediaType === 'document'}
                                   onClick={changeMediaType}
                                   value="document"
                                   name="radio-buttons"
                                   inputProps={{ 'aria-label': 'A' }}
                              />
                         </div>
                    </div>
                     <CgFileDocument fontSize='50px' color='lightgray'/>
                     <p className='text-center'>Documnet</p>
                    </div>
                    <div className='location-1 flex flex-col justify-between items-center border border-[#c7cae0] ml-1 p-2 cursor-pointer rounded-lg min-w-[100px] hover:bg-[mintcream]'>
                    <div className='relative'>
                         <div className='absolute top-[-17px] right-[16px]'>
                              <Radio
                                   checked={selectedMediaType === 'locations'}
                                   onClick={changeMediaType}
                                   value="locations"
                                   name="radio-buttons"
                                   inputProps={{ 'aria-label': 'A' }}
                              />
                         </div>
                    </div>
                     <SlLocationPin fontSize='50px' color='lightgray'/>
                     <p className='text-center'>Location</p>
                    </div>
                   </div>  
               </div>
               </div>
               }

               

          </div>
     )
}

export default Headertype