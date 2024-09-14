import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FeatureProducts from "../components/products/FeatureProducts";
import Products from "../components/products/Products";
import Categories from './../components/Categories';

function Home() {
  return (
    <div className="w-full bg-[#fefefa] dark:bg-[#040D12]">
      <Header />
      <Banner />
      <Categories />
      <div className="py-[45px] ">
        <FeatureProducts />
      </div>

      <div className="py-10 ">
        <div className="w-[85%] flex flex-wrap mx-auto">
          <div className="grid w-full grid-cols-3 md-lg:grid-cols-2 md:grid-cols-1 gap-7">
            <div className="overflow-hidden">
              <Products title="Latest Product" />
            </div>

            <div className="overflow-hidden">
              <Products title="Top Rated Product" />
            </div>

            <div className="overflow-hidden">
              <Products title="Discount Product" />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home
