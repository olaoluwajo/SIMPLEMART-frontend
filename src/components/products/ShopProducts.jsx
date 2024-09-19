/* eslint-disable react/prop-types */
import { FaEye, FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import Rating from "../Rating";
import { FaNairaSign } from "react-icons/fa6";
import { useSelector } from "react-redux";


function ShopProducts({ styles }) {

    const {
      products
     
    } = useSelector((state) => state.home);


  
  return (
    <div
      className={`w-full grid ${
        styles === "grid"
          ? "grid-cols-4 md-lg:grid-cols-2 md:grid-cols-2"
          : "grid-cols-1 md-lg:grid-cols-2 md:grid-cols-2"
      } gap-4 `}
    >
      {products.map((p, i) => (
        <div
          key={i}
          className={`flex group transition-all duration-1000 hover:shadow-md dark:hover:shadow-slate-400 hover:-translate-y-3 ${
            styles === "grid"
              ? "flex-col justify-start items-start hover:-translate-y-3"
              : "justify-start items-center md-lg:flex-col md-lg:justify-start md-lg:items-start  hover:-translate-x-3  hover:-translate-y-0 p-4"
          } w-full gap-4 bg-white dark:bg-[#232D3F] p-1 rounded-md`}
        >
          <div
            className={
              styles === "grid"
                ? "w-full relative  h-[210px] md:h-[270px] xs:h-[170px] overflow-hidden"
                : "md-lg:w-full relative group h-[210px] md:h-[270px] overflow-hidden"
            }
          >
            <img
              className="h-[240px] rounded-md md:h-[270px] xs:h-[170px] w-full object-cover"
              src={p.images[0]}
              alt={p.name}
            />

            <ul className="absolute flex items-center justify-center w-full gap-2 transition-all duration-700 -bottom-10 group-hover:bottom-3">
              <li className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all">
                <FaRegHeart />
              </li>
              <li className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all">
                <FaEye />
              </li>
              <li className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all">
                <RiShoppingCartLine />
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start justify-start gap-1 p-4 dark:text-white">
            <h2 className="font-bold"> {p.name} </h2>
            <div className="flex items-center justify-start gap-3">
              <div className="flex items-center justify-center ">
                <FaNairaSign />
                <span className="font-semibold text-md"> {p.price}</span>
              </div>
              <div className="flex">
                <Rating ratings={p.rating} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopProducts;
