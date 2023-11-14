/* eslint-disable no-unused-vars */
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Custom_buttons = () => {
     const [button_Type, setbuttonType] = React.useState('');
     const buttonChange = (event) => {
          setbuttonType(event.target.value);
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
                              <FormControl sx={{ m: 1, minWidth: 180 }}>
                                   <Select className='font-Secondary'
                                        value={button_Type}
                                        onChange={buttonChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                   >
                                         <p className='p-1 text-center'>Quick reply buttons</p>
                                        <MenuItem value="" className='text-xs'>
                                             <em>Add Button</em>
                                        </MenuItem>
                                       
                                        <MenuItem value={'marketing opt-out'} className='text-xs'>Marketing opt-out</MenuItem>
                                        <MenuItem value={'custom'} className='text-xs'>Custom</MenuItem>
                                        <p className='p-1 text-center border-t border-[lightgray]'>Call-to-action buttons</p>
                                        <MenuItem value={'custom'} className='text-xs'>
                                            <p>Visit Website</p> 
                                            <p>2 buttons maximum</p>
                                        </MenuItem>
                                        <MenuItem value={'custom'} className='text-xs'>Custom</MenuItem>
                                        <MenuItem value={'custom'} className='text-xs'>Custom</MenuItem>
                                        <MenuItem value={'custom'} className='text-xs'>Custom</MenuItem>
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