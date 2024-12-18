import { FaShopify } from "react-icons/fa6";

function Logo() {
  return (
    <div className="flex items-center justify-center gap-1 text-black dark:text-white ">
      <FaShopify className="text-2xl" />
      <h1 className="text-2xl font-bold logo">SIMPLEMART</h1>
    </div>
  );
}

export default Logo;
