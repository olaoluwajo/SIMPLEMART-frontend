/* eslint-disable react/prop-types */
import { FaEye, FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import Rating from "../Rating";
import { FaNairaSign } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link,  useNavigate } from "react-router-dom";
import { add_to_cart, add_to_wishlist, messageClear } from "../../store/reducers/cartReducer";
import toast from "react-hot-toast";
import { useEffect } from "react";

function ShopProducts({ styles }) {
const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.home);
  const { errorMessage, successMessage } = useSelector((state) => state.cart);

const maxLength = 40;
  const add_cart = (id) => {
    if (userInfo) {
      dispatch(
        add_to_cart({
          userId: userInfo.id,
          quantity: 1,
          productId: id,
        })
      );
    } else {
      navigate("/login");
    }
  };

    useEffect(() => {
      if (successMessage) {
        toast.success(successMessage);
        dispatch(messageClear());
      }
      if (errorMessage) {
        toast.error(errorMessage);
        dispatch(messageClear());
      }
    }, [successMessage, errorMessage, dispatch]);

  const add_wishlist = (pro) => {
    dispatch(
      add_to_wishlist({
        userId: userInfo.id,
        productId: pro._id,
        name: pro.name,
        price: pro.price,
        image: pro.images[0],
        discount: pro.discount,
        rating: pro.rating,
        slug: pro.slug,
      })
    );
  };

  function formatNumber(number) {
    return new Intl.NumberFormat("en-US").format(number);
  }

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
            {p.discount ? (
              <div className="flex justify-center items-center absolute text-white    size-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2  z-10">
                {p.discount}%
              </div>
            ) : (
              ""
            )}
            <img
              className="h-[240px]   rounded-md md:h-[270px] xs:h-[170px] w-full object-cover"
              src={p.images[0]}
              alt={p.name}
            />

            <ul className="absolute flex items-center justify-center w-full gap-2 transition-all duration-700 -bottom-10 group-hover:bottom-3">
              <li
                onClick={() => add_wishlist(p)}
                className="w-[38px] h-[38px] md-lg:size-[25px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all border border-black"
              >
                <FaRegHeart />
              </li>

              <Link
                to={`/product/details/${p.slug}`}
                className="border border-black  w-[38px] h-[38px] md-lg:size-[25px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all"
              >
                <FaEye />
              </Link>

              <li
                onClick={() => add_cart(p._id)}
                className="border border-black  w-[38px] h-[38px] md-lg:size-[25px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all"
              >
                <RiShoppingCartLine />
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start justify-start gap-1 p-4 md-lg:pt-1 dark:text-white">
            <h2 className="font-bold md-lg:text-md">
              {" "}
              {p.name.length > maxLength ? (
                <>
                  {p.name.substring(0, maxLength)}
                  ...
                </>
              ) : (
                p.name
              )}{" "}
            </h2>
            <div className="flex items-center justify-start gap-3">
              <div className="flex items-center justify-center md-lg:text-xs">
                <FaNairaSign />
                <span className="font-semibold text-md">
                  {" "}
                  {formatNumber(p.price)}
                </span>
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
}

export default ShopProducts;
