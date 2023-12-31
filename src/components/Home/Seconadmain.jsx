/* eslint-disable no-unused-vars */
import React from 'react';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Headertype from './Headertype';
import Preview from './Preview';
import Bodymain from '../BodyMain/Bodymain';
import { useDispatch, useSelector } from 'react-redux';
import { updateHeaderType } from '../../app/features/HeaderSlice';
import FooterTextFirld from '../FooterTextField/FooterTextFirld';
import Custom_buttons from '../Custom_buttons/Custom_buttons';
import ProductMarketingHeader from '../ProductMarketingHeader/ProductMarketingHeader';

const Seconadmain = () => {
     const { cateory, template_name, languages } = useSelector(state => state.home)
     const dispatch = useDispatch();
     const { header_Type } = useSelector(state => state.header)
     // const [headerType, setheaderType] = React.useState('');

     const handleChange = (event) => {
          // setheaderType(event.target.value);
          dispatch(updateHeaderType(event.target.value))
     };
     return (
          <>
               <div className="w-full font-Secondary">
                    <div>
                         <div className="flex flex-row justify-center items-center">
                              <div className="left-container w-[70%] h-[82vh] overflow-y-auto overflow-x-hidden">
                                   {cateory != "product message" &&
                                        <div className='float-left w-[95%] m-4 border border-[#e8f0ff] text-maincolor text-left rounded p-4'>
                                             <div className='text-left'>
                                                  <p className='text-sm font-semibold text-maincolor'>Header <span className='text-xs font-medium bg-[#c7c0c08f] p-1 rounded-md text-[black]'>Optional</span></p>
                                                  <p className='text-sm mt-2 mb-2'>Add a title or choose which type of media you will use for this header.</p>
                                             </div>
                                             <div>
                                                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                       <Select
                                                            value={header_Type}
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
                                             {header_Type != '' && <Headertype />}

                                        </div>
                                   }
                                   {cateory == "product message" &&
                                     <ProductMarketingHeader/> 
                                   }

                                   <Bodymain />
                                   <FooterTextFirld />
                                   <Custom_buttons />

                              </div>
                              <div className="right-container w-[30%]">
                                   <Preview />
                              </div>
                         </div>
                    </div>

               </div>
          </>
     )
}

export default Seconadmain