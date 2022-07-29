import React from 'react';
import Drawer from 'react-modern-drawer';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Languageswitch from '../../../common/Languageswitch';
import Button from '../../../common/Button';
import Hr from '../../../common/Hr';
import Links from '../Links';



const MobileDrawer = (props) => {
    const {drawer,toggleDrawer} = props
    return (
<Drawer
      style={{ width: 187, background: '#11011E' }}
      className="bg-darkpink-200"
      open={drawer}
      onClose={toggleDrawer}
      direction="right"
    >
      <Scrollbars style={{ width: 187, height: '100%' }}>
        <div
          className="py-6 px-7 bg-center bg-cover min-h-screen"
          style={{
            backgroundColor: 'rgb(255 255 255 / 10%)',
            backgroundImage: "url('/images/bg.svg')",
          }}
        >
          <div className="flex gap-3 items-center justify-center ml-4 mb-1.5">
            <b className="text-primary-700 text-md p-2.5">MENU</b>
            <button type="button" onClick={toggleDrawer}>
              <img className="w-5 h-5" src="/images/x-symbol-svgrepo-com 1.svg" alt="" />
            </button>
          </div>
          <Hr className="mb-5" />
          <div className="mb-6 flex flex-col gap-4 items-center">
            <Languageswitch />
            <Button url="/" text="Connect Wallet" />
          </div>
          <Hr className="mb-2.5" />
          <div>
            <Links toggle={toggleDrawer} />
          </div>
          <Hr className="mb-[15px]" />
          <div className="flex flex-col gap-[15px] items-center">
            <button to="/">
              <img className="w-[74px]" src="/images/Frame 151.svg" alt="" />
            </button>
          </div>
        </div>
      </Scrollbars>
    </Drawer>
    );
};

export default MobileDrawer;