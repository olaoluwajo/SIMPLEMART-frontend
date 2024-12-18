/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { customer_register, messageClear } from "../store/reducers/authReducer";
import toast from "react-hot-toast";
import { FadeLoader } from "react-spinners";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  const dispatch = useDispatch();

  const { loading, errorMessage, successMessage, userInfo } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const register = (e) => {
    e.preventDefault();
    // console.log(state);
    dispatch(customer_register(state));
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (userInfo) {
      navigate("/");
    }
  }, [successMessage, errorMessage, userInfo]);

  const [passwordVisible, setPasswordVisible] = useState(false);
  // Function to handle password visibility toggle
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      {loading && (
        <div className="w-screen h-screen flex flex-col justify-center items-center fixed left-0 top-0 bg-[#38303033] dark:bg-[#3830306b] z-[999]">
          <h1 className="text-xl font-bold">Loading...</h1>
          <FadeLoader />
        </div>
      )}
      <div className="bg-gradient-to-l from-[#caddff] via-slate-200 dark:bg-gradient-to-l dark:from-slate-900 dark:via-slate-500">
        <div className="items-center justify-center w-full p-8">
          <div className="grid grid-cols-2 md-lg:grid-cols-1 w-[60%] md-lg:w-full mx-auto bg-white dark:bg-[#232D3F]  rounded-md">
            <div className="px-8 py-8">
              <h2 className="w-full text-xl font-bold text-center text-slate-600 dark:text-white">
                Register{" "}
              </h2>

              <div>
                <form
                  onSubmit={register}
                  className="text-slate-600 dark:text-white"
                >
                  <div className="flex flex-col gap-1 mb-2">
                    <label htmlFor="name">Name</label>
                    <input
                      onChange={inputHandle}
                      value={state.name}
                      className="w-full px-3 py-2 bg-transparent border rounded-md outline-none border-slate-200 focus:border-green-500"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1 mb-2">
                    <label htmlFor="email">Email</label>
                    <input
                      onChange={inputHandle}
                      value={state.email}
                      className="w-full px-3 py-2 bg-transparent border rounded-md outline-none border-slate-200 focus:border-green-500"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1 mb-2 relative">
                    <label htmlFor="password">Password</label>
                    <input
                      onChange={inputHandle}
                      value={state.password}
                      className="  w-full px-3 py-2 border border-slate-200 outline-none bg-transparent focus:border-green-500 rounded-md "
                      type={passwordVisible ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Password"
                      required
                    />
                    <span
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 bottom-3 cursor-pointer text-slate-400 "
                    >
                      {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>

                  <button className="px-8 w-full py-2 bg-[#059473] shadow-lg hover:shadow-green-500/40 text-white rounded-md">
                    Register
                  </button>
                </form>

                <div className="flex items-center justify-center py-2">
                  <div className="h-[1px] bg-slate-300 w-[95%]"> </div>
                  <span className="px-3 text-slate-600 dark:text-white">
                    Or
                  </span>
                  <div className="h-[1px] bg-slate-300 w-[95%]"> </div>
                </div>

                <button className="flex items-center justify-center w-full gap-2 px-8 py-2 mb-3 text-white bg-indigo-500 rounded-md shadow hover:shadow-indigo-500/50">
                  <span>
                    <FaFacebookF />{" "}
                  </span>
                  <span className="text-sm">Login With Facebook </span>
                </button>

                <button className="flex items-center justify-center w-full gap-2 px-8 py-2 mb-3 text-white bg-red-500 rounded-md shadow hover:shadow-red-500/50">
                  <span>
                    <FaGoogle />
                  </span>
                  <span className="text-sm">Login With Google </span>
                </button>
              </div>

              <div className="pt-1 text-center text-slate-600 dark:text-white">
                <p>
                  You Have No Account? 
                  <Link className="text-blue-500" to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </div>

            <div className="w-full h-full py-4 pr-4 md-lg:hidden">
              <img src="/images/login.jpg" alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
