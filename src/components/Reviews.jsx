/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Rating from "./Rating";
import RatingTemp from "./RatingTemp";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import RatingReact from "react-rating";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { customer_review } from "../store/reducers/homeReducer";
import toast from "react-hot-toast";
import { messageClear } from "../store/reducers/cartReducer";

function Reviews({ product }) {
  const dispatch = useDispatch();

  const [parPage, setParPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const { userInfo } = useSelector((state) => state.auth);
  const { successMessage } = useSelector((state) => state.home);

  // const userInfo = {};

  const [rat, setRat] = useState("2");
  const [re, setRe] = useState("");

  function review_submit(e) {
    e.preventDefault();

    const obj = {
      name: userInfo.name,
      review: re,
      rating: rat,
      productId: product._id,
    };
    console.log(obj);
    dispatch(customer_review(obj));
  }

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      setRat("");
      setRe("");
      dispatch(messageClear());
    }
  }, [successMessage, dispatch]);

  return (
    <div className="mt-8">
      <div className="flex gap-10 md-lg:flex-col">
        <div className="flex flex-col items-start justify-start gap-2 py-4">
          <div>
            <span className="text-6xl font-semibold dark:text-slate-50">
              4.5
            </span>
            <span className="text-3xl font-semibold text-slate-600 dark:text-slate-200">
              /5
            </span>
          </div>
          <div className="flex text-3xl">
            <Rating ratings={4.5} />
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-50">
            15 Reviews
          </p>
        </div>

        <div className="flex flex-col gap-2 py-4">
          <div className="flex items-center justify-start gap-5">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemp rating={5} />
            </div>

            <div className="w-[200px] h-[14px] bg-slate-200 relative">
              <div className="h-full bg-[#Edbb0E] w-[60%]"></div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-100 w-[0%]">
              10
            </p>
          </div>

          <div className="flex items-center justify-start gap-5">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemp rating={4} />
            </div>
            <div className="w-[200px] h-[14px] bg-slate-200 relative">
              <div className="h-full bg-[#Edbb0E] w-[70%]"></div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-100 w-[0%]">
              20
            </p>
          </div>

          <div className="flex items-center justify-start gap-5">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemp rating={3} />
            </div>
            <div className="w-[200px] h-[14px] bg-slate-200 relative">
              <div className="h-full bg-[#Edbb0E] w-[40%]"></div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-100 w-[0%]">
              8
            </p>
          </div>

          <div className="flex items-center justify-start gap-5">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemp rating={2} />
            </div>
            <div className="w-[200px] h-[14px] bg-slate-200 relative">
              <div className="h-full bg-[#Edbb0E] w-[30%]"></div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-100 w-[0%]">
              5
            </p>
          </div>

          <div className="flex items-center justify-start gap-5">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemp rating={1} />
            </div>
            <div className="w-[200px] h-[14px] bg-slate-200 relative">
              <div className="h-full bg-[#Edbb0E] w-[10%]"></div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-100 w-[0%]">
              3
            </p>
          </div>

          <div className="flex items-center justify-start gap-5">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemp rating={0} />
            </div>
            <div className="w-[200px] h-[14px] bg-slate-200 relative">
              <div className="h-full bg-[#Edbb0E] w-[0%]"></div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-100 w-[0%]">
              0
            </p>
          </div>
        </div>
      </div>

      <h2 className="py-5 text-xl font-bold text-slate-600 dark:text-slate-100">
        Product Review 10
      </h2>
      <div className="flex flex-col gap-8 pt-4 pb-10">
        {[1, 2, 3, 4, 5].map((r, i) => (
          <div
            key={i}
            className="flex flex-col gap-1 text-slate-600 dark:text-slate-100 "
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-1 text-xl">
                <RatingTemp rating={4} />
              </div>
              <span className="">8 Jan 2024</span>
            </div>
            <span className=" text-md">Olaoluwa John</span>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut sit
              ab ex repellat non, obcaecati ad dolorum, corrupti, consequatur
              quod debitis nemo at tempore suscipit quis? Amet ipsa officiis at?
            </p>
          </div>
        ))}
        <div className="flex justify-end">
          {
            <Pagination
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              totalItem={10}
              parPage={parPage}
              showItem={Math.floor(10 / 4)}
            />
          }
        </div>
      </div>

      <div>
        {userInfo ? (
          <div className="flex flex-col gap-3">
            <div className="flex gap-1">
              <RatingReact
                onChange={(e) => setRat(e)}
                initialRating={rat}
                emptySymbol={
                  <span className="text-4xl text-slate-600 dark:text-slate-100">
                    <CiStar />
                  </span>
                }
                fullSymbol={
                  <span className="text-[#Edbb0E] text-4xl">
                    <FaStar />
                  </span>
                }
              />
            </div>
            <form onSubmit={review_submit}>
              <textarea
                value={re}
                onChange={(e) => setRe(e.target.value)}
                required
                className="w-full p-3 bg-transparent border dark:border-slate-600 dark:text-white outline-0"
                name=""
                id=""
                cols="30"
                rows="5"
              ></textarea>
              <div className="mt-2">
                <button className="px-8 py-1 text-white bg-indigo-500 rounded-sm dark:bg-green-500 hover:shadow-lg dark:hover:shadow-slate-300">
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <Link
              to="/login"
              className="px-5 py-1 text-white bg-red-500 rounded-sm"
            >
              Login First
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reviews;
