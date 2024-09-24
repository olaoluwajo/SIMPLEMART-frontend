import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const IconButton = ({ icon, count, onClick, to, className }) => {
  return (
    <Link
      onClick={onClick}
      to={to}
      className={`relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2] ${className}`}
    >
      <span className="text-xl text-green-500">{icon}</span>
      {count !== 0 && (
        <div className="w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]">
          {count}
        </div>
      )}
    </Link>
  );
};


export default IconButton;
