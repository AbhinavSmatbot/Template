/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateButtonType,upadateButtonArray } from '../../app/features/ButtonsSlice';

const QuickReplay_button = () => {
  const { button_Types, button_array } = useSelector(state => state.button)
     const dispatch = useDispatch();
     console.log('getSelected Vaue', button_Types);
     console.log('all_button',button_array);
  return (
    <>
     {
      button_array?.length>0 && 
        <div>
        {button_array?.map((button,index)=>(
            <p key={index}>sdasldgadks</p>
          ))}
        </div>
      }
    </>
  )
}

export default QuickReplay_button