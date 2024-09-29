import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import Rating from "./../components/Rating";
import {
  FaFacebookF,
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaNairaSign,
  FaTwitter,
} from "react-icons/fa6";
import Reviews from "../components/Reviews";
import { Navigation, Pagination } from "swiper/modules";
// import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useDispatch, useSelector } from "react-redux";
import { product_details } from "../store/reducers/homeReducer";
import toast from "react-hot-toast";
import { add_to_cart, messageClear } from "../store/reducers/cartReducer";

function Details() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mdtablet: {
      breakpoint: { max: 991, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
    smmobile: {
      breakpoint: { max: 640, min: 0 },
      items: 3,
    },
    xsmobile: {
      breakpoint: { max: 440, min: 0 },
      items: 3,
    },
  };
  const navigate = useNavigate();
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  // const discount = 10;
  const stock = 3;
  const [state, setState] = useState("reviews");
  const [quantity, setQuantity] = useState(1);
  const { userInfo } = useSelector((state) => state.auth);
  const { errorMessage, successMessage } = useSelector((state) => state.cart);
  const { product, relatedProducts, moreProducts } = useSelector(
    (state) => state.home
  );

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

  useEffect(() => {
    dispatch(product_details(slug));
  }, [dispatch, slug]);

  const maxLength = 230;

  const inc = () => {
    if (quantity >= product.stock) {
      toast.error("Out of Stock");
    } else {
      setQuantity(quantity + 1);
    }
  };
  const dec = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const add_cart = () => {
    if (userInfo) {
      dispatch(
        add_to_cart({
          userId: userInfo.id,
          quantity,
          productId: product._id,
        })
      );
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="bg-[#eeeeee]  dark:bg-[#040D12]">
      <section className='bg-[url("/images/banner/shop.png")] h-[220px]   bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col items-center justify-center w-full h-full gap-1 text-white">
              <h2 className="text-3xl font-bold">Product Details </h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-slate-100 font-bold  dark:bg-[#232D3F]  py-5 mb-5">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex items-center justify-start w-full text-md text-slate-600 dark:text-white">
              <Link to="/">Home</Link>
              <span className="pt-1">
                <IoIosArrowForward />
              </span>
              <Link to="/">{product.category}</Link>
              <span className="pt-1">
                <IoIosArrowForward />
              </span>
              <span>{product.name} </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto mb-4">
          <div className="grid grid-cols-2 gap-8 md-lg:grid-cols-1">
            <div>
              <div className="p-5 border dark:border-slate-700">
                <img
                  className="h-[400px] object-contain w-full"
                  src={image ? image : product.images?.[0]}
                  alt=""
                />
              </div>
              <div className="py-3">
                {product.images && (
                  <Carousel
                    autoPlay={true}
                    infinite={true}
                    responsive={responsive}
                    transitionDuration={500}
                  >
                    {product.images.map((imgClick, i) => {
                      return (
                        <div key={i} onClick={() => setImage(imgClick)}>
                          <img
                            className="h-[120px] cursor-pointer"
                            src={imgClick}
                            alt=""
                          />
                        </div>
                      );
                    })}
                  </Carousel>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="text-3xl font-bold text-slate-600 dark:text-white">
                <h3>{product.name} </h3>
              </div>
              <div className="flex items-center justify-start gap-4">
                <div className="flex text-xl">
                  <Rating ratings={3.5} />
                </div>
                <span className="text-green-500">(24 reviews)</span>
              </div>

              <div className="flex gap-3 text-2xl font-bold text-red-500">
                {product.discount !== 0 ? (
                  <>
                    Price :
                    <div className="flex items-center justify-center line-through ">
                      <FaNairaSign size={17} />
                      <h2 className="">{product.price}</h2>
                    </div>
                    <div className="flex items-center justify-center text-green-400 ">
                      <FaNairaSign size={17} />
                      <h2>
                        {product.price -
                          Math.floor(
                            (product.price * product.discount) / 100
                          )}{" "}
                        (-
                        {product.discount}
                        %){" "}
                      </h2>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center text-green-400 ">
                    Price : <FaNairaSign size={17} />
                    <h2 className="text-green-400"> {product.price} </h2>
                  </div>
                )}
              </div>

              <div className="text-slate-600 dark:text-white">
                <p>
                  {product.description.length > maxLength ? (
                    <>
                      {product.description.substring(0, maxLength)}
                      ...
                    </>
                  ) : (
                    product.description
                  )}
                  {/* {product.description.substring(0, 230)}
                  {"..."} */}
                </p>
              </div>

              <div className="flex gap-3 pb-10 border-b">
                {product.stock ? (
                  <>
                    <div className="flex bg-slate-200 h-[50px] justify-center items-center text-xl font-bold overflow-hidden">
                      <div
                        onClick={dec}
                        className="p-6 cursor-pointer active:bg-red-600 active:text-white"
                      >
                        -
                      </div>
                      <div className="px-6">{quantity}</div>
                      <div
                        onClick={inc}
                        className="p-6 cursor-pointer active:bg-green-600 active:text-white"
                      >
                        +
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={add_cart}
                        className="px-8 py-3 h-[50px] cursor-pointer hover:shadow-lg hover:shadow-green-500/40 bg-green-700 text-white"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </>
                ) : (
                  ""
                )}
                <div>
                  <div className="h-[50px] w-[50px] flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-cyan-500/40 bg-cyan-500 text-white">
                    <FaHeart />
                  </div>
                </div>
              </div>

              <div className="flex gap-5 py-5">
                <div className="w-[150px] text-black dark:text-white font-bold text-xl flex flex-col gap-5">
                  <span>Availability</span>
                  <span>Share On</span>
                </div>
                <div className="flex flex-col gap-5 font-semibold">
                  <span
                    className={`text-${product.stock ? "green" : "red"}-500`}
                  >
                    {product.stock
                      ? `In Stock(${product.stock})`
                      : "Out Of Stock"}
                  </span>{" "}
                  <ul className="flex items-center justify-start gap-3">
                    <li>
                      <a
                        className="w-[38px] h-[38px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-indigo-500 rounded-full text-white"
                        href="#"
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-[38px] h-[38px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-cyan-500 rounded-full text-white"
                        href="#"
                      >
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-[38px] h-[38px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-purple-500 rounded-full text-white"
                        href="#"
                      >
                        {" "}
                        <FaLinkedin />{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-[38px] h-[38px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-blue-500 rounded-full text-white"
                        href="#"
                      >
                        {" "}
                        <FaGithub />{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-3">
                {stock ? (
                  <button className="px-8 py-3 h-[50px] cursor-pointer hover:shadow-lg hover:shadow-green-500/40 bg-[#247462] text-white">
                    Buy Now
                  </button>
                ) : (
                  ""
                )}
                <Link
                  to="#"
                  className="px-8 py-3 h-[50px] cursor-pointer hover:shadow-lg hover:shadow-red-500/40 bg-red-500 text-white"
                >
                  Chat Seller
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto pb-16">
          <div className="flex flex-wrap">
            <div className="w-[72%] md-lg:w-full">
              <div className="pr-4 md-lg:pr-0">
                <div className="grid grid-cols-2">
                  <button
                    onClick={() => setState("reviews")}
                    className={`py-1  px-5 hover:shadow-lg dark:hover:shadow-slate-600 font-bold ${
                      state === "reviews"
                        ? "bg-[#059473] text-white"
                        : "bg-slate-200 text-slate-700"
                    } rounded-sm`}
                  >
                    Reviews{" "}
                  </button>

                  <button
                    onClick={() => setState("description")}
                    className={`py-1  px-5 hover:shadow-lg dark:hover:shadow-slate-600 font-bold ${
                      state === "description"
                        ? "bg-[#059473] text-white"
                        : "bg-slate-200 text-slate-700"
                    } rounded-sm`}
                  >
                    Description
                  </button>
                </div>

                <div>
                  {state === "reviews" ? (
                    <Reviews />
                  ) : (
                    <p className="py-5 leading-8 text-slate-600 dark:text-slate-100">
                      {product.description}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="w-[28%] md-lg:w-full">
              <div className="pl-4 md-lg:pl-0">
                <div className="px-3 py-2 text-slate-600 bg-slate-200 dark:text-slate-100 dark:bg-slate-600">
                  <h2 className="font-bold">From Simple Shop</h2>
                </div>

                <div className="flex flex-col gap-5 p-3 mt-3 border dark:border-slate-600">
                  {moreProducts.map((p, i) => {
                    return (
                      <Link
                        key={i}
                        className="block p-2 mb-2 transition-all duration-500 hover:shadow-md dark:shadow-slate-400 hover:scale-95"
                      >
                        <div className="relative h-[270px]">
                          <img
                            className="w-full h-full"
                            src={p.images[0]}
                            alt=""
                          />
                          {p.discount !== 0 && (
                            <div className="absolute flex justify-center items-center  text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                              {p.discount}%
                            </div>
                          )}
                        </div>
                        <h2 className="py-1 font-bold text-slate-600 dark:text-slate-100">
                          {p.name}
                        </h2>
                        <div className="flex gap-2">
                          <span className="flex items-center justify-center text-slate-600 dark:text-slate-100">
                            <FaNairaSign />
                            <h2 className="text-lg font-bold">{p.price}</h2>
                          </span>
                          <div className="flex items-center gap-2">
                            <Rating ratings={p.rating} />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
          <h2 className="py-8 text-2xl text-slate-600 dark:text-slate-100">
            Related Products{" "}
          </h2>
          <div>
            <Swiper
              slidesPerView="auto"
              breakpoints={{
                1280: {
                  slidesPerView: 3,
                },
                565: {
                  slidesPerView: 2,
                },
              }}
              spaceBetween={25}
              loop={true}
              pagination={{
                clickable: true,
                el: ".custom_bullet",
              }}
              modules={[Navigation, Pagination]}
              navigation
              scrollbar={{ draggable: true }}
              className="mySwiper"
            >
              {relatedProducts.map((p, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Link className="block">
                      <div className="relative h-[270px]">
                        <div className="w-full h-full">
                          <img
                            src={p.images[0]}
                            alt=""
                            className="object-contain w-full h-full"
                          />
                          <div className="absolute h-full w-full top-0 left-0 bg-[#000] opacity-25 hover:opacity-50 transition-all duration-500"></div>
                        </div>
                        {p.discount !== 0 && (
                          <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                            {p.discount}%
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col gap-1 p-4">
                        <h2 className="text-lg font-bold text-slate-600 dark:text-slate-100">
                          {p.name}
                        </h2>
                        <div className="flex items-center justify-start gap-3">
                          <span className="flex items-center justify-center text-slate-600 dark:text-slate-100">
                            <FaNairaSign />
                            <h2 className="text-lg font-bold"> {p.price}</h2>
                          </span>
                          <div className="flex">
                            <Rating ratings={p.rating} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="flex items-center justify-center w-full py-8">
            <div className="custom_bullet justify-center gap-3 !w-auto"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Details;
