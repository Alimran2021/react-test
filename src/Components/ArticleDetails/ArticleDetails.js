import React from 'react';
import { Link } from 'react-router-dom';
import SideMenuBar from '../Home/SideMenuBar/SideMenuBar';

const ArticleDetails = () => {
    return (
        <main className="max-w-[1440px] w-auto flex">
        <div className="w-[128.33px]">
              <SideMenuBar/> 
        </div>
        <div className="w-[881.56px] border-x-[1.46px] border-[#E6E6E6]">
           <div className="w-[766.35px] mx-auto pt-[73.2px] ">
                <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-between w-[190px] mb-[30.05px]">
                        <img
                            className="w-[54.77px]"
                            src="/images/amira-1.png"
                            alt=""
                            />
                            <div className="leading-[2.10rem]">
                                <p className="font-normal text-[23.37px] text-[#000000] my-0">Amira Daifi</p>
                                <span className="font-normal text-[21.91px] text-[#82859C]">Jan 16</span>
                            </div>
                      </div>
                        <div className="flex items-center justify-between w-[55px]">
                            <button>
                            <img className="w-[17.4px] h-[22.36px] text-[#253655]" src="/images/vact-1.png" alt=""/>
                            </button>
                            <button>
                            <img className="w-[17.4px] text-[#000000]" src="/images/vact-2.png" alt=""/>
                            </button>
                    </div>
                    </div>
                    <div>
                        <p className="font-bold text-[32.86px] text-[#253655]">Is flutter worth learning in 2022?</p>
                        <p className="font-normal text-[25.56px] text-[#253655] leading-[2.20rem] mt-5 mb-6 w-[749.65px]">
                        It is always a good approach to learn new frameworks or technology to improve your tech skills. 
                        But is flutter worth learning in 2022?
                        </p>
                        <img
                        src="/images/chart.png"
                        alt=""
                        />
                    </div>
                    <div className="w-[755px]">
                        <p className="font-normal text-[25px] text-[#253655] leading-[2.10rem] mt-6">Here are some of the keys that make flutter was born way different than other frameworks.</p>
                        <span className="font-normal text-[25px] text-[#253655] leading-[2.10rem]">Greate UI</span>
                        <p className="font-normal text-[25px] text-[#253655] leading-[2.10rem] mt-6">I meant really great UI, It is by definition built-in for beautiful UI. Flutter has very good resources on great UI and animation.</p>
                        <span className="font-normal text-[25px] text-[#253655] leading-[2.10rem]">Native Performance</span>
                        <p className="font-normal text-[25px] text-[#253655] leading-[2.10rem] my-6">Flutter doesn't use any webview or web technology such as HTML to render view/UI. It uses dart language and canvas bridge to build beautiful animated UI.</p>
                        <span className="font-normal text-[25px] text-[#253655] leading-[2.10rem]">Canvas Advantage</span>
                        <p className="font-normal text-[25px] text-[#253655] leading-[2.10rem]">Flutter uses Canvas to draw UI in your application and since all platforms such as Mobiles, Desktop, and the web support canvas, Flutter has the advantage of multiplatform support.
                           re crappy apps in a flutter in the coming future too (😁😁😁).</p>
                    </div>
                    <div className="w-[571px] h-[92px] mt-[15px] mb-[29px] flex items-center justify-around mx-auto bg-[#E6E6E6] rounded-full">
                        <div className="flex items-center justify-between w-20">
                            <img
                              src="/images/like.png"
                              alt=""
                            />
                            <span>200</span>
                        </div>
                        <div className="flex items-center justify-between w-20">
                            <img
                                src="/images/mess.png"
                                alt=""
                            />
                            <span>200</span>
                        </div>
                        <img
                         src="/images/vact-2.png"
                         alt=""
                        />
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
             <div className="text-center w-[326.28px]">
                 <img
                 className="mx-auto mb-[22px]"
                 src="/images/amira-2.png"
                 alt=""
                 />
                 <p className="font-bold text-[23.33px] text-[#253655] mb-[18px]">AMIRA DAIFI</p>
                 <p className="w-[276.44px] font-normal text-[17.5px] text-[#253655] mx-auto">Native Android / Flutter Developer | Flutter enthusiast | Content Creator</p>
             </div>
             
             <div className="mt-[21.27px] mb-[34.52px] mx-auto">
                 <p className="font-bold text-[18.23px] text-[#253655] text-center">88 Followers</p>
             </div>
             <div className="text-center">
                <button>
                    <span className="font-bold text-[17.52px] text-white w-[173px] h-[49px] bg-[#00A2DD] rounded-full flex items-center justify-center
                    mb-[34.08px] text-cente mx-auto">Edite Profile</span>
                </button>
             </div>

             <div className="w-[321.57px] border-b-[1.46px] text-[#E6E6E6]"></div>
         </div>
     </aside>
        </div> 
     </main>
    );
};

export default ArticleDetails;