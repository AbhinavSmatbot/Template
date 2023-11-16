/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import {FormControl,OutlinedInput,InputLabel,MenuItem,Select,Chip,Radio} from '@mui/material';
import { Link } from 'react-router-dom';
import { AiTwotoneSound } from 'react-icons/ai';
import { BiSolidBellRing } from 'react-icons/bi';
import { FaKey } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';

import { useDispatch, useSelector } from 'react-redux';
import { updateCategory,upadateTemName,upadateLanguage } from '../../app/features/HomeSlice';
// import FormHelperText from '@mui/material/FormHelperText';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, languages) {
     return {
     //   fontWeight:
     //   languages?.indexOf(name) === -1
     //       ? theme?.typography?.fontWeightRegular
     //       : theme?.typography?.fontWeightMedium,
     };
}

const Firstmain = (props) => {
     const {cateory,template_name,languages} = useSelector(state=>state.home)
     const dispatch = useDispatch();
     const {templateDetails} = props
     const [ifmarketingClick, setifmarketingclick] = useState(false);
     const [selectedCateoryType, setSelectMarkitngType] = useState('');
     // const [language, setLanguage] = useState([]);
     // const [tamplateName,setTemplateName] = useState('');
     const [disabledcontnue,setdisabledcontnue] = useState(false);
     // const theme = useTheme();
     
     useEffect(()=>{
          if(cateory != 'utility'){
               setifmarketingclick(true)
          } 
          if(languages?.length>0){
              for(let i of languages){
               console.log(i)
               getStyles(i,languages)
              }
          } 
     },[cateory, languages]);
     useEffect(()=>{
          if(cateory?.length>0 && template_name?.length>0 && languages?.length>0){
               setdisabledcontnue(true);
          }else{
               setdisabledcontnue(false);  
          }
     },[cateory, languages?.length, selectedCateoryType?.length, template_name?.length])
     const handleChange1 = (event) => {
          // const {
          //      target: { value },
          // } = event;
          // setLanguage(
          //      typeof value === 'string' ? value.split(',') : value,
          // );
          // setLanguage(event.target.value)
          dispatch(upadateLanguage(event.target.value))
          event.stopPropagation();
     };
    
     console.log('selected langeuage', languages);
     
     function openCategory() {
          setifmarketingclick(true);
          // setSelectMarkitngType("");
     }
     function closeMarktingCategory(){
          setifmarketingclick(false);
          setSelectMarkitngType("utility");
          dispatch(updateCategory("utility"))
     }

     const handleChange = (event) => {
          const selectedValue = event.target.value;
          if (selectedValue == cateory) {
               setSelectMarkitngType('');
          } else {
               setSelectMarkitngType(selectedValue);
               dispatch(updateCategory(selectedValue))
          }
     };

     function getTemplateName(event){
          let tem_name = event.target.value;
          tem_name = tem_name.toLowerCase();
          dispatch(upadateTemName(tem_name))
     }

     function goSecondPage(e){
          e.preventDefault();
          if(cateory?.length>0 && template_name?.length>0 && languages?.length>0){
               let obj = {
                    category_type:cateory,
                    template_name:template_name,
                    language:languages
               };
               templateDetails(obj,disabledcontnue);

          }else{
               alert('Please fill all details');
          }
          console.log('marketing_type',cateory);
          console.log('template_name',template_name);
          console.log('language',languages);
     }
     const handleDelete = (itemToDelete) => (event) => {
          event.stopPropagation(); 
          // setLanguage((items) => items.filter((item) => item !== itemToDelete));
          dispatch(upadateLanguage(languages?.filter((item) => item !== itemToDelete)))
     };


     return (
          <>
               <div className="float-left w-full h-[80vh] overflow-y-auto">
                    <div className="w-full font-Secondary">
                         <div className="select_category_container w-[60%] ml-[20%] border border-[#e8f0ff] text-maincolor float-left text-left rounded p-4">
                              <p className='text-lg text-maincolor font-medium ml-2'>Category</p>
                              <p className='text-sm text-maincolor font-medium ml-2'>
                                   Choose a category that best describes your message template.
                                   <Link to=''>Learn more about categories</Link>.
                              </p>
                              <div onClick={openCategory} className="marketing_category float-left m-2 bg-[#f2f3f9] hover:bg-[#e9ebf5] p-5 cursor-pointer rounded-lg">
                                   <div className='flex flex-row justify-between items-center '>
                                        <div className='p-3 bg-[white] rounded-[50%]'>
                                             <AiTwotoneSound fontSize={"30px"} />
                                        </div>
                                        <div className='ml-5'>
                                             <h3 className='text-[#1c1c1c] text-sm font-semibold'>Marketing</h3>
                                             <p className='text-[#1c1c1c] text-sm font-medium'>
                                                  Promotions or information about your business, products, or services.
                                                  Or any message that is not utility or authentication.
                                             </p>
                                        </div>
                                   </div>
                                   {ifmarketingClick &&
                                        <div>
                                             <div className='float-left flex flex-row justify-between items-center p-1 rounded-md mt-5 ml-5 hover:bg-[#d8dcf0]'>
                                                  <div className='p-1'>
                                                       <Radio
                                                            checked={cateory === 'custom'}
                                                            onClick={handleChange}
                                                            value="custom"
                                                            name="radio-buttons"
                                                            inputProps={{ 'aria-label': 'A' }}
                                                       />
                                                  </div>
                                                  <div className='ml-1'>
                                                       <h3 className='text-[#1c1c1c] font-medium text-sm'>Custom</h3>
                                                       <p className='text-[#1c1c1c] text-xs font-medium'>
                                                            Send promotional offers, announcements, and more to increase awareness and engagement.
                                                       </p>
                                                  </div>
                                             </div>
                                             <div className='float-left flex flex-row justify-between items-center p-1 rounded-md mt-5 ml-5 hover:bg-[#d8dcf0]'>
                                                  <div className='p-1'>
                                                       <Radio
                                                            checked={cateory === 'form'}
                                                            onClick={handleChange}
                                                            value="form"
                                                            name="radio-buttons"
                                                            inputProps={{ 'aria-label': 'A' }}
                                                       />
                                                  </div>
                                                  <div className='ml-1'>
                                                       <h3 className='text-[#1c1c1c] font-medium text-sm'>Form</h3>
                                                       <p className='text-[#1c1c1c] text-xs font-medium'>
                                                            Send a custom form for lead generation, registration or re-engagement.
                                                       </p>
                                                  </div>
                                             </div>
                                             <div className='float-left flex flex-row justify-between items-center p-1 rounded-md mt-5 ml-5 hover:bg-[#d8dcf0]'>
                                                  <div className='p-1'>
                                                       <Radio
                                                            checked={cateory === 'product message'}
                                                            onClick={handleChange}
                                                            value="product message"
                                                            name="radio-buttons"
                                                            inputProps={{ 'aria-label': 'A' }}
                                                       />
                                                  </div>
                                                  <div className='ml-1'>
                                                       <h3 className='text-[#1c1c1c] font-medium text-sm'>Product Message</h3>
                                                       <p className='text-[#1c1c1c] text-xs font-medium'>
                                                            Send messages about your entire catalogue or multiple products from it.
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                   }
                              </div>
                              <div onClick={closeMarktingCategory} className={` ${cateory == 'utility' ? 'bg-[#a3b4ee] border-[#456def]' : 'bg-[#f2f3f9]'} float-left m-2 p-5 flex flex-row justify-between items-center hover:bg-[#e9ebf5] cursor-pointer rounded-lg`}>
                                   <div className='p-3 bg-[white] rounded-[50%]'>
                                        <BiSolidBellRing fontSize={"30px"} />
                                   </div>
                                   <div className='ml-5'>
                                        <h3 className='text-[#1c1c1c] text-sm font-semibold'>Utility</h3>
                                        <p className='text-[#1c1c1c] text-sm font-medium'>
                                             Messages about a specific transaction, account, order or customer request.
                                        </p>
                                   </div>
                              </div>
                              <div className='float-left m-2 p-5 flex flex-row justify-between items-center cursor-not-allowed bg-[#f2f3f9] rounded-lg' title='This category is not yet avilable in your region'>
                                   <div className='p-3 bg-[white] rounded-[50%]'>
                                        <FaKey fontSize={"30px"} />
                                   </div>
                                   <div className='ml-5'>
                                        <h3 className='text-[#1c1c1c] text-sm font-semibold'>Authentication</h3>
                                        <p className='text-[#1c1c1c] text-sm font-medium'>
                                             One-time passwords that your customers use to authenticate a transaction or login.
                                        </p>
                                   </div>
                              </div>

                         </div>
                         <div className='float-left mt-3 w-[60%] ml-[20%] border border-[#e8f0ff] text-maincolor text-left rounded p-4'>
                           <div className='text-left'>
                             <p className='text-sm font-semibold text-maincolor'>Name</p>
                             <p className='text-sm mt-2 mb-2 text-[rgba(28,43,51,.65)]'>Name your message template.</p>
                             {/* <input  */}
                             <form autoComplete="off" className='w-full'>
                                   <FormControl className='w-full text-sm'>
                                   <OutlinedInput placeholder="Enter message template name..." value={template_name} onChange={getTemplateName} className='text-sm h-12 font-Secondary' />
                                   {/* <MyFormHelperText /> */}
                                   </FormControl>
                              </form>
                              <div className='relative'>
                                   <div className='absolute top-[-30px] right-3'>
                                       <p className='text-xs font-Secondary'>{template_name?.length}/50</p>
                                   </div>
                              </div>
                           </div>
                         </div>
                         <div className='float-left mt-3 w-[60%] ml-[20%] border border-[#e8f0ff] text-maincolor text-left rounded p-4'>
                           <div className='text-left'>
                             <p className='text-sm font-semibold text-maincolor'>Languages</p>
                             <p className='text-sm mt-2 mb-2 text-[rgba(28,43,51,.65)]'>Choose languages for your message template. You can delete or add more languages later.</p>
                             {/* <input  */}
                             <div>
                                   <FormControl className='w-full text-sm font-Secondary'>
                                   {languages?.length == 0 && <InputLabel id="demo-multiple-chip-label">Select languages</InputLabel>}
                                   <Select className='min-h-[48px] text-sm'
                                        labelId="demo-multiple-chip-label"
                                        id="demo-multiple-chip"
                                        multiple
                                        value={languages}
                                        placeholder='Select languages'
                                        onChange={handleChange1}
                                        input={<OutlinedInput id="select-multiple-chip" placeholder='Select languages' />}
                                        renderValue={(selected) => (
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                          
                                        {selected.map((value) => (
                                             <Chip key={value} label={value}
                                             onDelete={(event) => {
                                                  event.stopPropagation(); // Stop the event propagation to prevent opening the Select
                                                  handleDelete(value)(event);
                                                }}
                                                
                                                onClick={(event) => event.stopPropagation()} // Stop event propagation on Chip click
                                                onMouseDown={(event) => event.stopPropagation()} // Stop event propagation on mouse down
                                                onMouseUp={(event) => event.stopPropagation()} // Stop event propagation on mouse up
                                             />

                                        ))}
                                        
                                        </div>
                                        )}
                                        MenuProps={MenuProps}
                                   >
                                        
                                        {names.map((name) => (
                                        <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, languages)}
                                        >
                                        {name}
                                        </MenuItem>
                                        ))}
                                   </Select>
                                   </FormControl>
                             </div>
                             <div>

                             </div>
                              <div className='relative'>
                                   <div className='absolute top-[-33px] left-3'>
                                       <AiOutlineSearch fontSize='20px'/>
                                   </div>

                              </div>
                           </div>
                         </div>

                    </div>
                    {/* button code */}
                    <div className="float-right w-full mt-2 mb-2">
                         <div className="w-full p-4 text-right items-end">
                              <button className="cancel-button">Back</button>
                              <button className="cancel-button">Cancel</button>
                              <button className={`continue_button ${disabledcontnue ? 'bg-[#456def]' :'bg-[#ccced5] border-[#ccced5] cursor-not-allowed' }`} onClick={goSecondPage}>Continue</button>
                         </div>
                    </div>
               </div>

          </>
     );
}

export default Firstmain;
