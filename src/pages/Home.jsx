import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
import FeatureProducts from "../components/products/FeatureProducts";
import Products from "../components/products/Products";
import Categories from "./../components/Categories";
import { useEffect } from "react";
import {  get_products } from "../store/reducers/homeReducer";

function Home() {
  const dispatch = useDispatch();

  const {
    products,
    latest_product,
    topRated_product,
    discount_product,
  } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(get_products());
  }, [dispatch]);

  return (
    <div className="w-full bg-[#fefefa] dark:bg-[#040D12]">
      {/* <Header  /> */}
      <Banner />
      <Categories  />
      <div className="py-[45px] ">
        <FeatureProducts products={products} />
      </div>

      <div className="py-10 ">
        <div className="w-[85%] flex flex-wrap mx-auto">
          <div className="grid w-full grid-cols-3 md-lg:grid-cols-2 md:grid-cols-1 gap-7">
            <div className="overflow-hidden">
              <Products title="Latest Product" products={latest_product} />
            </div>

            <div className="overflow-hidden">
              <Products title="Top Rated Product" products={topRated_product} />
            </div>

            <div className="overflow-hidden">
              <Products title="Discount Product" products={discount_product} />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
