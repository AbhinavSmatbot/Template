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
     const dispatch = useDispatch();
     const [button_Type, setbuttonType] = useState('');
     const [anchorEl, setAnchorEl] = useState(null);
     const [QuickbuttonArray, setQuickButtonArray] = useState([]);
     const [disabledMarketingopt, setdisabledMarketingopt] = useState(false);

     console.log('button_Type', button_Type);
     console.log('redux_button_type', button_Types);
     console.log('Quickbutton_array', quickReplaybutton_array);
     console.log('calltoactionsbutton_array', callToactionbutton_array);
     const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
     };
     const handleClose = () => {
          setAnchorEl(null);
     };
     const getSelectedButtonType = (type) => {
          setAnchorEl(null);
          if (type == ('custom' || 'marketing opt-out')) {
               dispatch(updateButtonType('quick replay'));
          } else {
               dispatch(updateButtonType("call to actions"));
          }
          if (QuickbuttonArray?.length <= 10) {
               console.log('selectedButtonTyep', type)
               setbuttonType(type);
               if (type == 'custom') {
                    setQuickButtonArray([...QuickbuttonArray, { mainType: 'quick replay', type: type, text: '' }])
                    dispatch(upadateQuickButton_arr(QuickbuttonArray));
               } else if (type == 'marketing opt-out') {
                    setQuickButtonArray([...QuickbuttonArray, { mainType: 'quick replay', type: type, text: 'Stop promotions', footerText: 'Not interested? Tap Stop promotions', accept: false }])
                    setdisabledMarketingopt(true);
                    dispatch(upadateQuickButton_arr(QuickbuttonArray));
               } else if(type == 'call phone'){
                    dsfdsf
               }else if(type == 'visit website'){
                    let obj = {
                         mainType:'call to actions',
                         type:type,
                         text:'',
                         visite_type:["static","dynamic"],
                    }
                    dispatch(upadateToActionsButton_arr([...callToactionbutton_array,obj]))

               }
          } else {
               alert('yon have cross the limit please delete any button and add new button')
          }
     }
     console.log('buttonArray', QuickbuttonArray);
     return (
          <>
               <div>
                    <div className='w-full'>
                         <div className='w-[95%] m-4 text-maincolor text-left rounded pb-6'>
                              <div className='text-left'>
                                   <p className='text-sm font-semibold text-maincolor'>Buttons <span className='text-xs font-medium bg-[#c7c0c08f] p-1 rounded-md text-[black]'>Optional</span></p>
                                   <p className='text-sm mt-2 mb-2'>Create buttons that let customers respond to your message or take action.</p>
                              </div>
                              <div className='my-3 font-Secondary'>
                                   <Button className={`!text-xs ${QuickbuttonArray.length == 10 ? "!bg-[lightgray] !cursor-not-allowed" : ''}`}
                                        id="demo-customized-button"
                                        aria-controls={anchorEl ? 'demo-customized-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={anchorEl ? 'true' : undefined}
                                        variant="contained"
                                        disableElevation
                                        onClick={handleClick}
                                        endIcon={<KeyboardArrowDownIcon />}
                                   >
                                        <FaPlus className='mr-2' />  Add Button
                                   </Button>
                                   <Menu
                                        id="demo-customized-menu"
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                   >
                                        <p className='p-1 text-left font-Secondary'>Quick reply buttons</p>
                                        <MenuItem disabled={disabledMarketingopt} value='marketing opt-out' onClick={() => getSelectedButtonType("marketing opt-out")} disableRipple>
                                             <p className='text-sm font-Secondary'>Marketing opt-out</p>
                                        </MenuItem>
                                        <MenuItem value='custom' onClick={() => getSelectedButtonType("custom")} disableRipple>
                                             <p className='text-sm font-Secondary'>Custom</p>
                                        </MenuItem>
                                        <Divider sx={{ my: 0.5 }} />
                                        <p className='p-1 text-center font-Secondary'>Call-to-action buttons</p>
                                        <MenuItem value='call phone' onClick={() => getSelectedButtonType("call phone")} disableRipple className='text-xs flex flex-col justify-start items-start text-left font-Secondary'>
                                             <p className='text-sm font-Secondary'>Call phone number</p>
                                             <p className='text-[11px] font-Secondary'>1 button maximum</p>
                                        </MenuItem>
                                        <MenuItem value='visit website' onClick={() => getSelectedButtonType("visit website")} disableRipple className='text-xs flex flex-col justify-start items-start text-left font-Secondary'>
                                             <p className='text-sm font-Secondary text-left'>Visit Website</p>
                                             <p className='text-[11px] font-Secondary text-left'>2 buttons maximum</p>
                                        </MenuItem>
                                        <MenuItem value='form' onClick={() => getSelectedButtonType("form")} disableRipple className='text-xs flex flex-col justify-start items-start text-left font-Secondary'>
                                             <p className='text-sm font-Secondary'>Complete form</p>
                                             <p className='text-[11px] font-Secondary'>1 button maximum</p>
                                        </MenuItem>
                                        <MenuItem value='copy code' onClick={() => getSelectedButtonType("copy code")} disableRipple className='text-xs flex flex-col justify-start items-start text-left font-Secondary'>
                                             <p className='text-sm font-Secondary'>Copy offer code</p>
                                             <p className='text-[11px] font-Secondary'>1 button maximum</p>
                                        </MenuItem>
                                   </Menu>
                                   <p className='text-xs font-Secondary mt-1 font-medium'>If you add more than three buttons, they will appear in a list.</p>
                              </div>
                              {QuickbuttonArray?.length > 0 &&
                                   <div>
                                        {button_Types == "call to actions" &&
                                             <CalltoActionsButton />
                                        }
                                        {button_Types == "quick replay" &&
                                             <QuickReplay_button/>
                                        }
                                   </div>
                              }
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Custom_buttons