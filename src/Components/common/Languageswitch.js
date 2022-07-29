import React, { useState } from "react";

const langs = ["en", "bn", "fa", "Uk"];


const Languageswitch = () => {
    const [currentLang, setCurrentLang] = useState(0);
  const [palette, setPalette] = useState(false);
  const togglePalette = () => setPalette((v) => !v);

  return (
    <>
      {palette && (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 bg-gray-0 bg-opacity-0"
          onClick={() => setPalette(false)}
        />
      )}
      <div className="relative">
        <div className="flex items-center gap-2.5">
          <img className="w-6 h-6" src="/images/jam_world.svg" alt="" />
          <button
            type="button"
            className="flex items-center"
            onClick={togglePalette}
          >
            <span className="font-bold text-md text-gray-300 uppercase">
              {langs[currentLang]}
            </span>
            <img
              className="w-6 h-6"
              src="/images/bx_bx-chevron-down.svg"
              alt=""
            />
          </button>
        </div>
        <div
          className={`absolute left-1/2 md:left-auto md:right-0 -translate-x-1/2 md:translate-x-0 top-8 duration-200 ${
            palette ? "visible opacity-100" : "opacity-0 invisible"
          }`}
        >
          <ul className="list-none min-w-[100px] rounded bg-gray-200 text-gray-700 overflow-hidden">
            {langs.map((_, i) => (
              <li key={i} className="">
                <button
                  className={`font-bold text-sm text-gray-700 uppercase px-4 py-2.5 cursor-pointer hover:bg-gray-300 focus:bg-primary-700 duration-150 w-full text-left ${
                    currentLang === i ? "bg-primary-700" : ""
                  }`}
                  onClick={() => {
                    setCurrentLang(i);
                    togglePalette();
                  }}
                >
                  {" "}
                  {_}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Languageswitch;