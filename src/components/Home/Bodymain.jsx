// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import FormControl from '@mui/material/FormControl';
import {GoBold} from "react-icons/go";
import {BsTypeItalic} from 'react-icons/bs';
// import EmojiPicker from 'emoji-picker-react';
// import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';


const Bodymain = () => {
     const [bodyText, setbodyText] = useState('');
     // const [emojishow, setemojishow] = useState(false);
     const [emoji1, setEmoji] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
     function getbodyText(event) {
          let text = event.target.value;
          if (bodyText.length < 1024) {
               setbodyText(text);
          }
     }
     function addHeadervariable() {
          // if (!HeaderVarTrue && bodyText.length < 60) {
               setbodyText(bodyText + ' {{1}}')
               // setHeaderVarTrue(true);
          // }

     }
     function setBoldFont(){
          setbodyText(bodyText + '**')
     }
     function setItalicFont(){
          setbodyText(bodyText + '__')
     }
     // function selectEmoji(){
     //      setemojishow(true);
     // }
     // const handleEmojiSelect = (emoji) => {
     //      setEmoji(emoji.native);
     //      setbodyText(bodyText + emoji1)
     // };
     const handleEmojiSelect = (emoji) => {
          setEmoji(emoji.native); // Store the selected emoji in state
          setShowEmojiPicker(false); // Hide the emoji picker
          console.log(emoji.native)
        };
     function ShowEmojiPicker1(e){
          e.preventDefault();
          setShowEmojiPicker(!showEmojiPicker)
     }
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
                                        <textarea className='border border-[lightgray] rounded-md p-3' placeholder="Enter your body message..." rows={7} value={bodyText} onChange={getbodyText}></textarea>
                                   </FormControl>
                              </form>
                              <div className='flex flex-row justify-end items-center'>
                              <p className='mt-2 p-2 rounded-md hover:bg-[lightgray]' onClick={ShowEmojiPicker1}>
                                   {/* {emojishow ? <EmojiPicker /> :  '🙂'} */}
                                   {/* 🙂 */}
                                   {emoji1 || '🙂'}
                                   {showEmojiPicker && (
                                        <Picker
                                             onSelect={(emoji) => handleEmojiSelect(emoji)}
                                             style={{ position: 'absolute', bottom: '60px', right: '10px' }}
                                        />
                                        )}

                                   </p>
                              <p className='mt-2 p-2 rounded-md hover:bg-[lightgray]' onClick={setBoldFont} title='Bold Font'><GoBold fontSize='20px'/></p>
                              <p className='mt-2 p-2 rounded-md hover:bg-[lightgray]' onClick={setItalicFont} title='Italic Font'><BsTypeItalic fontSize='20px'/></p>
                              <p className='float-right text-right mt-2' title='Add Variable'> <span className="cursor-pointer text-sm font-medium rounded-md p-2 group hover:bg-[#465def]" onClick={addHeadervariable}>+ Add Variable</span></p>
                              </div>
                              <div className='relative'>
                                   <div className='absolute top-[-60px] right-2'>
                                        <p className='text-xs font-Secondary font-semibold'>{bodyText.length}/1024</p>
                                   </div>
                              </div>
                         </div>
                    </div>

    </div>
    </>
  )
}

export default Bodymain