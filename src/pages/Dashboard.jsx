import { useState } from "react";
import { FaBorderAll, FaHeart, FaList } from "react-icons/fa6";
import { IoIosHome, IoMdLogOut } from "react-icons/io";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
   const [filterShow, setFilterShow] = useState(false);


  return (
    <div>
      <div className="bg-slate-200 dark:bg-[#040D12] pt-5">
        <div className="w-[90%] mx-auto md-lg:block hidden">
          <div>
            <button
              onClick={() => setFilterShow(!filterShow)}
              className="text-center py-3 px-3 bg-green-500 text-white"
            >
              <FaList />
            </button>
          </div>
        </div>

        <div className="h-full mx-auto">
          <div className="py-4  flex md-lg:w-[90%] mx-auto relative">
            <div
              className={`rounded-md z-50 md-lg:absolute transition-all  ${
                filterShow ? "-left-4" : "-left-[360px]"
              } w-[270px] ml-4 bg-white dark:bg-[#232D3F] md-lg:border`}
            >
              <ul className="py-2 text-slate-600 dark:text-slate-100 px-4">
                <li className="flex justify-start items-center gap-2 py-2  hover:pl-2  transition-all duration-200">
                  <span className="text-xl">
                    <IoIosHome />
                  </span>
                  <Link to="/dashboard" className="block">
                    Dashboard
                  </Link>
                </li>
                <li className="flex justify-start items-center gap-2 py-2 hover:pl-2  transition-all duration-200">
                  <span className="text-xl">
                    <FaBorderAll />
                  </span>
                  <Link to="/dashboard/my-orders" className="block">
                    My Orders
                  </Link>
                </li>
                <li className="flex justify-start items-center gap-2 py-2 hover:pl-2  transition-all duration-200">
                  <span className="text-xl">
                    <FaHeart />
                  </span>
                  <Link to="/dashboard/my-wishlist" className="block">
                    Wishlist
                  </Link>
                </li>
                <li className="flex justify-start items-center gap-2 py-2 hover:pl-2  transition-all duration-200">
                  <span className="text-xl">
                    <IoChatbubbleEllipsesSharp />
                  </span>
                  <Link to="/dashboard" className="block">
                    Chat
                  </Link>
                </li>
                <li className="flex justify-start items-center gap-2 py-2 hover:pl-2  transition-all duration-200">
                  <span className="text-xl">
                    <RiLockPasswordLine />
                  </span>
                  <Link to="/dashboard/change-password" className="block">
                    Change Password
                  </Link>
                </li>
                <li className="flex justify-start items-center gap-2 py-2 hover:pl-2  transition-all duration-200">
                  <span className="text-xl">
                    <IoMdLogOut />
                  </span>
                  <Link to="/dashboard" className="block">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-[calc(100%-270px)] md-lg:w-full">
              <div className="mx-4 md-lg:mx-0">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard
