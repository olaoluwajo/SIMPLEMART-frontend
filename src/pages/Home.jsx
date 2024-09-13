import Banner from "../components/Banner";
import Header from "../components/Header";
import Categories from './../components/Categories';

function Home() {
  return (
    <div className="w-full bg-[#fff9e3] dark:bg-[#040D12]">
      <Header />
      <Banner />
      <Categories />
    </div>
  );
}

export default Home
