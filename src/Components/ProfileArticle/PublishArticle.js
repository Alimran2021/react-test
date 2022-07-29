import React from 'react';

const PublishArticle = () => {
    return (
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
    );
};

export default PublishArticle;