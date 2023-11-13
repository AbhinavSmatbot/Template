// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import { GoBold } from "react-icons/go";
import { BsTypeItalic } from 'react-icons/bs';
import EmojiPicker from 'emoji-picker-react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBodyText, updateBodyParam } from '../../app/features/BodyAndFooterSlice';
import OutlinedInput from '@mui/material/OutlinedInput';


const Bodymain = () => {
     const dispatch = useDispatch();
     const { body_text, body_param } = useSelector(state => state.body)
     // const [bodyText, setbodyText] = useState('');
     const [emojishow, setemojishow] = useState(false);

     console.log('body_param', body_param)
     let param_text;
     // useEffect(()=>{
     //      setbodyText(body_text)
     // },[body_text])
     function getbodyText(event) {
          let text = event.target.value;
          if (body_text.length < 1024) {
               // setbodyText(text);
               dispatch(updateBodyText(text));
          }
     }
     function addHeadervariable() {
          // if (!HeaderVarTrue && bodyText.length < 60) {
          // let value = 0;
          // value = value+1
          // setbodyText(bodyText + ` {{${value}}} `)
          dispatch(updateBodyText(body_text + '{{1}}'));
          dispatch(updateBodyParam('{{1}}'))
          // setHeaderVarTrue(true);
          // }

     }
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
     function getParamText(event) {
          param_text = event.target.value;
     }
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
               <div>
                    <div className='w-full float-left m-3 border border-[#e8f0ff] text-maincolor text-left rounded p-4'>
                         <div className='text-left'>
                              <p className='text-sm font-semibold text-maincolor'>Body</p>
                              <p className='text-sm mt-2 mb-2 text-[rgba(28,43,51,.65)]'>Enter the text for your message in the language that you would have selected.</p>
                              {/* <input  */}
                              <form autoComplete="off" className='w-full'>
                                   <FormControl className='w-full text-sm'>
                                        <textarea className='border border-[lightgray] rounded-md p-3' placeholder="Enter your body message..." rows={7} value={body_text} onChange={getbodyText}></textarea>
                                   </FormControl>
                              </form>
                              <div className='flex flex-row justify-end items-center'>
                                   <div className='mt-2 p-2 rounded-md hover:bg-[lightgray]' onClick={selectEmoji}>
                                        {emojishow ? <div className='absolute top-20'><EmojiPicker onEmojiClick={handelSelectEmoji} /></div> : '🙂'}
                                   </div>
                                   <p className='mt-2 p-2 rounded-md hover:bg-[lightgray]' onClick={setBoldFont} title='Bold Font'><GoBold fontSize='20px' /></p>
                                   <p className='mt-2 p-2 rounded-md hover:bg-[lightgray]' onClick={setItalicFont} title='Italic Font'><BsTypeItalic fontSize='20px' /></p>
                                   <p className='float-right text-right mt-2' title='Add Variable'> <span className="cursor-pointer text-sm font-medium rounded-md p-2 group hover:bg-[#cbcccf]" onClick={addHeadervariable}>+ Add Variable</span></p>
                              </div>
                              <div className='relative'>
                                   <div className='absolute top-[-63px] right-2'>
                                        <p className='text-xs font-Secondary font-semibold'>{body_text.length}/1024</p>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className='w-full float-left m-3 border border-[#e8f0ff] bg-[aliceblue] text-maincolor text-left rounded p-4'>
                         <div className='p-2'>
                              <p className='text-left text-sm font-semibold text-maincolor mb-3'>Samples for body content</p>
                              <p className='text-left text-[black] text-xs font-medium mb-3'>To help us review your message template, please add an example for each variable in your body text. Do not use real customer information. Cloud API hosted by Meta reviews templates and variable parameters to protect the security and integrity of our services.</p>
                              <p className='text-[black] text-sm text-left mb-3'>Body</p>
                              <div className='flex flex-row justify-start items-center'>
                                   <p className='mr-3 mb-3'>{1}</p>
                                   <form autoComplete="off" className='w-full'>
                                        <FormControl className='w-full text-sm'>
                                             <OutlinedInput placeholder="Enter footer text here..." value={param_text} onChange={getParamText} className='text-sm h-10 font-Secondary' />

                                        </FormControl>
                                   </form>

                              </div>
                         </div>
                    </div>

               </div>
          </>
     )
}

export default Bodymain