import React from 'react';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Headertype from './Headertype';

const Seconadmain = () => {
     const [headerType, setheaderType] = React.useState('');

     const handleChange = (event) => {
          setheaderType(event.target.value);
     };
     return (
          <>
               <div className="w-full font-Secondary">
                    <div>
                         <div className="flex flex-row justify-center items-center">
                              <div className="left-container w-[75%]">
                                   <div className='float-left w-full m-4 border border-[#e8f0ff] text-maincolor text-left rounded p-4'>
                                        <div className='text-left'>
                                             <p className='text-sm font-semibold text-maincolor'>Header <span className='text-xs font-medium bg-[#f6f9ff] p-1 rounded-md'>Optional</span></p>
                                             <p className='text-sm mt-2 mb-2'>Add a title or choose which type of media you will use for this header.</p>
                                        </div>
                                        <div>
                                             <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                  <Select
                                                       value={headerType}
                                                       onChange={handleChange}
                                                       displayEmpty
                                                       inputProps={{ 'aria-label': 'Without label' }}
                                                  >
                                                       <MenuItem value="">
                                                            <em>None</em>
                                                       </MenuItem>
                                                       <MenuItem value={'text'}>Text</MenuItem>
                                                       <MenuItem value={'media'}>Media</MenuItem>
                                                  </Select>
                                                  {/* <FormHelperText>Without label</FormHelperText> */}
                                             </FormControl>
                                        </div>
                                        {headerType != '' && <Headertype Headertype={headerType}/>}
                                   </div>

                              </div>
                              <div className="right-container w-[25%]">

                              </div>
                         </div>
                    </div>

               </div>
          </>
     )
}

export default Seconadmain