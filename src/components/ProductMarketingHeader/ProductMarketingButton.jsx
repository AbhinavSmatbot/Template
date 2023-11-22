/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { updateButtonType, upadateToActionsButton_arr } from '../../app/features/ButtonsSlice';

const ProductMarketingButton = () => {
     const { button_Types, callToactionbutton_array } = useSelector(state => state.button);
     
     const dispatch = useDispatch();
     useEffect(() => {
          if (callToactionbutton_array?.length == 0) {
               let obj = {
                    mainType: 'call to actions',
                    type: "Launch catalogue",
                    text: 'View items',
                    sample_text: 'sample test products'
               }
               dispatch(upadateToActionsButton_arr([obj]))
          }
     })
     return (
          <>
               <div className='w-full float-left mt-3 mb-5 border border-[#e8f0ff] text-maincolor text-left rounded p-4'>
                    <div className='text-left'>
                         <p className='text-sm font-semibold text-maincolor'>Call to Actions</p>
                         {callToactionbutton_array?.map((item, index) => (
                              <div key={index}>
                                   {item.type == "Launch catalogue" &&
                                        <div className='w-[96%] bg-[#efefe857] border border-[#e8f0ff] rounded p-3 my-3'>
                                             <FormControl>
                                                  <div className='flex flex-row justify-start items-center'>
                                                       <div className='w-[35%]'>
                                                            <label className='text-xs font-Secondary font-medium' htmlFor='outlined-size-small'>Type</label>
                                                            <TextField className="w-full !font-Secondary"
                                                                 id="outlined-size-small"
                                                                 defaultValue={item.type}
                                                                 size="small"
                                                                 disabled
                                                                 title={item.type}
                                                                 style={{ fontSize: '10px', fontWeight: '500', color: 'black' }}
                                                            />
                                                       </div>
                                                       <div className='w-[30%] ml-1'>
                                                            <label className='text-xs font-Secondary font-medium' htmlFor='outlined-size-small1'>Button Text</label>
                                                            <TextField className="w-full !font-Secondary"
                                                                 id="outlined-size-small1"
                                                                 placeholder="Enter your button text"
                                                                 size="small"
                                                                 value={item.text}
                                                                 title={item.text}
                                                                 disabled
                                                                 style={{ fontSize: '10px', fontWeight: '500', color: 'black' }}
                                                            />
                                                       </div>
                                                       <div className='w-[40%] ml-1'>
                                                            <label className='text-xs font-Secondary font-medium' htmlFor='outlined-size-small1'>Button Text</label>
                                                            <TextField className="w-full !font-Secondary"
                                                                 id="outlined-size-small1"
                                                                 placeholder="Enter your button text"
                                                                 size="small"
                                                                 value={item.sample_text}
                                                                 title={item.sample_text}
                                                                 disabled
                                                                 style={{fontSize: '10px', fontWeight: '500', color: 'black' }}
                                                            />
                                                       </div>


                                                  </div>
                                             </FormControl>

                                        </div>
                                   }


                              </div>
                         ))}


                    </div>
               </div>
          </>
     )
}

export default ProductMarketingButton