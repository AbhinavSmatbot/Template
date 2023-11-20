/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { IoClose } from "react-icons/io5";
import { IoWarningOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { updateButtonType, upadateQuickButton_arr, } from '../../app/features/ButtonsSlice';


const QuickReplay_button = () => {
  const { button_Types, quickReplaybutton_array } = useSelector(state => state.button)
  const dispatch = useDispatch();
  console.log('getSelected Vaue', button_Types);
  console.log('all_button', quickReplaybutton_array);
  const checkedMarktingopt = (index, bool) => {
    // console.log('dsds',bool)
    const newFieldSets = [...quickReplaybutton_array];
    newFieldSets[index] = { ...newFieldSets[index], accept: bool };
    dispatch(upadateQuickButton_arr(newFieldSets));
    // setQuickButtonArray(newFieldSets);
  }
  const getQuickReplayButtonTextValue = (index, fieldName, fieldValue) => {
    if (fieldValue.length <= 25) {
         const newFieldSets = [...quickReplaybutton_array];
         newFieldSets[index] = { ...newFieldSets[index], [fieldName]: fieldValue };
        //  setQuickButtonArray(newFieldSets);
         dispatch(upadateQuickButton_arr(newFieldSets));
    }
  };
  const deleteQuickReplayField = (index, type) => {
    const newFieldSets = [...quickReplaybutton_array];
    newFieldSets.splice(index, 1);
    // setQuickButtonArray(newFieldSets);
    dispatch(upadateQuickButton_arr(newFieldSets));
    // if (type && type == 'marketing opt-out') {
    //      setdisabledMarketingopt(false);
    // }
};
  return (
    <>
      {
        quickReplaybutton_array?.length > 0 &&
           <div className='w-full float-left mt-3 mb-5 border border-[#e8f0ff] text-maincolor text-left rounded p-4'>
                           <div className='text-left'>
                                <p className='text-sm font-semibold text-maincolor'>Quick reply</p>
                                {quickReplaybutton_array?.map((item, index) => (
                                     <div key={index}>
                                        {item.type == "marketing opt-out" &&
                                        <div className='w-[96%] bg-[#efefe857] border border-[#e8f0ff] rounded p-5 my-3'>
                                        <div className='flex flex-row justify-center items-center'>
                                        <div className='w-[25%]'>
                                             <label className='text-xs font-Secondary font-medium' htmlFor='outlined-size-small'>Type</label>
                                             <TextField className="w-full !font-Secondary"
                                                  id="outlined-size-small"
                                                  defaultValue={item.type}
                                                  size="small"
                                                  disabled
                                                  title={item.type}
                                                  style={{fontFamily:'font-Secondary',fontSize:'10px', fontWeight:'500',color:'black'}}
                                             />
                                        </div>
                                        <div className='w-[37%] ml-1'>
                                             <label className='text-xs font-Secondary font-medium' htmlFor='outlined-size-small1'>Button Text</label>
                                             <TextField className="w-full !font-Secondary"
                                                  id="outlined-size-small1"
                                                  placeholder="Enter your button text"
                                                  size="small"
                                                  value={item.text} 
                                                  title={item.text}  
                                                  disabled
                                                  style={{fontFamily:'font-Secondary',fontSize:'10px', fontWeight:'500',color:'black'}}
                                             />
                                        </div>
                                        <div className='w-[37%] ml-1'>
                                             <label className='text-xs font-Secondary font-medium' htmlFor='outlined-size-small1'>Footer Text</label>
                                             <TextField className="w-full !font-Secondary"
                                                  id="outlined-size-small1"
                                                  placeholder="Enter your button text"
                                                  size="small"
                                                  value={item.footerText}
                                                  title={item.footerText}  
                                                  disabled
                                                  style={{fontFamily:'font-Secondary',fontSize:'10px', fontWeight:'500',color:'black'}}
                                             />
                                        </div>
                                        {/* <div className='relative'>
                                             <div className='absolute top-[4px] right-2'>
                                                  <p className='text-xs font-Secondary'>{item.text.length}/25</p>
                                             </div>
                                        </div> */}
                                        <div className='relative'>
                                             <div className='absolute top-[-8px] right-[-56px] p-1 cursor-pointer rounded hover:bg-[lightgray]' onClick={() => deleteQuickReplayField(index,item.type)}>
                                                  <IoClose fontSize="26px" />
                                             </div>

                                        </div>
                                        </div>
                                         <div className=' text-[black] flex flex-row justify-start mt-3'>
                                             <FormControlLabel control={<Checkbox value={item.accept} onChange={(e)=>checkedMarktingopt(index,e.target.checked)}
                                              style={{fontSize:"28px"}} />}  /> 
                                             <p className='text-xs font-medium text-[black]'>I understand that it's Smatbot Official's responsibility to stop sending marketing messages to customers who opt out.</p>
                                         </div>  
                                         <p className='p-3 mt-2 bg-[#ebc9d9] rounded font-medium text-[black] text-xs'><IoWarningOutline fontSize={"18px"} className="float-left mr-2"/>This box must be ticked to add this button.</p>      
                                        </div>

                                        }
                                        {item.type == "custom" && 
                                         <div  className='w-[96%] bg-[#efefe857] border border-[#e8f0ff] rounded p-5 my-3 flex flex-row justify-center items-center'>
                                         <div className='w-[35%] mr-1'>
                                              <label className='text-xs font-Secondary font-medium' htmlFor='outlined-size-small'>Type</label>
                                              <TextField className="w-full !font-Secondary"
                                                   id="outlined-size-small"
                                                   defaultValue={item.type}
                                                   size="small"
                                                   disabled
                                                   style={{fontFamily:'font-Secondary',fontSize:'10px', fontWeight:'500',color:'black'}}
                                              />
                                         </div>
                                         <div className='w-[65%] ml-1'>
                                              <label className='text-xs font-Secondary font-medium' htmlFor='outlined-size-small1'>Button Text</label>
                                              <TextField className="w-full !font-Secondary"
                                                   id="outlined-size-small1"
                                                   placeholder="Enter your button text"
                                                   size="small"
                                                   value={item.text}
                                                   onChange={(e) => getQuickReplayButtonTextValue(index, 'text', e.target.value)}
                                                   style={{fontFamily:'font-Secondary',fontSize:'10px', fontWeight:'500',color:'black'}}
                                              />

                                         </div>
                                         <div className='relative'>
                                              <div className='absolute top-[4px] right-2'>
                                                   <p className='text-xs font-Secondary'>{item.text.length}/25</p>
                                              </div>
                                         </div>
                                         <div className='relative'>
                                              <div className='absolute top-[-8px] right-[-56px] p-1 cursor-pointer rounded hover:bg-[lightgray]' onClick={() => deleteQuickReplayField(index)}>
                                                   <IoClose fontSize="26px" />
                                              </div>

                                         </div>
                                         </div>
                                        }

                                     </div>
                                ))}
                           </div>
                           </div>
      }
    </>
  )
}

export default QuickReplay_button