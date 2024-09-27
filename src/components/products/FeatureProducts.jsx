/* eslint-disable react/prop-types */
import Rating from "../Rating";
import { FaEye, FaRegHeart } from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { add_to_cart, messageClear } from "../../store/reducers/cartReducer";
import { useEffect } from "react";
import toast from "react-hot-toast";

function FeatureProducts({ products }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { errorMessage, successMessage } = useSelector((state) => state.cart);

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

  return (
    <div className="w-[85%] flex flex-wrap mx-auto ">
      <div className="w-full">
        <div className="text-center flex flex-col  justify-center items-center text-2xl text-slate-600 dark:text-[#fff9e3] font-bold relative pb-[35px]">
          <h2> Featured Products</h2>
          <div className="w-[100px] h-[2px] bg-[#059473] mt-2"></div>
        </div>
      </div>

      <div className="w-full grid grid-cols-4 md-lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6">
        {products.map((p, i) => (
          <div
            key={i}
            className="border dark:border-slate-800 group transition-all duration-500 hover:shadow-md dark:hover:shadow-slate-400 hover:-mt-3"
          >
            <div className="relative overflow-hidden ">
              {p.discount ? (
                <div className="flex justify-center items-center absolute text-white    size-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2  z-10">
                  {p.discount}%
                </div>
              ) : (
                ""
              )}
              <img
                className="object-fill md-lg:h-[140px] w-full h-[300px] group-hover:scale-[1.1] duration-500 transition-all "
                src={p.images[1]}
                alt={`Product ${p.name}`}
              />

              <ul className="flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3">
                <li className="w-[38px] h-[38px] md-lg:size-[25px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all">
                  <FaRegHeart />
                </li>

                <Link
                  to="/product/details/new"
                  className="w-[38px] h-[38px] md-lg:size-[25px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all"
                >
                  <FaEye />
                </Link>

                <li
                  onClick={() => add_cart(p._id)}
                  className="w-[38px] h-[38px] md-lg:size-[25px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all"
                >
                  <RiShoppingCartLine />
                </li>
              </ul>
            </div>
            <div className="py-3 text-slate-600 dark:text-[#fff9e3] md-lg:text-sm    px-2">
              <h2 className="font-bold">{p.name} </h2>
              <div className="flex justify-start items-center gap-3">
                <div className="flex justify-center items-center py-1">
                  <FaNairaSign />
                  <span className="text-xs font-semibold">{p.price}</span>
                </div>
              </div>
              <div className="flex">
                <Rating ratings={p.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureProducts;
