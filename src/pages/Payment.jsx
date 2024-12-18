/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Stripe from "../components/Stripe";
import { FaNairaSign } from "react-icons/fa6";
import Paystack from "../components/Paystack";
// import Stripe from "stripe";

function Payment() {
  const {
    state: { price, items, orderId },
  } = useLocation();
  const [paymentMethod, setPaymentMethod] = useState("stripe");

  return (
    <div>
      <section className="bg-[#eeeeee]  dark:bg-[#040D12]">
        <div className="w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-16  ">
          <div className="flex flex-wrap md:flex-col-reverse">
            <div className="w-7/12 md:w-full">
              <div className="pr-2 md:pr-0">
                <div className="flex flex-wrap">
                  <div
                    onClick={() => setPaymentMethod("stripe")}
                    className={`w-[20%] border-r dark:border-[#232D3F] dark:shadow-sm dark:shadow-[#232D3F] cursor-pointer py-8 px-12 md-lg:w-[33%]  md-lg:px-4 ${
                      paymentMethod === "stripe"
                        ? "bg-white  dark:bg-[#232D3F]  "
                        : "bg-slate-100 dark:bg-[#040D12]"
                    } `}
                  >
                    <div className="flex flex-col gap-[3px] justify-center items-center">
                      <img
                        src="/images/payment/stripe.png"
                        alt=""
                        className="md-lg:w-1/2"
                      />
                    </div>
                    <span className="text-slate-600 dark:text-white">
                      Stripe
                    </span>
                  </div>

                  <div
                    onClick={() => setPaymentMethod("paystack")}
                    className={`w-[20%] md-lg:w-[33%] border-r dark:border-[#232D3F] dark:shadow-sm dark:shadow-[#232D3F]    cursor-pointer py-8 px-8  md-lg:px-4 ${
                      paymentMethod === "paystack"
                        ? "bg-white  dark:bg-[#232D3F]  "
                        : "bg-slate-100 dark:bg-[#040D12]"
                    } `}
                  >
                    <div className="flex flex-col gap-[3px] justify-center items-center">
                      <img
                        src="images/payment/paystack.png"
                        alt=""
                        className=" w-full md-lg:w-1/2"
                      />
                    </div>
                    <span className="text-slate-600 dark:text-white">
                      PAYSTACK
                    </span>
                  </div>
                  <div
                    onClick={() => setPaymentMethod("pod")}
                    className={`w-[20%] md-lg:w-[33%] border-r dark:border-[#232D3F] dark:shadow-sm dark:shadow-[#232D3F]    cursor-pointer py-8 px-12  md-lg:px-4 ${
                      paymentMethod === "pod"
                        ? "bg-white  dark:bg-[#232D3F]  "
                        : "bg-slate-100 dark:bg-[#040D12]"
                    } `}
                  >
                    <div className="flex flex-col gap-[3px] justify-center items-center">
                      <img
                        src="images/payment/cod.jpg"
                        alt=""
                        className="md-lg:w-1/2"
                      />
                    </div>
                    <span className="text-slate-600 dark:text-white">POD</span>
                  </div>
                </div>
                {paymentMethod === "stripe" && (
                  <div>
                    <Stripe />
                  </div>
                )}
                {paymentMethod === "paystack" && (
                  <div>
                    <Paystack />
                  </div>
                )}
                {paymentMethod === "pod" && (
                  <div className="w-full px-4 py-8 bg-white  dark:bg-[#232D3F]  shadow-sm">
                    <button className="px-10 py-[6px] rounded-sm hover:shadow-green-500/20 hover:shadow-lg bg-[#059473] text-white">
                      Pay Now
                    </button>
                  </div>
                )}{" "}
              </div>
            </div>

            <div className="w-5/12 md:w-full ">
              <div className="pl-2 md:pl-0 md:mb-0">
                <div className="bg-white shadow p-5 text-slate-600 flex flex-col gap-3">
                  <h2 className="font-bold text-lg">Order Summary </h2>
                  <div className="flex justify-between items-center">
                    <span>{items} Items and Shipping Fee Included </span>
                    <div className="flex justify-center items-center ">
                      <FaNairaSign />
                      <span>{price} </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center font-semibold">
                    <span>Total Amount </span>
                    <div className="flex justify-center items-center text-lg text-green-600 font-bold ">
                      <FaNairaSign />
                      <span>{price} </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Payment;
