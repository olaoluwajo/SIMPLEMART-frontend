/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customer_login, messageClear } from "../store/reducers/authReducer";
import toast from "react-hot-toast";
import { FadeLoader } from "react-spinners";

function Login() {
  const { loading, errorMessage, successMessage, userInfo } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    // console.log(state);
    dispatch(customer_login(state));
  };

  useEffect(() => {
    console.log("userInfo updated:", userInfo);
  }, [userInfo]);

  useEffect(() => {
    const handleMessages = () => {
      if (successMessage) {
        toast.success(successMessage);
      }
      if (errorMessage) {
        toast.error(errorMessage);
      }
      if (successMessage || errorMessage) {
        dispatch(messageClear());
      }
    };

    const handleUserInfo = () => {
      if (userInfo) {
        navigate("/");
      }
    };

    handleMessages();
    handleUserInfo();
  }, [successMessage, errorMessage, userInfo]);

  return (
    <div>
      {loading && (
        <div className="w-screen h-screen flex flex-col justify-center items-center fixed left-0 top-0 bg-[#38303033] dark:bg-[#3830306b] z-[999]">
          <h1 className="text-xl font-bold">Loading...</h1>
          <FadeLoader />
        </div>
      )}
      <Header />
      <div className="bg-gradient-to-r from-[#caddff] via-slate-200 dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-500">
        <div className="w-full justify-center items-center p-10">
          <div className="grid grid-cols-2 md-lg:grid-cols-1 md-lg:w-[95%] w-[60%] mx-auto dark:bg-[#232D3F]  bg-white rounded-md">
            <div className="w-full h-full py-4 pl-4 md-lg:hidden ">
              <img src="/images/login.jpg" alt="" className="w-full h-full" />
            </div>
            <div className="px-8 py-8">
              <h2 className="text-center w-full text-xl text-slate-600 font-bold dark:text-white">
                Login{" "}
              </h2>

              <div>
                <form
                  onSubmit={login}
                  className="text-slate-600 dark:text-white"
                >
                  <div className="flex flex-col gap-1 mb-2">
                    <label htmlFor="email">Email</label>
                    <input
                      onChange={inputHandle}
                      value={state.email}
                      className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md bg-transparent"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1 mb-2">
                    <label htmlFor="password">Password</label>
                    <input
                      onChange={inputHandle}
                      value={state.password}
                      className="w-full px-3 py-2 border border-slate-200 outline-none bg-transparent focus:border-green-500 rounded-md"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <button className="px-8 w-full py-2 bg-[#059473] shadow-lg hover:shadow-green-500/40 text-white rounded-md">
                    Login
                  </button>
                </form>
                <div className="flex justify-center items-center py-2">
                  <div className="h-[1px] bg-slate-300 w-[95%]"> </div>
                  <span className="px-3 text-slate-600 dark:text-white">
                    Or
                  </span>
                  <div className="h-[1px] bg-slate-300 w-[95%]"> </div>
                </div>

                <button className="px-8 w-full py-2 bg-indigo-500 shadow hover:shadow-indigo-500/50 text-white rounded-md flex justify-center items-center gap-2 mb-3">
                  <span>
                    <FaFacebookF />{" "}
                  </span>
                  <span>Login With Facebook </span>
                </button>

                <button className="px-8 w-full py-2 bg-red-500 shadow hover:shadow-red-500/50 text-white rounded-md flex justify-center items-center gap-2 mb-3">
                  <span>
                    <FaGoogle />
                  </span>
                  <span>Login With Google </span>
                </button>
              </div>

              <div className="text-center text-slate-600  dark:text-white pt-1">
                <p>
                  Don&apos;t Have An Account ?
                  <Link className="text-blue-500" to="/register">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
