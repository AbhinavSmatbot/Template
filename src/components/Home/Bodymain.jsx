/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
// import * as React from 'react';
import React, { useEffect, useState, useRef } from 'react';
import FormControl from '@mui/material/FormControl';
import { GoBold } from "react-icons/go";
import { BsTypeItalic } from 'react-icons/bs';
import EmojiPicker from 'emoji-picker-react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBodyText, updateBodyParam } from '../../app/features/BodyAndFooterSlice';
import OutlinedInput from '@mui/material/OutlinedInput';
import { IoWarningOutline } from "react-icons/io5";


const Bodymain = () => {
     const dispatch = useDispatch();
     const { body_text, body_param } = useSelector(state => state.body)
     // const [bodyText, setbodyText] = useState('');
     const [bodyPaira, setbodyPaira] = useState([]);
     const [emojishow, setemojishow] = useState(false);
     const [paramTexts, setParamTexts] = useState(
          body_param.reduce((acc, val) => {
            acc[val.parm] = '';
            return acc;
          }, {})
        );
     const inputRef = useRef();
     console.log('body_param', body_param)
     console.log('param',body_text);
     console.log("paramTexts",paramTexts)
     // let param_text;
     useEffect(()=>{
          if(bodyPaira?.length>0){
               dispatch(updateBodyParam(bodyPaira));
               const valuesArray = Object.values(paramTexts);
               console.log('ppppp',valuesArray)
          }
     },[bodyPaira, dispatch])
     function getbodyText(event) {
          let text = event.target.value;
          if (body_text.length < 1024) {
               dispatch(updateBodyText(text));
               const valuesArray = Object.values(paramTexts);
               console.log('ppppp',valuesArray)
          }
     }
     function addBodyvariable() {

          // let paramArray = [];
          if (body_text.includes("{{1}}")) {
               dispatch(updateBodyParam([]));
               setbodyPaira([])
               console.log('adaasasa', body_param);
               let paramLength = body_text.split("{{");
               dispatch(updateBodyText(body_text + ` {{${paramLength.length}}} `));
               console.log('ss', paramLength);
               let count = 0;
               // let paramArray = [];
               for (let eachVar of paramLength) {
                    count = count + 1;
                    let obj = {
                         parm: count,
                         text: ''
                    }
                    setbodyPaira((prevBodyPaira) => [...prevBodyPaira, obj]);
                    
                    // dispatch(updateBodyParam(bodyPaira))

                   
               }
               console.log('body_param', body_param)
               

          } else {
               let paramArray = [];
               dispatch(updateBodyText(body_text + ' {{1}} '));
               // setbodyPaira([1]);
               let obj = {
                    parm: 1,
                    text: ''
               }
               paramArray.push(obj)
               setbodyPaira(paramArray)
               dispatch(updateBodyParam(paramArray));

          }
          if (inputRef.current) {
               inputRef.current.focus();
             }
          dispatch(updateBodyParam(bodyPaira))

     }
     console.log('lllop', bodyPaira)
     function setBoldFont() {
          // setbodyText(bodyText + '**')
          dispatch(updateBodyText(body_text + '**'));
     }
     function setItalicFont() {
          // setbodyText(bodyText + '__')
          dispatch(updateBodyText(body_text + '__'));
     }
     function selectEmoji() {
          setemojishow(true);
     }
     function handelSelectEmoji(event) {
          // setbodyText(pre=>pre+ event.emoji)
          setemojishow(false);
          dispatch(updateBodyText(body_text + event.emoji));
     }
     const getParamText = (event, parm) => {
          const newText = event.target.value;
          setParamTexts((prevParamTexts) => ({
            ...prevParamTexts,
            [parm]: newText,
          }));
        };
     // const handleEmojiSelect = (emoji) => {
     //      setEmoji(emoji.native);
     //      setbodyText(bodyText + emoji1)
     // };
     // const handleEmojiSelect = (emoji) => {
     //      setEmoji(emoji.native); // Store the selected emoji in state
     //      setShowEmojiPicker(false); // Hide the emoji picker
     //      console.log(emoji.native)
     //    };
     // function ShowEmojiPicker1(e){
     //      e.preventDefault();
     //      setShowEmojiPicker(!showEmojiPicker)
     // }
     return (
          <>
               <div className='w-full'>
                    <div className='w-[95%] float-left m-4 border border-[#e8f0ff] text-maincolor text-left rounded p-4'>
                         <div className='text-left'>
                              <p className='text-sm font-semibold text-maincolor'>Body</p>
                              <p className='text-sm mt-2 mb-2 text-[rgba(28,43,51,.65)]'>Enter the text for your message in the language that you would have selected.</p>
                              {/* <input  */}
                              <form autoComplete="off" className='w-full'>
                                   <FormControl className='w-full text-sm'>
                                        <textarea className='border border-[lightgray] rounded-md p-3' ref={inputRef} placeholder="Enter your body message..." rows={7} value={body_text} onChange={getbodyText}></textarea>
                                   </FormControl>
                              </form>
                              <div className='flex flex-row justify-end items-center'>
                                   <div className='mt-2 p-2 rounded-md hover:bg-[lightgray]' onClick={selectEmoji}>
                                        {emojishow ? <div className='absolute top-20'><EmojiPicker onEmojiClick={handelSelectEmoji} /></div> : '🙂'}
                                   </div>
                                   <p className='mt-2 p-2 rounded-md hover:bg-[lightgray]' onClick={setBoldFont} title='Bold Font'><GoBold fontSize='20px' /></p>
                                   <p className='mt-2 p-2 rounded-md hover:bg-[lightgray]' onClick={setItalicFont} title='Italic Font'><BsTypeItalic fontSize='20px' /></p>
                                   <p className='float-right text-right mt-2' title='Add Variable'> <span className="cursor-pointer text-sm font-medium rounded-md p-2 group hover:bg-[#cbcccf]" onClick={addBodyvariable}>+ Add Variable</span></p>
                              </div>
                              <div className='relative'>
                                   <div className='absolute top-[-63px] right-2'>
                                        <p className='text-xs font-Secondary font-semibold'>{body_text.length}/1024</p>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {body_param?.length > 0 &&
                         <div className='w-[95%] float-left m-4 border border-[#e8f0ff] bg-[#eff0f1] text-maincolor text-left rounded p-4'>
                              <div className='p-2'>
                                   <p className='text-left text-sm font-semibold text-maincolor mb-3'>Samples for body content</p>
                                   <p className='text-left text-[black] text-xs font-medium mb-3'>To help us review your message template, please add an example for each variable in your body text. Do not use real customer information. Cloud API hosted by Meta reviews templates and variable parameters to protect the security and integrity of our services.</p>
                                   <p className='text-[black] text-sm text-left mb-3'>Body</p>
                                   {body_param?.map((val) => (
                                   <div key={val.parm} className='flex flex-row justify-start items-center'>
                          <p className='mr-3 mb-3'>{`{{${val.parm}}}`}</p>
                          <form autoComplete="off" className='w-full mr-3 mb-3 ml-3'>
                               <FormControl className='w-full text-sm'>
                                    <OutlinedInput placeholder={`Body param ${val.parm}`} value={paramTexts[val.parm]} onChange={(event) => getParamText(event, val.parm)} className='text-sm h-10 font-Secondary' />

                               </FormControl>
                          </form>

                                   </div>
                  
                                   ))
                                   }
                                   <p className='text-left inline-flex items-center w-full bg-[#ebc9d9] text-[black] text-xs font-medium mt-3 p-3 rounded-md'><span className='float-left mr-3'><IoWarningOutline fontSize="20px"/></span>Add sample text.</p>


                              </div>
                         </div>
                    }


               </div>
          </>
     )
}

export default Bodymain