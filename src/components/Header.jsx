/* eslint-disable no-unused-vars */
import { MdEmail } from "react-icons/md";
import {
  IoMdArrowDropdown,
  IoMdPhonePortrait,
  IoIosArrowDown,
} from "react-icons/io";
import { IoMoon, IoSunny } from "react-icons/io5";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaList,
  FaLock,
  FaUser,
  FaPhoneAlt,
} from "react-icons/fa";
import { useContext, useState } from "react";
import { DarkModeContext } from "../context/DackModeContext";
import { FaSquareXTwitter, FaHeart, FaCartShopping } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./../Logo";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const { dark, darkModeHandler } = useContext(DarkModeContext);

  const navigate = useNavigate();

  const { categories } = useSelector((state) => state.home);
  const { userInfo } = useSelector((state) => state.auth);

  const { pathname } = useLocation();

  const [showSidebar, setShowSidebar] = useState(true);
  const [categoryShow, setCategoryShow] = useState(true);

  const user = false;
  const wishlist_count = 3;
  // console.log(categories)

  // const categories = [];

  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("");

  const search = () => {
    navigate(`/products/search?category=${category}&&value=${searchValue}`);
  };

  return (
    <div className="w-full  border-b-2 dark:border-slate-600 border-slate-200  bg-[#fefefa] dark:bg-[#040D12]">
      <div className="header-top bg-[#caddff] dark:bg-[#232D3F]  md-lg:hidden">
        <div className="w-[85%] lg:w-[90%] mx-auto ">
          <div className="flex w-full justify-between items-center h-[50px] text-slate-500  ">
            <ul className="flex items-center justify-start gap-8 font-semibold text-black dark:text-white">
              <li className="flex relative justify-center items-center gap-2 text-sm after:absolute after:h-[18px] after:w-[1px] after:bg-[#8c8b8b] after:-right-[16px] ">
                <span>
                  <MdEmail />
                </span>
                <span>Support@gmail.com</span>
              </li>
              <li className="relative flex items-center justify-center gap-2 text-sm ">
                <span>
                  <IoMdPhonePortrait />
                </span>
                <span> +234567890</span>
              </li>
            </ul>

            <div>
              <div className="flex items-center justify-center gap-10">
                <div className="flex items-center justify-center gap-4 text-black dark:text-white">
                  <a href="#">
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    <FaSquareXTwitter />
                  </a>
                  <a href="#">
                    <FaLinkedin />
                  </a>

                  <a href="#">
                    <FaGithub />
                  </a>
                </div>

                <div className="relative flex items-center justify-center gap-1 text-sm cursor-pointer group text-slate-800 dark:text-slate-50 after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:dark:bg-[#080808]  after:-right-[16px] after:absolute before:absolute before:h-[18px] before:bg-[#afafaf] before:dark:bg-[#0a0a0a] before:w-[1px] before:-left-[20px] ">
                  <img src="/images/language.png" alt="" />
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                  <ul className="absolute invisible p-2 text-white transition-all duration-200 rounded-sm top-12 dark:text-black w-[100px] flex flex-col gap-3 group-hover:visible group-hover:top-6 group-hover:bg-black dark:group-hover:bg-white z-10 ">
                    <li className="hover:pl-2">English</li>
                    <li className="hover:pl-2">Hindi</li>
                  </ul>
                </div>

                {userInfo ? (
                  <Link
                    to="/dashboard"
                    className="flex items-center justify-center gap-2 text-sm text-black cursor-pointer dark:text-white "
                  >
                    <span>
                      <FaUser />
                    </span>
                    <span> {userInfo.name}</span>
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="flex items-center justify-center gap-2 text-sm text-black cursor-pointer dark:text-white "
                  >
                    <span>
                      <FaLock />
                    </span>
                    <span>Login</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-white">
        <div className="w-[85%] lg:w-[90%] mx-auto">
          <div className="flex flex-wrap items-center justify-between py-5 md-lg:py-4">
            <div className="w-3/12 md-lg:w-full md-lg:pt-4">
              <div className="flex items-center justify-between">
                <Link to="/">
                  <Logo />
                </Link>
                <div className="flex space-x-10">
                  <button
                    className="hidden text-black md-lg:block dark:text-white"
                    onClick={() => darkModeHandler()}
                  >
                    {dark ? <IoSunny size={30} /> : <IoMoon size={30} />}
                  </button>
                  <div
                    onClick={() => setShowSidebar(false)}
                    className=" items-center justify-center w-[30px] h-[30px] bg-white text-slate-800  dark:bg-slate-600 dark:text-slate-50 border bordeer-slate-600 rounded-sm cursor-pointer lg:hidden md-lg:flex xl:hidden hidden  "
                  >
                    <span>
                      <FaList />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-8/12 md:lg:w-full">
              <div className="flex flex-wrap items-center justify-between pl-8 md-lg:justify-center">
                <ul className="flex items-start justify-start gap-8 text-sm font-bold uppercase md-lg:hidden">
                  <li>
                    <Link
                      to={"/"}
                      className={`p-2 block ${
                        pathname === "/"
                          ? "text-[#059473] "
                          : "text-slate-600 dark:text-[#F5E8C7]"
                      } `}
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      to={"/shops"}
                      className={`p-2 block ${
                        pathname === "/shops"
                          ? "text-[#059473]"
                          : "text-slate-600 dark:text-[#F5E8C7]"
                      } `}
                    >
                      Shops
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/blog"
                          ? "text-[#059473]"
                          : "text-slate-600 dark:text-[#F5E8C7]"
                      } `}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/about"
                          ? "text-[#059473]"
                          : "text-slate-600 dark:text-[#F5E8C7]"
                      } `}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/contact"
                          ? "text-[#059473]"
                          : "text-slate-600 dark:text-[#F5E8C7]"
                      } `}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>

                <div className="flex items-center justify-center gap-5 md-lg:hidden">
                  <div className="flex justify-center gap-5">
                    <div className="relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]">
                      <span className="text-xl text-green-500">
                        <FaHeart />
                      </span>
                      <div className="w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px] ">
                        {wishlist_count}
                      </div>
                    </div>
                    <Link
                      to={"/cart"}
                      className="relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]"
                    >
                      <span className="text-xl text-green-500">
                        <FaCartShopping />
                      </span>
                      <div className="w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px] ">
                        {wishlist_count}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="text-black md-lg:hidden dark:text-white"
              onClick={() => darkModeHandler()}
            >
              {dark ? <IoSunny size={30} /> : <IoMoon size={30} />}
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md-lg:block">
        <div
          onClick={() => setShowSidebar(true)}
          className={`fixed duration-200 transition-all ${
            showSidebar ? "invisible" : "visible"
          } hidden md-lg:block w-screen h-screen bg-[rgba(0,0,0,0.5)] top-0 left-0 z-20 `}
        ></div>

        <div
          className={`w-[300px] z-[9999] transition-all duration-200 fixed ${
            showSidebar ? "-left-[300px]" : "left-0 top-0"
          } overflow-y-auto bg-white dark:bg-[#040D12] h-screen py-6 px-8 `}
        >
          <div className="flex flex-col justify-start gap-6">
            <Link to="/">
              <Logo />
            </Link>
            <div className="flex items-center justify-start gap-10">
              <div className="flex group cursor-pointer text-slate-800 text-sm justify-center items-center gap-1 relative after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] after:absolute ">
                <img src="/images/language.png" alt="" />
                <span>
                  <IoMdArrowDropdown />
                </span>
                <ul className="absolute invisible transition-all top-12 rounded-sm duration-200 text-white p-2 w-[100px] flex flex-col gap-3 group-hover:visible group-hover:top-6 group-hover:bg-black z-10">
                  <li>Hindi</li>
                  <li>English</li>
                </ul>
              </div>
              {userInfo ? (
                <Link
                  to="/dashboard"
                  className="flex items-center justify-center gap-2 text-sm text-black cursor-pointer dark:text-white "
                >
                  <span>
                    <FaUser />
                  </span>
                  <span> {userInfo.name}</span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center justify-center gap-2 text-sm text-black cursor-pointer dark:text-white "
                >
                  <span>
                    <FaLock />
                  </span>
                  <span>Login</span>
                </Link>
              )}
            </div>

            <div className="flex justify-start gap-5">
              <div className="relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]">
                <span className="text-xl text-green-500">
                  <FaHeart />
                </span>
                <div className="w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px] ">
                  {wishlist_count}
                </div>
              </div>
              <Link
                to={"/cart"}
                className="relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]"
              >
                <span className="text-xl text-green-500">
                  <FaCartShopping />
                </span>
                <div className="w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px] ">
                  {wishlist_count}
                </div>
              </Link>
            </div>

            <ul className="flex flex-col items-start justify-start text-sm font-bold uppercase">
              <li>
                <Link
                  className={`py-2 block ${
                    pathname === "/" ? "text-[#059473]" : "text-slate-600"
                  } `}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to={"/shops"}
                  className={`py-2 block ${
                    pathname === "/shops"
                      ? "text-[#059473]"
                      : "text-slate-600 dark:text-[#F5E8C7]"
                  } `}
                >
                  Shops
                </Link>
              </li>
              <li>
                <Link
                  className={`py-2 block ${
                    pathname === "/blog"
                      ? "text-[#059473]"
                      : "text-slate-600 dark:text-[#F5E8C7]"
                  } `}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className={`py-2 block ${
                    pathname === "/about"
                      ? "text-[#059473]"
                      : "text-slate-600 dark:text-[#F5E8C7]"
                  } `}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className={`py-2 block ${
                    pathname === "/contact"
                      ? "text-[#059473]"
                      : "text-slate-600 dark:text-[#F5E8C7]"
                  } `}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="flex items-center justify-start gap-4 text-black dark:text-white">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaSquareXTwitter />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaGithub />{" "}
              </a>
            </div>

            <div className="flex items-center justify-end w-full gap-3 md-lg:justify-start">
              <div className="w-[48px] h-[48px] rounded-full flex bg-[#f5f5f5] justify-center items-center ">
                <span>
                  <FaPhoneAlt />
                </span>
              </div>
              <div className="flex flex-col justify-end gap-1">
                <h2 className="text-sm font-medium text-slate-700 dark:text-slate-50 ">
                  +134343455
                </h2>
                <span className="text-xs dark:text-slate-300">
                  Support 24/7
                </span>
              </div>
            </div>

            <ul className="flex flex-col justify-start items-start gap-3 text-[#1c1c1c] dark:text-green-600">
              <li className="flex items-center justify-start gap-2 text-sm">
                <span>
                  <MdEmail />
                </span>
                <span>support@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-[85%] lg:w-[90%] mx-auto">
        <div className="flex flex-wrap w-full md-lg:gap-4">
          <div className="w-3/12 md-lg:w-full">
            <div className="relative bg-white">
              <div
                onClick={() => setCategoryShow(!categoryShow)}
                className="h-[50px] md-lg:h-[40px] bg-[#059473] text-white flex justify-center md-lg:justify-between md-lg:px-6 items-center gap-3 font-bold text-md cursor-pointer"
              >
                <div className="flex items-center justify-center gap-3">
                  <span>
                    <FaList />
                  </span>
                  <span>All Category </span>
                </div>
                <span className="pt-1">
                  <IoIosArrowDown />
                </span>
              </div>

              <div
                className={`${
                  categoryShow ? "h-0" : "h-[400px] md-lg:h-[300px]"
                } overflow-hidden transition-all md-lg:relative duration-500 absolute z-[9999] bg-[#dbf3ed] dark:bg-[#232D3F]  w-full border-x `}
              >
                {" "}
                <ul className="py-2 font-medium text-slate-800 dark:text-slate-50 ">
                  {categories.map((c, i) => {
                    return (
                      <li key={i}>
                        <Link
                          to={`/products?category=${c.name}`}
                          className="flex justify-start items-center gap-2 px-[24px] py-[6px]  hover:bg-[#059473] hover:text-white font-semibold cursor-pointer"
                        >
                          <img
                            src={c.image}
                            className="w-[30px] h-[30px] rounded-full overflow-hidden"
                            alt=""
                          />
                          <span className="block text-sm">{c.name} </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="w-9/12 pb-4 pl-8 md-lg:pl-0 md-lg:w-full">
            <div className="flex flex-wrap items-center justify-between w-full md-lg:gap-6">
              <div className="w-8/12 md-lg:w-full">
                <div className="flex border dark:border-slate-600 h-[50px] md-lg:h-[40px] items-center relative gap-6">
                  <div className="relative after:absolute after:h-[25px] after:w-[1px] after:bg-[#afafaf] after:-right-[15px] md:hidden">
                    <select
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-[150px] text-slate-600 dark:text-slate-400  font-semibold bg-transparent px-2 h-full outline-0 border-none"
                      name=""
                      id=""
                    >
                      <option value="">Select Category</option>
                      {categories.map((c, i) => (
                        <option
                          value={c.name}
                          key={i}
                          className="text-slate-600"
                        >
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    className="relative w-full h-full px-3 bg-transparent text-slate-500 dark:text-slate-100 outline-0"
                    onChange={(e) => setSearchValue(e.target.value)}
                    type="text"
                    name=""
                    id=""
                    placeholder="What do you need"
                  />
                  <button
                    onClick={search}
                    className="bg-[#059473] right-0 absolute px-8 h-full font-semibold uppercase text-white"
                  >
                    Search
                  </button>
                </div>
              </div>

              <div className="block w-4/12 pl-2 md-lg:hidden md-lg:w-full md-lg:pl-0">
                <div className="flex items-center justify-end w-full gap-3 md-lg:justify-start">
                  <div className="w-[48px] h-[48px] rounded-full flex bg-[#f5f5f5] justify-center items-center ">
                    <span>
                      <FaPhoneAlt />
                    </span>
                  </div>
                  <div className="flex flex-col justify-end gap-1">
                    <h2 className="font-medium text-md text-slate-700 dark:text-slate-50">
                      +1343-43233455
                    </h2>
                    <span className="text-sm dark:text-slate-300">
                      Support 24/7
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
