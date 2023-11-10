
// import React from 'react';

import { Link } from "react-router-dom";
import Firstmain from "./Firstmain";
// import Footer from "./FooterButton";
import './Home.css'
import { useState } from "react";
import Seconadmain from "./Seconadmain";
const Home = () => {
  const [firstpageDetails,setfirstpageDetails] = useState({});
  const [activeSecondPage,setactiveSecondPage] = useState(false)
  function goSecondPage(obj,bool){
    setfirstpageDetails(obj);
    setactiveSecondPage(bool)
    console.log('first_page_Details',firstpageDetails);
  }
  function BackFisrstHomePage(){
    setactiveSecondPage(false)

  }
  return (
    <>
      <div className='w-full'>
        <div className="float-left w-[80%] ml-[10%] border border-[#e5e5e5] mt-5 mb-5 rounded">
          <div className="w-full">
            <div className="flex flex-row justify-between items-center p-4 border-b border-[#e5e5e5]">
              <div>
                <h2 className="font-medium text-base">Create a Template Message</h2>
              </div>
              <div>
                <Link to=''><button className="p-1 m-1 text-[#465def] cursor-pointer">Help Center?</button></Link>
                {activeSecondPage && <button className="cancel-buttonB" onClick={BackFisrstHomePage}>Back</button>}
                <button className="cancel-button">Cancel</button>
              </div>
            </div>
          </div>
          <div className="float-left w-full text-center mt-5">
            {!activeSecondPage && <Firstmain templateDetails={goSecondPage} />}
            {activeSecondPage && <Seconadmain/>}
          </div>
          {/* {firstpageDetails && <Seconadmain/>} */}


          {/* <Footer/> */}

        </div>


      </div>
    </>
  )
}

export default Home