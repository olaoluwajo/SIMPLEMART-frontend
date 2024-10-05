import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FaNairaSign } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { delete_cart_product, get_cart_products, messageClear, quantity_dec, quantity_inc } from "../store/reducers/cartReducer";
import toast from "react-hot-toast";

function Cart() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const {
    cart_products,
    successMessage,
    price,
    buy_product_item,
    shipping_fee,
    outOfStockProduct,
  } = useSelector((state) => state.cart);
  // const cart_products = [1, 2];
  // const outofstock_products = [1, 2, 3];
  // const cart_products = [];
  // const outofstock_products = [];
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(get_cart_products(userInfo.id));
  }, [dispatch, userInfo.id]);

  const redirect = () => {
    navigate("/delivery", {
      state: {
        products: cart_products,
        price: price,
        shipping_fee: shipping_fee,
        items: buy_product_item,
      },
    });
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      dispatch(get_cart_products(userInfo.id));
    }
  }, [dispatch, successMessage, userInfo.id]);

  const inc = (quantity, stock, cart_id) => {
    const temp = quantity + 1;
    if (temp <= stock) {
      dispatch(quantity_inc(cart_id));
    }
  };
  const dec = (quantity, cart_id) => {
    const temp = quantity - 1;
    if (temp !== 0) {
      dispatch(quantity_dec(cart_id));
    }
  };

  function formatNumber(number) {
    return new Intl.NumberFormat("en-US").format(number);
  }


  return (
    <div>
      <section className='bg-[url("/images/banner/shop.png")] h-[220px]   bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col items-center justify-center w-full h-full gap-1 text-white">
              <h2 className="text-3xl font-bold">Cart Page </h2>
              <div className="flex items-center justify-center w-full gap-2 text-2xl">
                <Link to="/">Home</Link>
                <span className="pt-1">
                  <IoIosArrowForward />
                </span>
                <span>Cart </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eeeeee] dark:bg-[#040D12]">
        <div className="w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-16">
          {cart_products.length > 0 || outOfStockProduct > 0 ? (
            <div className="flex flex-wrap">
              <div className="w-[67%] md-lg:w-full">
                <div className="pr-3 md-lg:pr-0">
                  <div className="flex flex-col gap-4">
                    <div className="p-4 bg-white dark:bg-transparent dark:border-slate-600 dark:border">
                      <h2 className="font-semibold text-green-500 text-md">
                        Stock Products {cart_products.length}
                      </h2>
                    </div>
                    {cart_products.map((p, i) => (
                      <div
                        key={i}
                        className="flex bg-white dark:bg-[#232D3F] p-4 flex-col gap-2 divide-y-2 dark:divide-slate-500"
                      >
                        <div className="flex items-center justify-start">
                          <h2 className="font-bold text-md text-slate-600 dark:text-white">
                            {p.shopName}
                          </h2>
                        </div>

                        {p.products.map((pt, i) => (
                          <div key={i} className="flex flex-wrap w-full ">
                            <div className="flex w-7/12 gap-2 sm:w-full">
                              <div className="flex items-center justify-start gap-4 pt-2">
                                <img
                                  className="w-[80px] h-[80px] "
                                  src={pt.productInfo.images[0]}
                                  alt=""
                                />
                                <div className="px-4 dark:text-white text-slate-600">
                                  <h2 className="font-semibold text-md">
                                    {pt.productInfo.name}
                                  </h2>
                                  <span className="text-sm">
                                    {pt.productInfo.brand}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center justify-between w-5/12 sm:w-full sm:mt-3">
                              <div className="pl-4 sm:pl-0">
                                <div className="flex items-center justify-center text-orange-500 dark:text-green-500 ">
                                  <FaNairaSign />
                                  <h2 className="text-lg font-bold text-orange-500 dark:text-green-500">
                                    {formatNumber(
                                      pt.productInfo.price -
                                        Math.floor(
                                          (pt.productInfo.price *
                                            pt.productInfo.discount) /
                                            100
                                        )
                                    )}
                                  </h2>
                                </div>
                                <div className="flex items-center justify-center dark:text-red-500 ">
                                  <FaNairaSign />
                                  <p className="line-through ">
                                    {formatNumber(pt.productInfo.price)}
                                  </p>
                                </div>
                                <p className="dark:text-white">
                                  -{pt.productInfo.discount}%
                                </p>
                              </div>

                              <div className="flex flex-col gap-2">
                                <div className="flex bg-slate-200 dark:bg-slate-600 h-[30px] justify-center items-center text-xl divide-x-2 dark:text-white divide-slate-600 dark:divide-slate-200">
                                  <div
                                    onClick={() => dec(pt.quantity, pt._id)}
                                    className="px-3 cursor-pointer"
                                  >
                                    -
                                  </div>
                                  <div className="px-3">{pt.quantity}</div>
                                  <div
                                    onClick={() =>
                                      inc(
                                        pt.quantity,
                                        pt.productInfo.stock,
                                        pt._id
                                      )
                                    }
                                    className="px-3 cursor-pointer "
                                  >
                                    +
                                  </div>
                                </div>
                                <button
                                  onClick={() =>
                                    dispatch(delete_cart_product(pt._id))
                                  }
                                  className="px-5 py-[3px] bg-red-600 text-white rounded-md"
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}

                    {outOfStockProduct.length > 0 && (
                      <div className="flex flex-col gap-3">
                        <div className="bg-white dark:bg-[#232D3F]  p-4">
                          <h2 className="font-semibold text-red-500 text-md">
                            Out of Stock {outOfStockProduct.length}
                          </h2>
                        </div>

                        <div className="divide-y-2 dark:divide-slate-500 bg-white dark:bg-[#232D3F] p-4">
                          {outOfStockProduct.map((p, i) => (
                            <div
                              className="flex flex-wrap w-full space-y-6"
                              key={i}
                            >
                              <div className="flex w-7/12 gap-2 sm:w-full">
                                <div className="flex items-center justify-start gap-2">
                                  <img
                                    className="w-[80px] h-[80px]"
                                    src={p.products[0].images[0]}
                                    alt=""
                                  />
                                  <div className="px-4 text-slate-600 dark:text-white ">
                                    <h2 className="font-semibold text-md">
                                      {p.products[0].name}{" "}
                                    </h2>
                                    <span className="text-sm">
                                      Brand: {p.products[0].brand}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex justify-between w-5/12 sm:w-full sm:mt-3">
                                <div className="pl-4 sm:pl-0">
                                  <div className="flex items-center justify-center text-orange-500 dark:text-green-500 ">
                                    <FaNairaSign />
                                    <h2 className="text-lg font-bold text-orange-500 dark:text-green-500">
                                      {p.products[0].price -
                                        Math.floor(
                                          (p.products[0].price *
                                            p.products[0].discount) /
                                            100
                                        )}
                                    </h2>
                                  </div>

                                  <div className="flex items-center justify-center dark:text-red-500 ">
                                    <FaNairaSign />
                                    <p className="line-through ">
                                      {p.products[0].price}
                                    </p>
                                  </div>
                                  <p className="dark:text-white">
                                    -{p.products[0].discount}%
                                  </p>
                                </div>

                                <div className="flex flex-col gap-2">
                                  <div className="flex bg-slate-200 dark:bg-slate-600 h-[30px] justify-center items-center text-xl divide-x-2 dark:text-white divide-slate-600 dark:divide-slate-200 ">
                                    <div
                                      onClick={() => dec(p.quantity, p._id)}
                                      className="px-3 cursor-pointer"
                                    >
                                      -
                                    </div>
                                    <div className="px-3">{p.quantity}</div>
                                    <div className="px-3 cursor-pointer ">
                                      +
                                    </div>
                                  </div>
                                  <button
                                    onClick={() =>
                                      dispatch(delete_cart_product(p._id))
                                    }
                                    className="px-5 py-[3px] bg-red-600 text-white rounded-md"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="w-[33%] md-lg:w-full">
                <div className="pl-3 md-lg:pl-0 md-lg:mt-5">
                  {cart_products.length > 0 && (
                    <div className="bg-white dark:bg-[#232D3F] p-3 text-slate-600 dark:text-slate-100 flex flex-col gap-3">
                      <h2 className="text-xl font-bold">Order Summary</h2>
                      <div className="flex items-center justify-between">
                        <span> {buy_product_item} </span>
                        <div className="flex items-center justify-center ">
                          <FaNairaSign />
                          <span>{price} </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Shipping Fee </span>
                        <div className="flex items-center justify-center ">
                          <FaNairaSign />
                          <span>{shipping_fee} </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <input
                          className="w-full px-3 py-2 border rounded-sm dark:bg-transparent border-slate-200 outline-0 focus:border-green-500"
                          type="text"
                          placeholder="Input Voucher Coupon"
                        />
                        <button className="px-5 py-[1px] bg-[#059473] text-white rounded-sm uppercase text-sm">
                          Apply
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <span>Total</span>
                        <div className="flex  text-[#059473]   font-bold justify-center items-center ">
                          <FaNairaSign />
                          <span className="text-lg ">
                            {price + shipping_fee}{" "}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={redirect}
                        className="px-5 py-[6px] rounded-sm hover:shadow-red-500/50 hover:shadow-lg bg-red-500 text-sm text-white uppercase "
                      >
                        Process to Checkout ({buy_product_item})
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center bg-gry-100 min-h-[50vh] dark:bg-gray-800 bg-white">
              <h1 className="mb-4 text-3xl font-bold text-gray-700 dark:text-gray-200">
                Your Cart is Empty
              </h1>
              <p className="mb-6 text-lg text-gray-500 dark:text-gray-400">
                Looks like you haven&apos;t added anything to your cart yet.
              </p>
              <div>
                <Link
                  className="px-4 py-2 text-white transition duration-300 bg-indigo-500 rounded-md dark:bg-green-500 hover:bg-indigo-600 dark:hover:bg-green-600"
                  to="/shops"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Cart;
