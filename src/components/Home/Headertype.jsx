/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Radio } from '@mui/material';
import { useEffect, useState } from 'react';
import { BsImageFill } from 'react-icons/bs';
import { MdSlowMotionVideo } from 'react-icons/md';
import { CgFileDocument } from 'react-icons/cg';
import { SlLocationPin } from 'react-icons/sl';
import { GrFormClose } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { upadateHeaderText,upadateHeaderVar,upadateHeaderMedia } from '../../app/features/HeaderSlice';

const Headertype = () => {
     const {header_Type,header_text,header_var,header_media} = useSelector(state=>state.header)
     const dispatch = useDispatch();
     const [headerText, setHeaderText] = useState('');
     const [selectedMediaType, setselectedMediaType] = useState('');
     const [HeaderVarTrue, setHeaderVarTrue] = useState(false);
     const [imageurl, setimageurl] = useState({});
      
     useEffect(()=>{
          console.log("headerType",header_Type);
          console.log("haderText",header_text);
          console.log('headerVar',header_var);
          console.log('header_media',header_media);
     })

     function getHeaderText(event) {
          let text = event.target.value;
          if (headerText.length < 60) {
               setHeaderText(text);
               dispatch(upadateHeaderText(text)) 
          }
          if (text.includes('{{1}}') && headerText.length < 60) {
               setHeaderVarTrue(true);
               dispatch(upadateHeaderVar("hello"))
          } else {
               setHeaderVarTrue(false);
          }


     }
     function changeMediaType(event) {
          let mediaType = event.target.value;
          // let mediaType = str
          console.log('media_type', mediaType);
          if (mediaType == selectedMediaType) {
               setselectedMediaType('');
          } else {
               setselectedMediaType(mediaType);
               // let data = {
               //      headerMediaType:mediaType
               // }
               // dispatch(upadateHeaderMedia(data))
          }
     }
     function addHeadervariable() {
          if (!HeaderVarTrue && headerText.length < 60) {
               setHeaderText(headerText + ' {{1}}')
               setHeaderVarTrue(true);
          }

     }
     function getUploadImageDetails(event){
          const selectedFile = event.target.files[0]; // Get the selected file
          console.log('ssss',selectedFile)

          if (selectedFile) {
            // Access file properties
            const fileName = selectedFile.name;
            const fileSize = selectedFile.size;
            const fileType = selectedFile.type;
            setimageurl(
               {name:fileName,
                size:fileSize,
                type:fileType,
                headerMediaType:selectedMediaType
               })
            dispatch(upadateHeaderMedia({name:fileName,size:fileSize,type:fileType,headerMediaType:selectedMediaType}))
            console.log("File Name: " + fileName);
            console.log("File Size: " + fileSize + " bytes");
            console.log("File Type: " + fileType);
            
            // You can also read the file content or perform other actions with the file here.
          } else {
            console.log("No file selected.");
          }
     }
     function removeImage(){
          setimageurl({});
          setselectedMediaType('');
     }
     return (
          <div className="w-full">
               {header_Type == 'text' ?
                    <div className='w-full float-left mt-3 border border-[#e8f0ff] text-maincolor text-left rounded p-4'>
                         <div className='text-left'>
                              <p className='text-sm font-semibold text-maincolor'>Header</p>
                              <p className='text-sm mt-2 mb-2 text-[rgba(28,43,51,.65)]'>Header your template message.</p>
                              {/* <input  */}
                              <form autoComplete="off" className='w-full'>
                                   <FormControl className='w-full text-sm'>
                                        <OutlinedInput placeholder="Enter message template name..." value={headerText} onChange={getHeaderText} className='text-sm h-12 font-Secondary' />

                                   </FormControl>
                              </form>
                              <p className='float-right text-right mt-3'> <span className={`${HeaderVarTrue ? 'cursor-not-allowed' : 'cursor-pointer'} text-sm font-medium rounded-md p-2 group hover:bg-[#465def]`} onClick={addHeadervariable} disabled={HeaderVarTrue}>+ Add Variable</span></p>
                              <div className='relative'>
                                   <div className='absolute top-[-30px] right-3'>
                                        <p className='text-xs font-Secondary'>{headerText.length}/60</p>
                                   </div>
                              </div>
                         </div>
                    </div>
                    :
                    // here media type code 
                    <div className='w-full float-left mt-3 border border-[#e8f0ff] text-maincolor text-left rounded p-4'>
                         <div className='text-left'>
                              <div className='flex flex-row justify-between p-2'>
                                   <div className={`iamge-1 flex flex-col justify-between items-center border ${selectedMediaType === 'image' ? 'border-[#465def] bg-[#acb2e7]' : 'border-[#c7cae0] hover:bg-[mintcream]'} ml-1 p-2 cursor-pointer rounded-lg min-w-[100px] `}>
                                        <div className='relative'>
                                             <div className='absolute top-[-17px] right-[16px]'>
                                                  <Radio
                                                       checked={selectedMediaType === 'image'}
                                                       onClick={changeMediaType}
                                                       value="image"
                                                       name="radio-buttons"
                                                       inputProps={{ 'aria-label': 'A' }}
                                                  />
                                             </div>
                                        </div>
                                        <BsImageFill fontSize='50px' color='lightgray' />
                                        <p className='text-center text-xs'>Image</p>
                                   </div>
                                   <div className={`video-1 flex flex-col justify-between items-center border ${selectedMediaType === 'video' ? 'border-[#465def] bg-[#acb2e7]' : 'border-[#c7cae0] hover:bg-[mintcream]'} ml-1 p-2 cursor-pointer rounded-lg min-w-[100px] `}>
                                        <div className='relative'>
                                             <div className='absolute top-[-17px] right-[16px]'>
                                                  <Radio
                                                       checked={selectedMediaType === 'video'}
                                                       onClick={changeMediaType}
                                                       value="video"
                                                       name="radio-buttons"
                                                       inputProps={{ 'aria-label': 'A' }}
                                                  />
                                             </div>
                                        </div>
                                        <MdSlowMotionVideo fontSize='50px' color='lightgray' />
                                        <p className='text-center text-xs'>Video</p>
                                   </div>
                                   <div className={`document-1 flex flex-col justify-between items-center border ${selectedMediaType === 'document' ? 'border-[#465def] bg-[#acb2e7]' : 'border-[#c7cae0] hover:bg-[mintcream]'} ml-1 p-2 cursor-pointer rounded-lg min-w-[100px] `}>
                                        <div className='relative'>
                                             <div className='absolute top-[-17px] right-[16px]'>
                                                  <Radio
                                                       checked={selectedMediaType === 'document'}
                                                       onClick={changeMediaType}
                                                       value="document"
                                                       name="radio-buttons"
                                                       inputProps={{ 'aria-label': 'A' }}
                                                  />
                                             </div>
                                        </div>
                                        <CgFileDocument fontSize='50px' color='lightgray' />
                                        <p className='text-center text-xs'>Documnet</p>
                                   </div>
                                   <div className={`location-1 flex flex-col justify-between items-center border ${selectedMediaType === 'location' ? 'border-[#465def] bg-[#acb2e7]' : 'border-[#c7cae0] hover:bg-[mintcream]'} ml-1 p-2 cursor-pointer rounded-lg min-w-[100px] `}>
                                        <div className='relative'>
                                             <div className='absolute top-[-17px] right-[16px]'>
                                                  <Radio
                                                       checked={selectedMediaType === 'location'}
                                                       onClick={changeMediaType}
                                                       value="location"
                                                       name="radio-buttons"
                                                       inputProps={{ 'aria-label': 'A' }}
                                                  />
                                             </div>
                                        </div>
                                        <SlLocationPin fontSize='50px' color='lightgray' />
                                        <p className='text-center text-xs'>Location</p>
                                   </div>
                              </div>
                              {/*uplaod media div  */}
                              {selectedMediaType != 'location' &&
                                   <div className='bg-[#f2f9ff] p-4 rounded-md mt-5'>
                                        <div className='text-left mono'>
                                             <h3 className='font-medium text-sm text-[black]'>Samples for header content</h3>
                                             <p className='font-medium text-xs text-[black]'>To help us review your content, provide examples of the variables or media in the header. Do not include any customer information. Cloud API hosted by Meta reviews templates and variable parameters to protect the security and integrity of our services.</p>
                                             {selectedMediaType === 'image' &&
                                                  <div className='flex flex-row justify-start items-center mt-4'>
                                                  <p>{selectedMediaType}</p>
                                                  {imageurl.name?.length>0 ?
                                                    <div className='ml-2 flex flex-row justify-start items-center'>
                                                       <p className='border border-[#456def] rounded-md p-2 mr-2 hover:bg-[cornsilk]'>{imageurl.name} </p>
                                                       <GrFormClose onClick={removeImage} fontSize='30px' cursor='pointer'/>
                                                    </div>
                                                    :
                                                    <div className='ml-2 '>
                                                       <label htmlFor='iamge-1' className='border border-[#456def] rounded-md p-2 cursor-pointer hover:bg-[cornsilk]'>Choose JPG or PNG file</label>
                                                       <input id='iamge-1' style={{visibility:"hidden",position:"absolute"}} type="file" onChange={getUploadImageDetails} name="image" accept="image/jpeg, image/png"/>
                                                  </div>
                                                  }
                                                  </div>
                                             }
                                             {selectedMediaType === 'video' &&
                                                  <div className='flex flex-row justify-start items-center mt-3'>
                                                       <p>{selectedMediaType}</p>
                                                       {imageurl.name?.length>0 ?
                                                    <div className='ml-2 flex flex-row justify-start items-center'>
                                                       <p className='border border-[#456def] rounded-md p-2 mr-2 hover:bg-[cornsilk]'>{imageurl.name} </p>
                                                       <GrFormClose onClick={removeImage} fontSize='30px' cursor='pointer'/>
                                                    </div>
                                                    :
                                                    <div className='ml-2 '>
                                                       <label htmlFor='iamge-1' className='border border-[#456def] rounded-md p-2 cursor-pointer hover:bg-[cornsilk]'>Choose MP4 file</label>
                                                       <input id='iamge-1' style={{visibility:"hidden",position:"absolute"}} type="file" onChange={getUploadImageDetails} name="mp4"/>
                                                  </div>
                                                  }
                                                  </div>
                                             }
                                             {selectedMediaType === 'document' &&
                                                  <div className='flex flex-row justify-start items-center mt-3'>
                                                       <p>{selectedMediaType}</p>
                                                       {imageurl.name?.length>0 ?
                                                    <div className='ml-2 flex flex-row justify-start items-center'>
                                                       <p className='border border-[#456def] rounded-md p-2 mr-2 hover:bg-[cornsilk]'>{imageurl.name} </p>
                                                       <GrFormClose onClick={removeImage} fontSize='30px' cursor='pointer'/>
                                                    </div>
                                                    :
                                                    <div className='ml-2 mt-10'>
                                                       <label htmlFor='iamge-1' className='border border-[#456def] rounded-md p-2 cursor-pointer hover:bg-[cornsilk]'>Choose PDF file</label>
                                                       <input id='iamge-1' style={{visibility:"hidden",position:"absolute"}} type="file" onChange={getUploadImageDetails} name="mp4"/>
                                                  </div>
                                                  }

                                                  </div>
                                             }
                                        </div>

                                   </div>
                              }
                         </div>
                    </div>
               }



          </div>
     )
}

export default Headertype