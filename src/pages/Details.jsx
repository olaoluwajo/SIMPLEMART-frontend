import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import Rating from "./../components/Rating";
import { FaFacebookF, FaGithub, FaHeart, FaLinkedin, FaNairaSign, FaTwitter } from "react-icons/fa6";
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

function Details() {
  const images = [1, 2, 3, 4, 5, 6, 7, 8];
  const [image, setImage] = useState("");
  const discount = 10;
  const stock = 3;
      const [state, setState] = useState("reviews");

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

  return (
    <div className="bg-[#eeeeee]  dark:bg-[#040D12]">
      <Header />

      <section className='bg-[url("/images/banner/shop.png")] h-[220px]   bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">Product Details </h2>
              {/* <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-1">
                  <IoIosArrowForward />
                </span>
                <span>Product Details </span>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-slate-100 font-bold  dark:bg-[#232D3F]  py-5 mb-5">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex justify-start items-center text-md text-slate-600 dark:text-white w-full">
              <Link to="/">Home</Link>
              <span className="pt-1">
                <IoIosArrowForward />
              </span>
              <Link to="/">Category</Link>
              <span className="pt-1">
                <IoIosArrowForward />
              </span>
              <span>Product Name </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
          <div className="grid grid-cols-2 md-lg:grid-cols-1 gap-8">
            <div>
              <div className="p-5 border dark:border-slate-700">
                <img
                  className="h-[400px] w-full"
                  src={
                    image
                      ? `/images/products/${image}.webp`
                      : `/images/products/${images[2]}.webp`
                  }
                  alt=""
                />
              </div>
              <div className="py-3">
                {images && (
                  <Carousel
                    autoPlay={true}
                    infinite={true}
                    responsive={responsive}
                    transitionDuration={500}
                  >
                    {images.map((imgClick, i) => {
                      return (
                        <div key={i} onClick={() => setImage(imgClick)}>
                          <img
                            className="h-[120px] cursor-pointer"
                            src={`/images/products/${imgClick}.webp`}
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
              <div className="text-3xl text-slate-600 dark:text-white font-bold">
                <h3>Product Name </h3>
              </div>
              <div className="flex justify-start items-center gap-4">
                <div className="flex text-xl">
                  <Rating ratings={3.5} />
                </div>
                <span className="text-green-500">(24 reviews)</span>
              </div>

              <div className="text-2xl text-red-500 font-bold flex gap-3">
                {discount !== 0 ? (
                  <>
                    Price :
                    <div className="flex justify-center items-center line-through ">
                      <FaNairaSign size={17} />
                      <h2 className="">500</h2>
                    </div>
                    <div className="flex justify-center items-center text-green-400 ">
                      <FaNairaSign size={17} />
                      <h2>
                        {500 - Math.floor((500 * discount) / 100)} (-{discount}
                        %){" "}
                      </h2>
                    </div>
                  </>
                ) : (
                  <div className="flex justify-center items-center text-green-400 ">
                    Price : <FaNairaSign size={17} />
                    <h2 className="text-green-400"> 200 </h2>
                  </div>
                )}
              </div>

              <div className="text-slate-600 dark:text-white">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley
                </p>
              </div>

              <div className="flex gap-3 pb-10 border-b">
                {stock ? (
                  <>
                    <div className="flex bg-slate-200 h-[50px] justify-center items-center text-xl font-bold">
                      <div className="px-6 cursor-pointer">-</div>
                      <div className="px-6">2</div>
                      <div className="px-6 cursor-pointer">+</div>
                    </div>
                    <div>
                      <button className="px-8 py-3 h-[50px] cursor-pointer hover:shadow-lg hover:shadow-green-500/40 bg-green-700 text-white">
                        Add To Cart
                      </button>
                    </div>
                  </>
                ) : (
                  ""
                )}{" "}
                <div>
                  <div className="h-[50px] w-[50px] flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-cyan-500/40 bg-cyan-500 text-white">
                    <FaHeart />
                  </div>
                </div>
              </div>

              <div className="flex py-5 gap-5">
                <div className="w-[150px] text-black dark:text-white font-bold text-xl flex flex-col gap-5">
                  <span>Availability</span>
                  <span>Share On</span>
                </div>
                <div className="flex flex-col gap-5 font-semibold">
                  <span className={`text-${stock ? "green" : "red"}-500`}>
                    {stock ? `In Stock(${stock})` : "Out Of Stock"}
                  </span>{" "}
                  <ul className="flex justify-start items-center gap-3">
                    <li>
                      <a
                        className="w-[38px] h-[38px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-indigo-500 rounded-full text-white"
                        href="#"
                      >
                        {" "}
                        <FaFacebookF />{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-[38px] h-[38px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-cyan-500 rounded-full text-white"
                        href="#"
                      >
                        {" "}
                        <FaTwitter />{" "}
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
                    <p className="py-5 text-slate-600 dark:text-slate-100">
                      What is Lorem Ipsum? Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum has
                      been the industry&apos;s standard dummy text ever since
                      the 1500s, when an unknown printer took a galley of type
                      and scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum.
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

                <div className="flex flex-col gap-5 mt-3 border dark:border-slate-600 p-3">
                  {[3, 4].map((p, i) => {
                    return (
                      <Link
                        key={i}
                        className="block hover:shadow-md dark:shadow-slate-400 p-2 mb-2 hover:scale-95 transition-all duration-500"
                      >
                        <div className="relative h-[270px]">
                          <img
                            className="w-full h-full"
                            src={`/images/products/${p}.webp`}
                            alt=""
                          />
                          {discount !== 0 && (
                            <div className="absolute flex justify-center items-center  text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                              {discount}%
                            </div>
                          )}
                        </div>
                        <h2 className="text-slate-600 dark:text-slate-100 py-1 font-bold">
                          Product Name
                        </h2>
                        <div className="flex gap-2">
                          <span className="flex justify-center items-center  text-slate-600 dark:text-slate-100">
                            <FaNairaSign />
                            <h2 className="text-lg font-bold">434</h2>
                          </span>
                          <div className="flex items-center gap-2">
                            <Rating ratings={4.5} />
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
          <h2 className="text-2xl py-8 text-slate-600 dark:text-slate-100">
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
              {[1, 2, 3, 4, 5, 6].map((p, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Link className="block">
                      <div className="relative h-[270px]">
                        <div className="w-full h-full">
                          <img
                            src={`/images/products/${p}.webp`}
                            alt=""
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute h-full w-full top-0 left-0 bg-[#000] opacity-25 hover:opacity-50 transition-all duration-500"></div>
                        </div>
                        {discount !== 0 && (
                          <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                            {discount}%
                          </div>
                        )}
                      </div>

                      <div className="p-4 flex flex-col gap-1">
                        <h2 className="text-slate-600 dark:text-slate-100 text-lg font-bold">
                          Product Name{" "}
                        </h2>
                        <div className="flex justify-start items-center gap-3">
                          <span className="flex justify-center items-center  text-slate-600 dark:text-slate-100">
                            <FaNairaSign />
                            <h2 className="text-lg font-bold">434</h2>
                          </span>
                          <div className="flex">
                            <Rating ratings={4.5} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="w-full flex justify-center items-center py-8">
            <div className="custom_bullet justify-center gap-3 !w-auto"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Details;
