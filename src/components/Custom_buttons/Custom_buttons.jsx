/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaPlus } from "react-icons/fa6";


const Custom_buttons = () => {
     const [button_Type, setbuttonType] = useState('');
     
     const buttonChange = (event) => {
          setbuttonType(event.target.value);
          // setIsOpen(false);
          // dispatch(updateHeaderType(event.target.value))
     };
     console.log('button_type',button_Type)
     return (
          <>
               <div className='w-full'>
                    <div className='float-left w-[95%] m-4 text-maincolor text-left rounded'>
                         <div className='text-left'>
                              <p className='text-sm font-semibold text-maincolor'>Buttons <span className='text-xs font-medium bg-[#c7c0c08f] p-1 rounded-md text-[black]'>Optional</span></p>
                              <p className='text-sm mt-2 mb-2'>Create buttons that let customers respond to your message or take action.</p>
                         </div>
                         <div className='font-Secondary'>
                              <FormControl sx={{ m: 1, minWidth: 120 }}>
                                  

                                   <Select className='font-Secondary'
                                        // value={button_Type}
                                        onChange={buttonChange}
                                        placeholder='Add Button'
                                        // displayEmpty
                                        inputProps={{ 'aria-label': true }}
                                   >
                                         <p className='p-1 text-left font-Secondary'>Quick reply buttons</p>
                                        <MenuItem value="" className='text-xs font-Secondary'>
                                             <p className='text-sm font-Secondary text-left contents'><FaPlus className='mr-2' />Add Button</p>
                                        </MenuItem>
                                       
                                        <MenuItem value='marketing opt-out' onClick={buttonChange} className='text-sm font-Secondary text-left'>
                                             <p className='text-sm font-Secondary'>Marketing opt-out</p> 
                                        </MenuItem>
                                        <MenuItem value={'custom'} onClick={buttonChange} className='text-sm font-Secondary text-left'>
                                             <p className='text-sm font-Secondary'>Custom</p>
                                        </MenuItem>
                                        <p className='p-1 text-center border-t border-[lightgray] font-Secondary'>Call-to-action buttons</p>
                                        <MenuItem value={'visit website'} onClick={buttonChange} className='text-xs flex flex-col justify-start items-center text-left font-Secondary'>
                                            <p className='text-sm font-Secondary text-left'>Visit Website</p> 
                                            <p className='text-[11px] font-Secondary text-left'>2 buttons maximum</p>
                                        </MenuItem>
                                        <MenuItem value='call phone' onClick={buttonChange} className='text-xs flex flex-col justify-start items-start text-left font-Secondary'>
                                             <p className='text-sm font-Secondary'>Call phone number</p>
                                             <p className='text-[11px] font-Secondary'>1 button maximum</p>
                                        </MenuItem>
                                        <MenuItem value='form' onClick={buttonChange} className='text-xs flex flex-col justify-start items-start text-left font-Secondary'>
                                             <p className='text-sm font-Secondary'>Complete form</p>
                                             <p className='text-[11px] font-Secondary'>1 button maximum</p>
                                        </MenuItem>
                                        <MenuItem value='copy code' onClick={buttonChange} className='text-xs flex flex-col justify-start items-start text-left font-Secondary'>
                                             <p className='text-sm font-Secondary'>Copy offer code</p>
                                             <p className='text-[11px] font-Secondary'>1 button maximum</p>
                                        </MenuItem>
                                   </Select>
                                   {/* <FormHelperText>Without label</FormHelperText> */}
                              </FormControl>
                         </div>
                         {/* {header_Type != '' && <Headertype />} */}

                    </div>

               </div>
          </>
     )
}

export default Custom_buttons