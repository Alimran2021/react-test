import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileDrawer from './MobileDrawer/MobileDrawer';

const SideMenuBar = () => {
    // const [drawer, setDrawer] = useState(false);
    // const toggleDrawer = () => setDrawer((v) => !v);
  
    return (
        <aside className="mx-auto w-[128.33px]">
            <div className="ml-[33.69px] mt-[62.09px] relative">
              <Link to="/">
                    <p className="w-[40.89px] h-[40.89px] rounded-full bg-[#253655]">
                    </p>
                    <p className="w-[40.89px] h-[40.89px] rounded-full
                    bg-[#00A2DD] absolute left-[25.56px] top-[0]">
                    </p>
                    <img className="w-[17.52px] h-[21.91px] absolute 
                    left-[37.13px] top-[9.49px]" src="/images/Vector.png" alt=""/>
              </Link>

            </div>
            {/* <div className="md:hidden bg-darkpink-200">
            {!drawer && (
              <button type="button" onClick={toggleDrawer}>
                <img className="w-[30px]" src="/images/menu.svg" alt="" />
              </button>
            )}
            <MobileDrawer drawer={drawer} toggleDrawer={toggleDrawer} />
          </div> */}
            <div className="ml-[46.73px] mt-[70px] mb-[90.73px]">
                <ul className="">
                        <li>
                            <Link to="/">
                                <img className="w-[34.89px] h-[32.95px] mb-[60.06px]" src="/images/home-icon.png" alt=""/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile">
                                <img className="w-[29.58px] h-[34.59px] mb-[61.72px]" src="/images/icon_notifications.png" alt=""/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/profileArticle">
                                <img className="w-[29.14px] h-[29.14px] mb-[57.04px]" src="/images/fulent-text.png" alt=""/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <img className="w-[27.1px] h-[34.44px] mb-[50px]" src="/images/ant.png" alt=""/>
                            </Link>
                        </li>
                        <div className="border-b-[1.46px] border-[#E6E6E6] mb-[50px] w-[40px]"></div>
                        <li>
                            <Link to="/">
                                <img className="w-[35.88px] h-[32.35px] ml-[5px]" src="/images/file-pen-solid 1.png" alt=""/>
                            </Link>
                        </li>
                </ul>
            </div>
                <img
                 className="w-[79.59px] h-[61.34px] rounded-full ml-[26.29px] mb-[20.45px] mr-[22.64px]"
                 src="/images/profile-dwon.png"
                 alt=""
                />
        </aside>
    );
};

export default SideMenuBar;