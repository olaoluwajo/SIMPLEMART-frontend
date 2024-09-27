import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="min-h-screen border-b bg-gray-100 dark:bg-[#232D3F] flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-[#059473] ">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-slate-200 mt-4">
          Oops! Page not found
        </h2>

        <p className="text-gray-600 dark:text-slate-300 mt-2 font-semibold">
          The page you&apos;re looking for is currently under construction.
          We&apos;re working hard to bring it to you as soon as possible.
        </p>
        <Link to="/">
          <button className="mt-6 px-8 py-3 bg-[#059473] text-white rounded-md hover:bg-green-600 transition duration-300">
            Go to Home
          </button>
        </Link>
      </div>

      <div className="mt-10">
        <img
          src="https://via.placeholder.com/500x300.png?text=404+Error"
          alt="Page Not Found"
          className="w-80"
        />
      </div>
    </div>
  );
}

export default PageNotFound;
