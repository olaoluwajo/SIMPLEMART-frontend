import { RiShoppingCartLine } from "react-icons/ri";
import Rating from "../Rating";
import { FaEye, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaNairaSign } from "react-icons/fa6";

function Wishlist() {
  return (
    <div className="w-full grid grid-cols-4 md-lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
      {[1, 2, 3, 4].map((p, i) => (
        <div
          key={i}
          className="border group transition-all duration-500 hover:shadow-md hover:-mt-3 bg-white  dark:bg-[#232D3F]  dark:shadow-slate-500 dark:border-[#232d3f]"
        >
          <div className="relative overflow-hidden">
            <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
              5%{" "}
            </div>

            <img
              className="sm:w-full w-full h-[240px]"
              src="/images/products/1.webp"
              alt=""
            />

            <ul className="flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3">
              <li className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all">
                <FaRegHeart />
              </li>
              <Link
                to="/product/details/new"
                className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all"
              >
                <FaEye />
              </Link>
              <li className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all">
                <RiShoppingCartLine />
              </li>
            </ul>
          </div>

          <div
            className="py-3 text-slate-600 dark:text-white
           px-2"
          >
            <h2 className="font-bold">Product Name data </h2>
            <div className="flex justify-start items-center gap-3">
              <div className="flex justify-center items-center ">
                <FaNairaSign />
                <span>122 </span>
              </div>
             
              <div className="flex">
                <Rating ratings={5} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Wishlist
