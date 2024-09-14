/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaNairaSign } from "react-icons/fa6";

function Products({ title }) {



  const products = [
    [1, 2, 3],
    [4, 5, 6],
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  function ButtonGroup({ next, previous }) {
    return (
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold  dark:text-[#fff9e3]  text-slate-600">
          {" "}
          {title}{" "}
        </div>
        <div className="flex justify-center items-center gap-3 text-slate-600">
          <button
            onClick={() => previous()}
            className="w-[30px] h-[30px] flex justify-center items-center bg-slate-300 border border-slate-200"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={() => next()}
            className="w-[30px] h-[30px] flex justify-center items-center bg-slate-300 border border-slate-200"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-8 flex-col-reverse ">
      <Carousel
        autoPlay={false}
        infinite={true}
        arrows={false}
        responsive={responsive}
        transitionDuration={500}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
      >
        {products.map((p, i) => {
          return (
            <div key={i} className="flex flex-col mb-2 justify-start gap-2">
              {p.map((pl, j) => (
                <Link key={j} className="flex justify-start items-start border dark:border-slate-800 " to="#">
                  <img
                    className="w-[110px] h-[110px]"
                    src={`/images/products/${pl}.webp`}
                    alt=""
                  />
                  <div className="px-8 py-4 flex justify-start items-start gap-1 flex-col  dark:text-[#fff9e3]  text-slate-600">
                    <h2>Product Name </h2>
                    <div className="flex justify-center items-center ">
                      <FaNairaSign />
                      <span className=" text-lg font-bold">2000</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Products;
