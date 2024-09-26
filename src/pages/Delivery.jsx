import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { FaNairaSign } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { place_order } from "../store/reducers/orderReducer";

function Delivery() {
  // console.log(state);

  const {
    state: { products, price, shipping_fee, items },
  } = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const placeOrder = () => {
    dispatch(
      place_order({
        price,
        products,
        shipping_fee,
        items,
        shippingInfo: state,
        userId: userInfo.id,
        navigate,
      })
    );
  };

  const [res, setRes] = useState(false);
  const [state, setState] = useState({
    name: "",
    address: "",
    phone: "",
    post: "",
    province: "",
    city: "",
    area: "",
  });

  function inputHandle(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    // console.log(state);
  }

  function save(e) {
    e.preventDefault();
    const { name, address, phone, post, province, city, area } = state;
    if (name && address && phone && post && province && city && area) {
      setRes(true);
    }
    // console.log(state)
  }

  return (
    <div>
      <section className='bg-[url("/images/banner/shop.png")] h-[220px]   bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">Shipping & Delivery </h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-1">
                  <IoIosArrowForward />
                </span>
                <span>Delivery </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eeeeee]  dark:bg-[#040D12]">
        <div className="w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-16">
          <div className="w-full flex flex-wrap">
            <div className="w-[67%] md-lg:w-full">
              <div className="flex flex-col gap-3">
                <div className="bg-white  dark:bg-[#232D3F]  p-6 shadow-sm rounded-md">
                  <h2 className="text-slate-600 dark:text-white  font-bold pb-3">
                    Delivery Information{" "}
                  </h2>
                  {!res && (
                    <>
                      <form onSubmit={save}>
                        <div className="flex md:flex-col md:gap-2 w-full gap-5 text-slate-600 dark:text-white">
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="name"> Name </label>
                            <input
                              onChange={inputHandle}
                              value={state.name}
                              type="text"
                              className="w-full px-3 py-2 border border-slate-200 dark:bg-transparent outline-none focus:border-green-500 rounded-md"
                              name="name"
                              id="name"
                              placeholder="Name"
                            />
                          </div>

                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="address"> Address </label>
                            <input
                              onChange={inputHandle}
                              value={state.address}
                              type="text"
                              className="w-full px-3 py-2 border border-slate-200 dark:bg-transparent outline-none focus:border-green-500 rounded-md"
                              name="address"
                              id="address"
                              placeholder="Address"
                            />
                          </div>
                        </div>

                        <div className="flex md:flex-col md:gap-2 w-full gap-5 text-slate-600  dark:text-white">
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="phone"> Phone </label>
                            <input
                              onChange={inputHandle}
                              value={state.phone}
                              type="text"
                              className="w-full px-3 py-2 border border-slate-200 dark:bg-transparent outline-none focus:border-green-500 rounded-md"
                              name="phone"
                              id="phone"
                              placeholder="Phone"
                            />
                          </div>

                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="post"> Post </label>
                            <input
                              onChange={inputHandle}
                              value={state.post}
                              type="text"
                              className="w-full px-3 py-2 border border-slate-200 dark:bg-transparent outline-none focus:border-green-500 rounded-md"
                              name="post"
                              id="post"
                              placeholder="Post"
                            />
                          </div>
                        </div>

                        <div className="flex md:flex-col md:gap-2 w-full gap-5 text-slate-600  dark:text-white">
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="province"> Province </label>
                            <input
                              onChange={inputHandle}
                              value={state.province}
                              type="text"
                              className="w-full px-3 py-2 border border-slate-200 dark:bg-transparent outline-none focus:border-green-500 rounded-md"
                              name="province"
                              id="province"
                              placeholder="Province"
                            />
                          </div>

                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="city"> City </label>
                            <input
                              onChange={inputHandle}
                              value={state.city}
                              type="text"
                              className="w-full px-3 py-2 border border-slate-200 dark:bg-transparent outline-none focus:border-green-500 rounded-md"
                              name="city"
                              id="city"
                              placeholder="City"
                            />
                          </div>
                        </div>

                        <div className="flex md:flex-col md:gap-2 w-full gap-5 text-slate-600  dark:text-white">
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="area"> Area </label>
                            <input
                              onChange={inputHandle}
                              value={state.area}
                              type="text"
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md dark:bg-transparent"
                              name="area"
                              id="area"
                              placeholder="Area"
                            />
                          </div>

                          <div className="flex flex-col gap-1 mt-7 mb-2 w-full justify-end">
                            <button className="px-3 py-[6px] rounded-md hover:shadow-green-500/50 hover:shadow-lg bg-green-500 text-white">
                              Save Change{" "}
                            </button>
                          </div>
                        </div>
                      </form>
                    </>
                  )}
                  {res && (
                    <div className="flex flex-col gap-1">
                      <h2 className="text-slate-600 dark:text-white font-semibold pb-2">
                        Deliver To {state.name}
                      </h2>
                      <p>
                        <span className="bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2 py-1 rounded">
                          Home
                        </span>
                        <span className=" dark:text-white ">
                          <span>
                            {state.phone} {state.address} {state.province}
                            {state.city} {state.area}.
                          </span>
                        </span>

                        <span
                          onClick={() => setRes(false)}
                          className="text-indigo-500 dark:text-yellow-400 cursor-pointer underline"
                        >
                          Change
                        </span>
                      </p>

                      <p className="text-slate-600 text-sm   dark:text-green-400 ">
                        Email To olaoluwajohn06@gmail.com
                      </p>
                    </div>
                  )}
                </div>
                {products.map((p, i) => (
                  <div
                    key={i}
                    className="flex bg-white dark:bg-[#232D3F] p-4 flex-col gap-2 divide-y-2 dark:divide-slate-500"
                  >
                    <div className="flex justify-start items-center">
                      <h2 className="text-md text-slate-600 dark:text-white font-bold">
                        {p.shopName}
                      </h2>
                    </div>

                    {p.products.map((pt, i) => (
                      <div
                        key={i}
                        className="w-full flex flex-wrap justify-between "
                      >
                        <div className="flex sm:w-full gap-2 ">
                          <div className="flex gap-4 justify-start pt-2 items-center">
                            <img
                              className="w-[80px] h-[80px] "
                              src={pt.productInfo.images[0]}
                              alt=""
                            />
                            <div className="pr-4 dark:text-white text-slate-600">
                              <h2 className="text-md font-semibold">
                                {pt.productInfo.name}
                              </h2>
                              <span className="text-sm">
                                Brand: {pt.productInfo.brand}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-betweenitems-center sm:w-full sm:mt-3">
                          <div className="pl-4 sm:pl-0">
                            <div className="flex justify-center  text-orange-500 dark:text-green-500 items-center ">
                              <FaNairaSign />
                              <h2 className="text-lg text-orange-500 dark:text-green-500 font-bold">
                                {pt.productInfo.price -
                                  Math.floor(
                                    (pt.productInfo.price *
                                      pt.productInfo.discount) /
                                      100
                                  )}
                              </h2>
                            </div>
                            <div className="flex justify-center  dark:text-red-500 items-center ">
                              <FaNairaSign />
                              <p className="line-through ">
                                {pt.productInfo.price}
                              </p>
                            </div>
                            <p className="dark:text-white">
                              -{pt.productInfo.discount}%
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-[33%] md-lg:w-full">
              <div className="pl-3 md-lg:pl-0 md-lg:mt-5">
                <div className="bg-white dark:bg-[#232D3F] p-3 text-slate-600 dark:text-slate-100 flex flex-col gap-3">
                  <h2 className="text-xl font-bold">Order Summary</h2>
                  <div className="flex justify-between items-center">
                    <span>Items Total ({items}) </span>
                    <div className="flex justify-center items-center ">
                      <FaNairaSign />
                      <span>{price} </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Shipping Fee </span>
                    <div className="flex justify-center items-center ">
                      <FaNairaSign />
                      <span>{shipping_fee} </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Total Payment</span>
                    <div className="flex  text-[#059473] justify-center items-center ">
                      <FaNairaSign />
                      <span className="text-lg">{price + shipping_fee} </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Total</span>
                    <div className="flex  text-[#059473] justify-center items-center ">
                      <FaNairaSign />
                      <span className="text-lg">{price + shipping_fee} </span>
                    </div>
                  </div>
                  <button
                    onClick={placeOrder}
                    disabled={res ? false : true}
                    className={`px-5 py-[6px] rounded-sm hover:shadow-red-500/50 hover:shadow-lg ${
                      res ? "bg-green-600 " : "bg-red-600 cursor-help"
                    }  text-sm text-white uppercase`}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Delivery;
