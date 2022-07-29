import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SideMenuBar from '../Home/SideMenuBar/SideMenuBar';
import socialImage from "./socialIcon.json";

const ProfileArticle = () => {
    return (
        <main className="max-w-[1440px] h-full flex">
           <div className="w-[128.33px]">
                 <SideMenuBar/> 
           </div>
           <div className="w-[881.56px] border-x-[1.46px] border-[#E6E6E6]">
              <div className="w-[766.35px] mx-auto pt-[100.62px] ">
                <h2 className="font-bold text-[36.46px] text-[#253655]">MOHAMED AMINE</h2>
                <div className="w-[250px] flex items-center justify-between mt-[69.2px] mb-[13.73px]">
                    <Link to="/"><span className="font-bold text-[18.23px] text-[#00A2DD]">Published</span></Link>
                    <Link to="/"><span className="font-bold text-[18.23px] text-[#253655]">In Review</span></Link>
                    <Link to="/"><span className="font-bold text-[18.23px] text-[#253655]">Drafts</span></Link>
                </div>
                <div className="w-[766.35px] border-b-[1.46px] border-[#E6E6E6]"></div>
                <div>
                    <div className="w-64 flex items-center justify-between mt-[37.92px]">
                        <img
                        className="w-[42.29px]"
                        src="/images/profile-dwon.png"
                        alt=""
                        />
                        <p className="font-normal text-[18.23px] text-[#000000]">Mohamed Amine</p>
                        <span className="font-normal text-[18.23px] text-[#82859C]">. Jan 20</span>
                    </div>
                    <div className="flex items-center justify-center mb-[30.15px]">
                        <div className="">
                            <p className="font-bold text-[21.88px] text-[#253655] my-[9px]">Flutter best practices for Improve Performance</p>
                            <p className="font-normal text-[19.79px] text-[#394E79]">Does flutter performance fast enough compared to other hybrid platforms? 
                            The answer is Yes it is, but out of that thinking let’s jump on some amazing practices for performance and optimization. 1. Use Widgets over Functions...</p>
                        </div>
                        <img
                        src="/images/image-12.png"
                        alt=""
                        />                        
                    </div>
                    <div className="flex items-center justify-between w-[614px] mb-[37.92px]">
                        <div className="flex items-center justify-between w-[266px]">
                            <button className="font-normal text-[18.23px] text-[#253655] w-[119.58px] h-[35px] bg-[#E6E6E6] rounded-full">Coding</button>
                            <button className="font-normal text-[18.23px] text-[#253655] w-[119.58px] h-[35px] bg-[#E6E6E6] rounded-full">Work</button>
                        </div>
                        <img
                        className="w-[18.23px] text-[#000000]"
                        src="/images/vact-2.png"
                        alt=""
                        />
                    </div>
                    <div className="border-b-[1.46px] border-[#E6E6E6]"></div>
                    <div className="relative pt-[78.75px] pb-[64.9px] flex justify-center">
                      <img
                       className="w-[24px] absolute left-[233.93px] top-[103.58px] z-10"
                       src="/images/plus.png"
                       alt=""
                      /> 
                      <button className="w-[412.71px] h-[70.73px] hover:scale-105 duration-100 
                       bg-[#00A2DD] text-[#FFFFFF] rounded-full font-bold text-[23.33px]">Write New Article</button>
                    </div>
                </div>
              </div>
              
           </div> 
           {/* <div className="border-"></div> */}

           <div className="max-w-[390px]">
           <aside className="ml-[38.7px] mr-[18.99px] mt-[53.31px]">
            <div className=" relative flex items-center justify-center w-[327.27px] h-[64.26px] border-[1.46px] border-[#D8D8D8] rounded-full">
                <img
                 className="absolute left-[20.61px] text-[#253655]"
                 src="/images/search.png"
                 alt=""
                />
                {/* <span className="font-normal text-[17.52px] text-[#82859C] absolute left-[60.61px]">Search...</span> */}
                <input
                 className="w-[210px] h-8 focus:outline-none" placeholder="Search" type="text" name="search"
                />
            </div> 
            <div className="mt-[36.46px]">
                <div className="text-center w-[210.28px] mx-auto">
                    <img
                    className="w-[220.21px] h-[169.9px]"
                    src="/images/profile.png"
                    alt=""
                    />
                    <p className="font-bold text-[23.33px] text-[#253655]">MOHAMED AMINE</p>
                    <p className="w-[173.44px] font-normal text-[17.5px] text-[#253655] mx-auto">Software Enginnering Student at INPT</p>
                </div>
                
                <div className="flex items-center justify-between mt-[25.27px] mb-[38.52px]">
                    <span className="font-bold text-[18.23px] text-[#253655]">1 Articles</span>
                    <span className="font-bold text-[18.23px] text-[#253655]">88 Followers</span>
                    <span className="font-bold text-[18.23px] text-[#253655]">200 Following</span>
                </div>
                <Link to="/">
                   <p className="font-normal text-[18.23px] text-[#00A2DD] mb-[44.08px] text-center">Edite Profile</p>
                </Link>
                <div className="w-[321.57px] border-b-[1.46px] text-[#E6E6E6]"></div>
                <div>
                    <NavLink className="flex items-center justify-around w-[321.57px] mt-[46px]" to="/">
                        {
                        socialImage.map(({socialImg},i) => (
                            
                            <img
                            key ={i}
                            className = "w-[36.46px] h-[36.46px]"
                            src = {`/images/${socialImg}`}
                            alt = ""
                            />
                        ))
                        }
                    </NavLink>
                </div>
            </div>
        </aside>
           </div> 
        </main>
    );
};

export default ProfileArticle;