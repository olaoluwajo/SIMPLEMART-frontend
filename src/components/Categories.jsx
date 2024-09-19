import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import {  useSelector } from "react-redux";


function Categories() {



    const { categories } = useSelector((state) => state.home);

  // const categories = [
  //   "Mobiles",
  //   "Laptops",
  //   "Speakers",
  //   "Top wear",
  //   "Footwear",
  //   "Watches",
  //   "Home Decor",
  //   "Smart Watches",
  // ];

  

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 991 },
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
      items: 2,
    },
    xsmobile: {
      breakpoint: { max: 440, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mx-auto relative w-[87%] my-2 ">
      <div className="w-full">
        <div className="text-center flex flex-col justify-center items-center text-2xl text-slate-600 dark:text-[#fff9e3] font-bold relative pb-[35px]">
          <h2> Top Category</h2>
          <div className="w-[100px] h-[2px] bg-[#059473] mt-2"></div>
        </div>
      </div>
      <Carousel
        swipeable={true}
        draggable={true}
        autoPlay={true}
        infinite={true}
        arrows={true}
        transitionDuration={2000}
        autoPlaySpeed={2000}
        responsive={responsive}
        removeArrowOnDeviceType={["", "mobile"]}
      >
        {categories.map((c, i) => (
          <Link
            key={i}
            to={`/products?category=${c.name}`}
            className="h-[185px] border block  bg-white mx-2"
          >
            <div className="relative w-full h-full p-3 transition-all group hover:scale-110 ">
              <img src={c.image} alt="" className="w-full" />
              <div className="absolute left-0 right-0 flex items-center justify-center mx-auto font-bold bottom-6">
                <span className="py-2 px-6 bg-[#040d126b] rounded-md text-white group-hover:bg-[#040D12] ">
                  {c.name}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}

export default Categories;
