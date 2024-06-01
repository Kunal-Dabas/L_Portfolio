import React from "react";
import UAS_dtu from "../assets/UAS_dtuImg.png";
import SUAS_GUI from "../assets/SUAS_GUI.png";
import ColorDetection from "../assets/ColorDetection.jpeg";
import CreditApprovalSys from "../assets/Credit_Approval_System.png";
import SocialMedia from "../assets/SocialMedia.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#061337]">

      {/* container  */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">

        <div className="pb-8">
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600  hover:border-white hover:text-pink-600 duration-300'>Work</p>
          <p className='py-6 text-xl font-semibold text-slate-300'>Here are some of my projects</p>
        </div>

        {/* div(container) for the card items basically a grid */}
        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"> 
          
          {/* Item 1 */}
          <div style={{backgroundImage:`url(${UAS_dtu})`}} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "> 
              {/* content-div is a special name to add custom css : erfer : index.css */}
      
            <div className="opacity-0 group-hover:opacity-100" >
              <span className="text-2xl font bold text-white tracking-wider ">
                UAS Website
              </span>

              <div className="pt-8 ">
                <a href="https://uasdtu.com/" target="_blank" title="Hosted WebSite"  rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:bg-gray-400 hover:text-white duration-300">Link To Project</button>
                </a>
              </div>

            </div>
          
          </div>
          
          {/* Item 2 */}
          <div style={{backgroundImage:`url(${SUAS_GUI})`}} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">  {/* content-div is a special name to add custom css : erfer : index.css */}
      
            <div className="opacity-0 group-hover:opacity-100" >
              <span className="text-2xl font bold text-white tracking-wider ">
                Drone GUI
              </span>

              <div>
                <a href="https://github.com/Kunal-Dabas/SUAS-GUI" target="_blank" title="Hosted WebSite" rel="noreferrer">
                <button className=" text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:bg-gray-400 hover:text-white duration-300">Link To Project</button>
                </a>
              </div>

            </div>
          
          </div>


          {/* Item 3 */}
          <div style={{backgroundImage:`url(${ColorDetection})`}} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "> 
              {/* content-div is a special name to add custom css : erfer : index.css */}
      
            <div className="opacity-0 group-hover:opacity-100" >
              <span className="text-2xl font bold text-white tracking-wider ">
                Color Detection
              </span>

              <div className="pt-8 ">
                <a href="https://github.com/Kunal-Dabas/Color_Detecn" target="_blank" title="Github Repo"  rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:bg-gray-400 hover:text-white duration-300">Link To Project</button>
                </a>
              </div>

            </div>
          
          </div>

          {/* Item 4 */}
          <div style={{backgroundImage:`url(${CreditApprovalSys})`}} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "> 
              {/* content-div is a special name to add custom css : erfer : index.css */}
      
            <div className="opacity-0 group-hover:opacity-100" >
              <span className="text-2xl font bold text-white tracking-wider ">
                Credit Approval System
              </span>
              <div className="pt-8 ">
                <a href="https://github.com/Kunal-Dabas/Credit_Approval_System" target="_blank" title="Github Repo"  rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:bg-gray-400 hover:text-white duration-300">Link To Project</button>
                </a>
              </div>

            </div>
          
          </div>

          {/* Item 5 */}
          <div style={{backgroundImage:`url(${SocialMedia})`}} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "> 
              {/* content-div is a special name to add custom css : erfer : index.css */}
      
            <div className="opacity-0 group-hover:opacity-100" >
              <span className="text-2xl font bold text-white tracking-wider ">
                Social Media
              </span>
              <div className="pt-8 ">
                <a href="https://github.com/Kunal-Dabas/SocialMedia" target="_blank" title="Github Repo"  rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:bg-gray-400 hover:text-white duration-300">Link To Project</button>
                </a>
              </div>

            </div>
          
          </div>
        </div>

      </div>

    </div>
  );
};

export default Work;
