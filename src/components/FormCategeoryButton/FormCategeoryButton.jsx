/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
// import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import { updateButtonType,upadateToActionsButton_arr } from '../../app/features/ButtonsSlice';
import { updateFormType,upadateFormButtonText } from '../../app/features/FormSlice';
import CompleteFormMain from '../CompleteFormModel/CompleteFormMain';

const FormCategeoryButton = () => {
     const { button_Types, callToactionbutton_array } = useSelector(state => state.button);
     const {cateory,template_name,languages} = useSelector(state=>state.home);
     const {form_Type,button_text} = useSelector(state=>state.form);
     const [text, setbuttontext] = useState('');
     const [formType, setformType] = useState('');
     const [readytoopenForm ,setreadytoopenForm] = useState(false);
     const [open, setOpen] = React.useState(false);
     const dispatch = useDispatch();

      const handleClose = (bool) => {
       setOpen(false);
      };
     // useEffect(()=>{
     //      let obj = {
     //           mainType:'call to actions',
     //           type:"form",
     //           text:text,
     //           form_type:formType
     //      }
     //      // dispatch(upadateToActionsButton_arr([...callToactionbutton_array,obj]))
     // },[text, formType, callToactionbutton_array, dispatch])
     
     
     function getButtonText(event){
       let buttonText = event.target.value;
       if(buttonText?.length<=20){
          setbuttontext(buttonText);
          dispatch(upadateFormButtonText(buttonText))
       }
     }
     function getFormType(event){
          setformType(event.target.value); 
          dispatch(updateFormType(event.target.value))
     }
     const OpenFormModel = ()=>{
          if(button_text?.length>2 && form_Type?.length>3){
            setOpen(true);
            setreadytoopenForm(true);
          }
     }
     return (
          <> 
           <div>
           <div className='w-full float-left mt-3 mb-5 border border-[#e8f0ff] text-maincolor text-left rounded p-4'>
                    <div className='text-left'>
                         <p className='text-sm font-semibold text-maincolor'>Form button</p>
                         <div className='w-[96%] bg-[#efefe857] border border-[#e8f0ff] rounded px-2 py-5 my-3 flex flex-row justify-start items-center'>
                              <div className='w-[45%] mr-1'>
                                   <label className='text-xs font-Secondary font-medium' htmlFor='outlined-size-small1'>Button Text</label>
                                   <TextField className="w-full !font-Secondary"
                                        id="outlined-size-small1"
                                        placeholder="Enter your button text"
                                        size="small"
                                        value={text}
                                        onChange={getButtonText}
                                        style={{ fontFamily: 'font-Secondary', fontSize: '10px', fontWeight: '500', color: 'black',}}
                                   />
                                   <div className='relative'>
                                         <div className='absolute top-[-27px] right-1'>
                                              <p className='text-xs font-Secondary'>{text.length}/20</p>
                                         </div>
                              </div>

                              </div>
                              <div className='w-[35%] mr-1'>
                                   <label className='text-xs font-Secondary font-medium' htmlFor='outlined-size-small11'>Type of form</label>
                                   <FormControl sx={{ minWidth: "100%"}}>
                                        <Select
                                             id='outlined-size-small11'
                                             value={formType}
                                             onChange={getFormType}
                                             displayEmpty
                                             inputProps={{ 'aria-label': 'Without label' }}
                                             style={{ fontSize: "12px", width: "100%" }}
                                        >
                                             <MenuItem style={{fontSize:"14px"}} selected value="">Select one</MenuItem>
                                             <MenuItem style={{fontSize:"14px"}} value="revent">Register for an event</MenuItem>
                                             <MenuItem style={{fontSize:"14px"}} value="quiz">Complete our quiz</MenuItem>
                                             <MenuItem style={{fontSize:"14px"}} value="signup">Complete sign up</MenuItem>
                                             <MenuItem style={{fontSize:"14px"}} value="preference">Update preference</MenuItem>
                                             <MenuItem style={{fontSize:"14px"}} value="custom">Custom form</MenuItem>
                                        </Select>
                                   </FormControl>
                              </div>
                              <div className='w-[20%]'>
                                   <label className='invisible' htmlFor='demo-customized-button111'>asdas</label>
                                   <button className={`${form_Type == '' ? 'bg-[lightgray] cursor-not-allowed' : ''} ${button_text == '' ? 'bg-[lightgray] cursor-not-allowed' : ''} w-full h-[39px] bg-[#456def] rounded text-[14px] cursor-pointer py-2 px-4 text-center text-[white]`}
                                        id="demo-customized-button111"
                                        disabled={form_Type == '' || button_text == ''}
                                        onClick={OpenFormModel}
                                   >
                                        Create
                                   </button>
                              </div>
                              
                              
                         </div>

                    </div>
           </div>
           {readytoopenForm && 
             <CompleteFormMain close={handleClose} open={open}/>
           }
          </div>
               
          </>
     )
}

export default FormCategeoryButton