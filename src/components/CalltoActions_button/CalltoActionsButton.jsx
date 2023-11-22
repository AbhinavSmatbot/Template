/* eslint-disable no-unused-vars */
// import React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoClose } from "react-icons/io5";
import { IoWarningOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { updateButtonType,upadateToActionsButton_arr } from '../../app/features/ButtonsSlice';
import { useState } from 'react';

const CalltoActionsButton = () => {
     const { button_Types, callToactionbutton_array } = useSelector(state => state.button);
     const {cateory,template_name,languages} = useSelector(state=>state.home)
     // const [urlType, seturlType] = useState("static");
     const dispatch = useDispatch();
     // console.log('getSelected Vaue', button_Types);
     console.log('category type',cateory);
     const deleteQuickReplayField = (index,type) => {
          const newFieldSets = [...callToactionbutton_array];
          newFieldSets.splice(index, 1);
          dispatch(upadateToActionsButton_arr(newFieldSets));
          // if(type && type == 'marketing opt-out'){
          //      setdisabledMarketingopt(false); 
          // }
     };
     const getCallToActionbutton_array = (index, fieldName, fieldValue) => {
          if(fieldName == 'text'){
               if(fieldValue?.length<=24){
               const newFieldSets = [...callToactionbutton_array];
               newFieldSets[index] = { ...newFieldSets[index], [fieldName]: fieldValue };
               dispatch(upadateToActionsButton_arr(newFieldSets));
               }  
          }else{
               const newFieldSets = [...callToactionbutton_array];
               newFieldSets[index] = { ...newFieldSets[index], [fieldName]: fieldValue };
               dispatch(upadateToActionsButton_arr(newFieldSets));  
          }
     };

     const CompleteForm = ()=>{

     }
       
        
     // console.log('callToactionbutton',callToactionbutton_array);
     return (
          <>
          <div className='w-full float-left mt-3 mb-5 border border-[#e8f0ff] text-maincolor text-left rounded p-4'>
                    <div className='text-left'>
                         <p className='text-sm font-semibold text-maincolor'>Call to Actions</p>
                         {callToactionbutton_array?.map((item, index) => (
                              <div key={index}>
                                   {item.type == "call phone number" &&
                                        <div className='w-[96%] bg-[#efefe857] border border-[#e8f0ff] rounded px-2 py-5 my-3'>
                                             <div className='flex flex-row justify-center items-center'>
                                                  <div className='w-[20%] mr-1'>
                                                       <label className='text-xs font-Secondary font-medium' htmlFor='outlined-size-small2'>Type</label>
                                                       <TextField className="w-full !font-Secondary"
                                                            id="outlined-size-small2"
                                                            value={item.type}
                                                            size="small"
                                                            disabled
                                                            title={item.type}
                                                            style={{ fontFamily: 'font-Secondary', fontSize: '10px', fontWeight: '500', color: 'black' }}
                                                       />
                                                  </div>
                                                  <div className='w-[30%] mr-1'>
                                                  <label className='text-xs font-Secondary font-medium' htmlFor='outlined-size-small3'>Button Text</label>
                                                  <TextField className="w-full !font-Secondary"
                                                       id="outlined-size-small3"
                                                       placeholder="Enter your button text"
                                                       size="small"
                                                       value={item.text}
                                                       onChange={(e) => getCallToActionbutton_array(index, 'text', e.target.value)}
                                                       style={{ fontSize: '10px', fontWeight: '500', color: 'black' }}
                                                  />

                                                  </div>
                                                  <div className='w-[20%] mr-1'>
                                                       <label className='text-xs font-Secondary font-medium' htmlFor='outlined-size-small4'>Country</label>
                                                       {/* <TextField className="w-full !font-Secondary"
                                                            id="outlined-size-small1"
                                                            placeholder="Enter your button text"
                                                            size="small"
                                                            value={item.footerText}
                                                            title={item.footerText}
                                                            disabled
                                                            style={{ fontFamily: 'font-Secondary', fontSize: '10px', fontWeight: '500', color: 'black' }}
                                                       /> */}
                                                       <select style={{height:"40px",border:"1px solid lightgray",backgroundColor:"#efefe857",borderRadius:"4px",width:'100%'}} value={item.country} onChange={(e) => getCallToActionbutton_array(index, 'country', e.target.value)}>
                                                            <option>+91</option>
                                                            <option>-1</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                            <option>English</option>
                                                            <option>English</option>
                                                       </select>
                                                  </div>
                                                  <div className='w-[30%]'>
                                                  <label className='text-xs font-Secondary font-medium' htmlFor='outlined-size-small5'>Number</label>
                                                  <TextField className="w-full !font-Secondary"
                                                       id="outlined-size-small5"
                                                       value={item.phone}
                                                       onChange={(e) => getCallToActionbutton_array(index, 'phone', e.target.value)}
                                                       size="small"
                                                       style={{ fontFamily: 'font-Secondary', fontSize: '10px', fontWeight: '500', color: 'black' }}
                                                  />
                                             </div>
                                                  {/* <div className='relative'>
                                             <div className='absolute top-[4px] right-2'>
                                                  <p className='text-xs font-Secondary'>{item.text.length}/25</p>
                                             </div>
                                        </div> */}
                                                  <div className='relative'>
                                                       <div className='absolute top-[-8px] right-[-43px] p-1 cursor-pointer rounded hover:bg-[lightgray]' onClick={() => deleteQuickReplayField(index, item.type)}>
                                                            <IoClose fontSize="26px" />
                                                       </div>

                                                  </div>
                                             </div>
                                           
                                        </div>
                                   }
                                   {item.type == "visit website" &&
                                        <div className='w-[96%] bg-[#efefe857] border border-[#e8f0ff] rounded px-2 py-5 my-3 flex flex-row justify-center items-center'>
                                             <div className='w-[20%] mr-1'>
                                                  <label className='text-xs font-Secondary font-medium' htmlFor='outlined-size-small'>Action</label>
                                                  <TextField className="w-full !font-Secondary"
                                                       id="outlined-size-small"
                                                       defaultValue={item.type}
                                                       size="small"
                                                       disabled
                                                       title={item.type}
                                                       style={{ fontFamily: 'font-Secondary', fontSize: '10px', fontWeight: '500', color: 'black' }}
                                                  />
                                             </div>
                                             <div className='w-[30%] mr-1'>
                                                  <label className='text-xs font-Secondary font-medium' htmlFor='outlined-size-small1'>Button Text</label>
                                                  <TextField className="w-full !font-Secondary"
                                                       id="outlined-size-small1"
                                                       placeholder="Enter your button text"
                                                       size="small"
                                                       value={item.text}
                                                       onChange={(e) => getCallToActionbutton_array(index, 'text', e.target.value)}
                                                       style={{ fontFamily: 'font-Secondary', fontSize: '10px', fontWeight: '500', color: 'black' }}
                                                  />

                                             </div>
                                             <div className='w-[20%] mr-1'>
                                                  <label className='text-xs font-Secondary font-medium' htmlFor='outlined-size-small11'>URL type</label>
                                                  <FormControl sx={{ minWidth:80 }}>
                                                       <Select
                                                            id='outlined-size-small11'
                                                            value={item.url_type}
                                                            onChange={(e) => getCallToActionbutton_array(index, 'url_type', e.target.value)}
                                                            displayEmpty
                                                            inputProps={{ 'aria-label': 'Without label' }}
                                                            style={{fontSize:"12px"}}
                                                       >
                                                            <MenuItem value="static">Static</MenuItem>
                                                            <MenuItem value="dynamic">Dynamic</MenuItem>
                                                       </Select>
                                                       </FormControl>
                                             </div>
                                             <div className='w-[30%]'>
                                                  <label className='text-xs font-Secondary font-medium' htmlFor='outlined-size-small14'>Website URL</label>
                                                  <TextField
                                                       id="outlined-size-small14"
                                                       value={item.url}
                                                       placeholder='https://www.smatbot.com'
                                                       onChange={(e) => getCallToActionbutton_array(index, 'url', e.target.value)}
                                                       size="small"
                                                       style={{ fontFamily: 'font-Secondary', fontSize: '10px', fontWeight: '500', color: 'black' }}
                                                  />
                                             </div>
                                             {/* <div className='relative'>
                                                  <div className='absolute top-[4px] right-2'>
                                                       <p className='text-xs font-Secondary'>{item.text.length}/25</p>
                                                  </div>
                                             </div> */}
                                             <div className='relative'>
                                                  <div className='absolute top-[-8px] right-[-44px] p-1 cursor-pointer rounded hover:bg-[lightgray]' onClick={() => deleteQuickReplayField(index)}>
                                                       <IoClose fontSize="26px" />
                                                  </div>

                                             </div>
                                        </div>
                                   }
                                   {item.type == "copy offer code" && 
                                    <div className='w-[96%] bg-[#efefe857] border border-[#e8f0ff] rounded p-5 my-3'>
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
                                              style={{fontSize:'10px', fontWeight:'500',color:'black'}}
                                         />
                                    </div>
                                    <div className='w-[35%] ml-1'>
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
                                    <div className='w-[30%] ml-1 invisible'>
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
                                    <div className='relative'>
                                         <div className='absolute top-[-8px] right-[-56px] p-1 cursor-pointer rounded hover:bg-[lightgray]' onClick={() => deleteQuickReplayField(index,item.type)}>
                                              <IoClose fontSize="26px" />
                                         </div>

                                    </div>
                                    
                                    </div>
                                    </FormControl>
                                    <div className='mt-3'>
                                        <p className='text-[12px] font-semibold'>Add sample offer code</p>
                                        <p className='text-[12px] font-medium'>To help us review your message template, please add an example for your offer code.</p>
                                    </div>
                                    <div className='mt-3'>
                                        <label className='text-xs font-Secondary font-medium' htmlFor='offer_code'>Offer code</label>
                                        <TextField className="w-full !font-Secondary"
                                              id="offer_code"
                                              value={item.sample_text}
                                              size="small"
                                              onChange={(e) => getCallToActionbutton_array(index, 'sample_text', e.target.value)}
                                              style={{fontSize:'10px', fontWeight:'500',color:'black'}}
                                         />
                                    </div>
                                      {item.sample_text?.length<3 &&
                                      <p className='p-3 mt-2 bg-[#ebc9d9] rounded font-medium text-[black] text-xs'><IoWarningOutline fontSize={"18px"} className="float-left mr-2"/>Add simple text.</p>      
                                      }
                                     
                                    </div>
                                   }
                                   {item.type == "complete form" && 
                                    <div className='w-[96%] bg-[#efefe857] border border-[#e8f0ff] rounded px-2 py-5 my-3 flex flex-row justify-center items-center'>
                                    <div className='w-[20%] mr-1'>
                                         <label className='text-xs font-Secondary font-medium' htmlFor='outlined-size-small'>Action</label>
                                         <TextField className="w-full !font-Secondary"
                                              id="outlined-size-small"
                                              defaultValue={item.type}
                                              size="small"
                                              disabled
                                              title={item.type}
                                              style={{ fontFamily: 'font-Secondary', fontSize: '10px', fontWeight: '500', color: 'black' }}
                                         />
                                    </div>
                                    <div className='w-[30%] mr-1'>
                                         <label className='text-xs font-Secondary font-medium' htmlFor='outlined-size-small1'>Button Text</label>
                                         <TextField className="w-full !font-Secondary"
                                              id="outlined-size-small1"
                                              placeholder="Enter your button text"
                                              size="small"
                                              value={item.text}
                                              onChange={(e) => getCallToActionbutton_array(index, 'text', e.target.value)}
                                              style={{ fontFamily: 'font-Secondary', fontSize: '10px', fontWeight: '500', color: 'black' }}
                                         />

                                    </div>
                                    <div className='w-[30%] mr-1'>
                                         <label className='text-xs font-Secondary font-medium' htmlFor='outlined-size-small11'>Type of form</label>
                                         <FormControl sx={{ minWidth:80 }}>
                                              <Select
                                                   id='outlined-size-small11'
                                                   value={item.form_type}
                                                   onChange={(e) => getCallToActionbutton_array(index, 'form_type', e.target.value)}
                                                   displayEmpty
                                                   inputProps={{ 'aria-label': 'Without label' }}
                                                   style={{fontSize:"12px",width:"100%"}}
                                              >     
                                                  <MenuItem selected value="">Select one</MenuItem>
                                                  {cateory != 'utility' && <MenuItem style={{fontSize:"14px"}} value="revent">Register for an event</MenuItem>}
                                                  {cateory != 'utility' && <MenuItem style={{fontSize:"14px"}} value="quiz">Complete our quiz</MenuItem>}
                                                  {cateory != 'utility' && <MenuItem style={{fontSize:"14px"}} value="signup">Complete sign up</MenuItem>}
                                                  {cateory != 'utility' && <MenuItem style={{fontSize:"14px"}} value="preference">Update preference</MenuItem>}
                                                  {cateory == 'utility' && <MenuItem style={{fontSize:"14px"}} value="support">Get support</MenuItem>}
                                                  {cateory == 'utility' && <MenuItem style={{fontSize:"14px"}} value="feedback">Get feedback</MenuItem>}
                                                  <MenuItem style={{fontSize:"14px"}} value="custom">Custom form</MenuItem>
                                                   
                                                   
                                              </Select>
                                              </FormControl>
                                    </div>
                                    <div className='w-[20%]'>
                                         <label className='invisible' htmlFor='demo-customized-button111'>asdas</label>
                                         <Button className='!text-xs'
                                        id="demo-customized-button111"
                                        aria-haspopup="true"
                                        variant="contained"
                                        disableElevation
                                        onClick={CompleteForm}
                                        style={{padding:"8px 16px",height:"40px",width:"100%"}}
                                   >
                                        Create
                                   </Button>
                                    </div>
                                    {/* <div className='relative'>
                                         <div className='absolute top-[4px] right-2'>
                                              <p className='text-xs font-Secondary'>{item.text.length}/25</p>
                                         </div>
                                    </div> */}
                                    <div className='relative'>
                                         <div className='absolute top-[-8px] right-[-44px] p-1 cursor-pointer rounded hover:bg-[lightgray]' onClick={() => deleteQuickReplayField(index)}>
                                              <IoClose fontSize="26px" />
                                         </div>

                                    </div>
                               </div>
                                   } 

                              </div>
                         ))}


                    </div>
          </div>
          </>

     )
}

export default CalltoActionsButton