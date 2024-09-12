import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useState } from "react";

function Header() {


 const [dark, setDark] = useState(false);

 const darkModeHandler = () => {
   setDark(!dark);
   document.body.classList.toggle("dark");
 };


  return (
    <div className="w-full bg-white dark:bg-[#0F0F0F]">
      <div className="header-top bg-[#caddff] dark:bg-[#232D3F] hidden md:block">
        <div className="w-[85%] lg:w-[90%] mx-auto ">
          <div className="flex w-full justify-between items-center h-[50px] text-slate-500  ">
            <ul className="flex justify-start items-center gap-8 font-semibold text-black dark:text-white">
              <li className="flex relative justify-center items-center gap-2 text-sm after:absolute after:h-[18px] after:w-[1px] after:bg-[#8c8b8b] after:-right-[16px] ">
                <button onClick={() => darkModeHandler()}>
                  {dark ? <IoSunny /> : <IoMoon />}
                </button>
                <span>
                  <MdEmail />
                </span>
                <span>Support@gmail.com</span>
              </li>
              <li className="flex relative justify-center items-center gap-2 text-sm ">
                <span>
                  <IoMdPhonePortrait />
                </span>
                <span> +234567890</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
