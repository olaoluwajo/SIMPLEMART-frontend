import { RiShoppingCartLine } from "react-icons/ri";
import Rating from "../Rating";
import { FaEye, FaRegHeart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaNairaSign } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  add_to_cart,
  get_wishlist_products,
  messageClear,
  remove_wishlist,
} from "../../store/reducers/cartReducer";
import toast from "react-hot-toast";
import EmptyButton from "../ui/EmptyButton";

function Wishlist() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { wishlist, successMessage, wishlist_count } = useSelector(
    (state) => state.cart
  );

  const maxLength = 30;

  const add_cart = (id) => {
    if (userInfo) {
      dispatch(
        add_to_cart({
          userId: userInfo.id,
          quantity: 1,
          productId: id,
        })
      );
    }
  };

  useEffect(() => {
    dispatch(get_wishlist_products(userInfo.id));
  }, [dispatch, userInfo.id]);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
  }, [dispatch, successMessage]);

  return (
    <div>
      {wishlist_count > 0 ? (
        <div className="grid w-full grid-cols-4 gap-6 md-lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {wishlist.map((p, i) => (
            <div
              key={i}
              className="border group transition-all duration-500 hover:shadow-md hover:-mt-3 bg-white  dark:bg-[#232D3F]  dark:shadow-slate-500 dark:border-[#232d3f]"
            >
              <div className="relative overflow-hidden">
                {p.discount ? (
                  <div className="flex justify-center items-center absolute text-white    size-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2  z-10">
                    {p.discount}%
                  </div>
                ) : (
                  ""
                )}
                <img
                  className="sm:w-full w-full h-[240px] md-lg:object-contain"
                  src={p.image}
                  alt=""
                />
                <ul className="absolute flex items-center justify-center w-full gap-2 transition-all duration-700 -bottom-10 group-hover:bottom-3">
                  <li
                    onClick={() => dispatch(remove_wishlist(p._id))}
                    className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all"
                  >
                    <FaRegHeart />
                  </li>
                  <Link
                    to={`/product/details/${p.slug}`}
                    className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all"
                  >
                    <FaEye />
                  </Link>
                  <li
                    onClick={() => add_cart(p._id)}
                    className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all"
                  >
                    <RiShoppingCartLine />
                  </li>
                </ul>
              </div>

              <div className="px-2 py-3 text-slate-600 dark:text-white">
                <h2 className="font-bold">
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
                  <div className="flex items-center justify-center ">
                    <FaNairaSign />
                    <span>{p.price} </span>
                  </div>

                  <div className="flex">
                    <Rating ratings={p.rating} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col p-6 items-center justify-center bg-gray-100 dark:bg-[#232D3F]">
          <FaSearch className="mb-4 text-6xl text-gray-500 dark:text-white" />
          <h1 className="mb-2 text-3xl font-bold text-gray-700 dark:text-white">
            No Products Found
          </h1>
          <p className="mb-6 text-lg text-gray-500 dark:text-white">
            You haven&apos;t wished for any product yet
          </p>

          <EmptyButton text="Go Back to Home" to={"/"} />
        </div>
      )}
    </div>
  );
}

export default Wishlist;
