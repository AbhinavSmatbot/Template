/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { FormControl, OutlinedInput, InputLabel, Radio} from '@mui/material';

const ProductMarketingHeader = () => {
     const [productType, setproductType] = useState('');
     const [productheader, setproductheader] = useState('');
     const handleChange = (event) => {
          const selectedValue = event.target.value;
          if (selectedValue == productType) {
               setproductType('');
          } else {
               setproductType(selectedValue);
               // dispatch(updateCategory(selectedValue))
          }
     };
     function getHeaderText(e){
        let hea = e.target.value;
        if(hea?.length<=60){
          setproductheader(hea)
        }
     }
     return (
          <>
               <div className="w-full">
                    <div className='w-[95%] float-left m-4 border border-[#e8f0ff] text-maincolor text-left rounded p-4'>
                         <div className='text-left'>
                              <p className='text-sm font-semibold text-maincolor'>Template format</p>
                              <p className='text-sm mt-2 mb-2 text-[rgba(28,43,51,.65)]'>Choose the message format that best fits your needs.</p>
                              <div>
                                   <div className='float-left flex flex-row justify-between items-center p-1 rounded-md mt-5 hover:bg-[#f0f0f1]'>
                                        <div className='p-1'>
                                             <Radio
                                                  checked={productType === 'Catalogue message'}
                                                  onClick={handleChange}
                                                  value="Catalogue message"
                                                  name="radio-buttons"
                                                  inputProps={{ 'aria-label': 'A' }}
                                             />
                                        </div>
                                        <div className='ml-1'>
                                             <h3 className='text-[#1c1c1c] font-medium text-sm'>Catalogue message</h3>
                                             <p className='text-[#1c1c1c] text-xs font-medium'>
                                             Include the entire catalogue to give your users a comprehensive view of all of your products.
                                             </p>
                                        </div>
                                   </div>
                                   <div className='float-left flex flex-row justify-between items-center p-1 rounded-md mt-5 hover:bg-[#f0f0f1]'>
                                        <div className='p-1'>
                                             <Radio
                                                  checked={productType === 'Multi-product message'}
                                                  onClick={handleChange}
                                                  value="Multi-product message"
                                                  name="radio-buttons"
                                                  inputProps={{ 'aria-label': 'A' }}
                                             />
                                        </div>
                                        <div className='ml-1'>
                                             <h3 className='text-[#1c1c1c] font-medium text-sm'>Multi-product message</h3>
                                             <p className='text-[#1c1c1c] text-xs font-medium'>
                                             Include up to 30 products from the catalogue. Useful for showcasing new collection or a specific product category.
                                             </p>
                                        </div>
                                   </div>

                              </div>
                         </div>
                    </div>
                    <div className='w-[95%] float-left m-4 text-maincolor text-left p-4'>
                         <div className='text-left'>
                         <p className='text-sm font-semibold text-maincolor'>Catalogue</p>
                         <p className='text-xs mt-2 mb-2 text-[#1c1c1c] font-medium'>Choose a catalogue to send a list of items to your customers. This is connected with your WhatsApp Business account. Up to 30 items can be sent.</p>
                         </div>
                         <div className='mt-2'>
                         <Button className='font-Secondary' style={{textTransform:"none"}} variant="contained">Manage catalogue connection</Button>
                         </div>
                    </div>
                    <div className='w-[95%] float-left m-4 border border-[#e8f0ff] text-maincolor text-left rounded p-4'>
                         <div className='text-left'>
                              <p className='text-sm font-semibold text-maincolor'>Header</p>
                              <p className='text-sm mt-2 mb-2 text-[rgba(28,43,51,.65)]'>Add a title for this header.</p>
                              {/* <input  */}
                              <form autoComplete="off" className='w-full'>
                                   <FormControl className='w-full text-sm'>
                                        <OutlinedInput placeholder="Enter message template name..." value={productheader} onChange={getHeaderText} className='text-sm h-12 font-Secondary' />

                                   </FormControl>
                              </form>
                              <div className='relative'>
                                   <div className='absolute top-[-30px] right-3'>
                                        <p className='text-xs font-Secondary'>{productheader.length}/60</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default ProductMarketingHeader