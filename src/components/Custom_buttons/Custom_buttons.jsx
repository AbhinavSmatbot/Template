/* eslint-disable no-prototype-builtins */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
// import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { updateButtonType, upadateQuickButton_arr, upadateToActionsButton_arr } from '../../app/features/ButtonsSlice';
import CalltoActionsButton from '../CalltoActions_button/CalltoActionsButton';
import QuickReplay_button from '../QuickReplay_button/QuickReplay_button';
import FormCategeoryButton from '../FormCategeoryButton/FormCategeoryButton';
import ProductMarketingButton from '../ProductMarketingHeader/ProductMarketingButton';


// const StyledMenu = styled((props) => (
//      <Menu
//        elevation={0}
//        anchorOrigin={{
//          vertical: 'bottom',
//          horizontal: 'right',
//        }}
//        transformOrigin={{
//          vertical: 'top',
//          horizontal: 'right',
//        }}
//        {...props}
//      />
//    ))(({ theme }) => ({
//      '& .MuiPaper-root': {
//        borderRadius: 6,
//        marginTop: theme.spacing(1),
//        minWidth: 180,
//        color:
//          theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
//        boxShadow:
//          'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
//        '& .MuiMenu-list': {
//          padding: '4px 0',
//        },
//        '& .MuiMenuItem-root': {
//          '& .MuiSvgIcon-root': {
//            fontSize: 18,
//            color: theme.palette.text.secondary,
//            marginRight: theme.spacing(1.5),
//          },
//          '&:active': {
//            backgroundColor: alpha(
//              theme.palette.primary.main,
//              theme.palette.action.selectedOpacity,
//            ),
//          },
//        },
//      },
//    }));


const Custom_buttons = () => {
     const { button_Types, quickReplaybutton_array,callToactionbutton_array } = useSelector(state => state.button);
     const {cateory,template_name,languages} = useSelector(state=>state.home);
     console.log('categeory type',cateory);
     const dispatch = useDispatch();
     const [button_Type, setbuttonType] = useState('');
     const [anchorEl, setAnchorEl] = useState(null);
     // const [QuickbuttonArray, setQuickButtonArray] = useState([]);
     const [disabledMarketingopt, setdisabledMarketingopt] = useState(false);
     const [disabledvisitWebsite, setdisabledvisitWebsite] = useState(false);
     const [disabledcallPhone, setdisabledcallPhone] = useState(false);
     const [disabledcompleteForm, setdisabledcompleteForm] = useState(false);
     const [disabledoffercode, setdisabledoffercode] = useState(false);
     const [formButtondisabled, setformButtondisabled] = useState(false);
     const [allButtons,setallButtons] = useState([]);
     

     console.log('button_Type', button_Type);
     console.log('redux_button_type', button_Types);
     console.log('Quickbutton_array', quickReplaybutton_array);
     console.log('calltoactionsbutton_array', callToactionbutton_array);
     useEffect(()=>{
          const marketingotp = quickReplaybutton_array.filter(e => {
               return e.type == "marketing opt-out"     
          });
          if(marketingotp?.length>0){
               setdisabledMarketingopt(true)
               setdisabledcompleteForm(true)
          }else{
               setdisabledMarketingopt(false);
          }
          const visitwebsite = callToactionbutton_array.filter(e => {
                return e.type == 'visit website' ;       
          });
          if(visitwebsite?.length>1){
               setdisabledvisitWebsite(true)
               setdisabledcompleteForm(true)
          }else{
               setdisabledvisitWebsite(false);
          }
          const hideCallphone = callToactionbutton_array.filter(e => {
               return e.type == 'call phone number' ;         
          });
          if(hideCallphone?.length>0){
               setdisabledcallPhone(true);
               setdisabledcompleteForm(true)
          }else{
               setdisabledcallPhone(false);
          }
          const hideoffercode = callToactionbutton_array.filter(e => {
               return e.type == 'copy offer code' ;       
          });
          if(hideoffercode?.length>0){
               setdisabledoffercode(true);
               setdisabledcompleteForm(true)
          }else{
               setdisabledoffercode(false);
          }
          const hideoform = callToactionbutton_array.filter(e => {
               return e.type == 'complete form' ;       
          });
          if(hideoform?.length>0){
               setdisabledoffercode(true);
               setdisabledcallPhone(true);
               setdisabledvisitWebsite(true)
               setdisabledMarketingopt(true)
               setformButtondisabled(true);
          }else{
               setformButtondisabled(false); 
               // setdisabledcompleteForm(true)
          }
          console.log('maaaa',marketingotp);
          setallButtons([...quickReplaybutton_array, ...callToactionbutton_array]);
          
     },[quickReplaybutton_array,callToactionbutton_array])

     const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
     };
     const handleClose = () => {
          setAnchorEl(null);
     };
     const getSelectedButtonType = (type) => {
          setAnchorEl(null);
          if (type == 'custom') {
               dispatch(updateButtonType('quick replay'));
          }else if(type == 'marketing opt-out'){
               dispatch(updateButtonType('quick replay'));
          }else {
               dispatch(updateButtonType("call to actions"));
          }
          if (allButtons?.length <= 10) {
               console.log('selectedButtonTyep', type)
               setbuttonType(type);
               if (type == 'custom') {
                    setdisabledcompleteForm(true)
                    dispatch(upadateQuickButton_arr([...quickReplaybutton_array, { mainType: 'quick replay', type: type, text: '' }]));
               } else if (type == 'marketing opt-out') {
                    setdisabledMarketingopt(true);
                    setdisabledcompleteForm(true)
                    dispatch(upadateQuickButton_arr([...quickReplaybutton_array, { mainType: 'quick replay', type: type, text: 'Stop promotions', footerText: 'Not interested? Tap Stop promotions', accept: false }]));
               } else if(type == 'call phone number'){
                    setdisabledcompleteForm(true)
                    let obj = {
                         mainType:'call to actions',
                         type:"call phone number",
                         text:'',
                         country:'+91',
                         phone:'' 
                    }
                    dispatch(upadateToActionsButton_arr([...callToactionbutton_array,obj]))
               }else if(type == 'visit website'){
                    setdisabledcompleteForm(true)
                    let obj = {
                         mainType:'call to actions',
                         type:type,
                         text:'',
                         url_type:"static",
                         url:''
                    }
                    dispatch(upadateToActionsButton_arr([...callToactionbutton_array,obj]))
               }else if(type == 'copy offer code'){
                    setdisabledcompleteForm(true)
                    let obj = {
                         mainType:'call to actions',
                         type:type,
                         text:'Copy offer code',
                         sample_text:'' 
                    }
                    dispatch(upadateToActionsButton_arr([...callToactionbutton_array,obj]))
               }else if(type == "complete form"){
                    setdisabledcompleteForm(false)
                    setformButtondisabled(true);
                    let obj = {
                         mainType:'call to actions',
                         type:type,
                         text:'',
                         form_type:''
                    }
                    dispatch(upadateToActionsButton_arr([...callToactionbutton_array,obj]))
               }
               setallButtons([...quickReplaybutton_array, ...callToactionbutton_array]);
          } else {
               alert('yon have cross the limit please delete any button and add new button')
          }
     }
     console.log('buttonArray', quickReplaybutton_array);
     return (
          <>
               <div>
                    <div className='w-full'>
                         <div className='w-[95%] float-left m-4 text-maincolor text-left rounded pb-6'>
                              <div className='text-left'>
                                   <p className='text-sm font-semibold text-maincolor'>Buttons {cateory != "form" && <span className='text-xs font-medium bg-[#c7c0c08f] p-1 rounded-md text-[black]'>Optional</span>}</p>
                                   <p className='text-sm mt-2 mb-2'>Create buttons that let customers respond to your message or take action.</p>
                              </div>
                              <div className='my-3 font-Secondary'>
                                   {cateory != "form" && 
                                   <Button disabled={formButtondisabled || cateory == "product message"} className={`!text-xs ${allButtons.length >= 10 ? "!bg-[lightgray] !cursor-not-allowed" : formButtondisabled? '!bg-[lightgray] !cursor-not-allowed' : ''}`}
                                   id="demo-customized-button"
                                   aria-controls={anchorEl ? 'demo-customized-menu' : undefined}
                                   aria-haspopup="true"
                                   aria-expanded={anchorEl ? 'true' : undefined}
                                   variant="contained"
                                   onClick={handleClick}
                                   endIcon={<KeyboardArrowDownIcon />}
                                    >
                                   <FaPlus className='mr-2' />  Add Button
                                    </Button>
                                   }
                                   
                                   <Menu
                                        id="demo-customized-menu"
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                   >
                                        <p className='p-1 text-left font-Secondary'>Quick reply buttons</p>
                                        {cateory != 'utility' && <MenuItem disabled={disabledMarketingopt} value='marketing opt-out' onClick={() => getSelectedButtonType("marketing opt-out")} disableRipple>
                                             <p className='text-sm font-Secondary'>Marketing opt-out</p>
                                        </MenuItem>}
                                        
                                        <MenuItem value='custom' onClick={() => getSelectedButtonType("custom")} disableRipple>
                                             <p className='text-sm font-Secondary'>Custom</p>
                                        </MenuItem>
                                        <Divider sx={{ my: 0.5 }} />
                                        <p className='p-1 text-center font-Secondary'>Call-to-action buttons</p>
                                        <MenuItem disabled={disabledcallPhone} value='call phone number' onClick={() => getSelectedButtonType("call phone number")} disableRipple className='text-xs flex flex-col justify-start items-start text-left font-Secondary'>
                                             <p className='text-sm font-Secondary'>Call phone number</p>
                                             <p className='text-[11px] font-Secondary'>1 button maximum</p>
                                        </MenuItem>
                                        <MenuItem disabled={disabledvisitWebsite} value='visit website' onClick={() => getSelectedButtonType("visit website")} disableRipple className='text-xs flex flex-col justify-start items-start text-left font-Secondary'>
                                             <p className='text-sm font-Secondary text-left'>Visit Website</p>
                                             <p className='text-[11px] font-Secondary text-left'>2 buttons maximum</p>
                                        </MenuItem>
                                        <MenuItem disabled={disabledcompleteForm} value='complete form' onClick={() => getSelectedButtonType("complete form")} disableRipple className='text-xs flex flex-col justify-start items-start text-left font-Secondary'>
                                             <p className='text-sm font-Secondary'>Complete form</p>
                                             <p className='text-[11px] font-Secondary'>1 button maximum</p>
                                        </MenuItem>
                                        <MenuItem disabled={disabledoffercode} value='copy offer code' onClick={() => getSelectedButtonType("copy offer code")} disableRipple className='text-xs flex flex-col justify-start items-start text-left font-Secondary'>
                                             <p className='text-sm font-Secondary'>Copy offer code</p>
                                             <p className='text-[11px] font-Secondary'>1 button maximum</p>
                                        </MenuItem>
                                   </Menu>
                                   <p className='text-xs font-Secondary mt-1 font-medium'>If you add more than three buttons, they will appear in a list.</p>
                              </div>
                              {(allButtons?.length > 0 && cateory != "form") &&
                                   <div>
                                        {/* {button_Types == "call to actions" &&
                                             <CalltoActionsButton />
                                        }
                                        {button_Types == "quick replay" &&
                                             <QuickReplay_button/>
                                        } */}
                                       {quickReplaybutton_array?.length>0 &&
                                       <QuickReplay_button/>
                                       }
                                       {callToactionbutton_array?.length>0 &&
                                        <CalltoActionsButton />
                                       }
                                   </div>
                              }
                              {cateory == "form" && 
                              <div>
                                   <FormCategeoryButton/>
                              </div>
                              }
                              {cateory == "product message" && 
                                <ProductMarketingButton/>
                              }
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Custom_buttons