import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function EmptyButton({ text = "Button", onClick, className = "", to }) {
  if (to) {
    return (
      <Link
        to={to}
        className={`rounded px-5 py-2.5 overflow-hidden group bg-[#059473] relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 ${className}`}
      >
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative">{text}</span>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`rounded px-5 py-2.5 overflow-hidden group bg-[#059473] relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 ${className}`}
    >
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
      <span className="relative">{text}</span>
    </button>
  );
}

EmptyButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  to: PropTypes.string,
};

EmptyButton.defaultProps = {
  text: "Button",
  className: "",
  onClick: null,
  to: null,
};

export default EmptyButton;
