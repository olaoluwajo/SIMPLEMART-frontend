import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { get_order_details } from "../../store/reducers/orderReducer";
import { FaNairaSign } from "react-icons/fa6";

function OrderDetails() {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_order_details(orderId));
  }, [dispatch, orderId]);

  const { userInfo } = useSelector((state) => state.auth);
  const { myOrder } = useSelector((state) => state.order);

  return (
    <div className="bg-white dark:bg-[#232D3F]  p-5">
      <h2 className="text-slate-600 dark:text-slate-100 font-semibold">
        #{myOrder._id} , <span className="pl-1">{myOrder.date}</span>{" "}
      </h2>
      <div className=" grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <h2 className="text-slate-600  dark:text-slate-100  font-semibold font-sans">
            Deliver To : {myOrder.shippingInfo?.name}{" "}
          </h2>
          <p>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-2 rounded">
              Home
            </span>
            <span className=" text-slate-600 text-sm  dark:text-slate-100 ">
              {myOrder.shippingInfo?.address}
              {myOrder.shippingInfo?.province}
              {myOrder.shippingInfo?.city}
            </span>
          </p>
          <p className="text-slate-600 text-md font-semibold  dark:text-slate-100 ">
            Email To {userInfo.email}
          </p>
        </div>

        <div className="text-slate-600 dark:text-slate-100 ml-4  ">
          <h2 className="font-mono">
            Price : N{myOrder.price} Include Shipping
          </h2>
          <p className="font-mono">
            Payment Status :{" "}
            <span
              className={`py-[1px] text-xs px-3 ${
                myOrder.payment_status === "paid"
                  ? "bg-green-300 text-green-800"
                  : "bg-red-300 text-red-800"
              } rounded-md`}
            >
              {" "}
              {myOrder.payment_status}{" "}
            </span>{" "}
          </p>
          <p className="font-mono">
            {" "}
            Order Status :{" "}
            <span
              className={`py-[1px] text-xs px-3 ${
                myOrder.delivery_status === "paid"
                  ? "bg-green-300 text-green-800"
                  : "bg-red-300 text-red-800"
              } rounded-md`}
            >
              {" "}
              {myOrder.delivery_status}{" "}
            </span>{" "}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-slate-600 dark:text-slate-100  text-lg pb-2 font-sans font-bold">
          Order Products{" "}
        </h2>
        <div className="flex gap-5 flex-col">
          {myOrder.products?.map((p, i) => (
            <div key={i}>
              <div className="flex gap-5 justify-start items-center text-slate-600 dark:text-slate-100 ">
                <div className="flex gap-2">
                  <img className="w-[55px] h-[55px]" src={p.images[0]} alt="" />
                  <div className="flex text-sm flex-col justify-start items-start">
                    <Link> {p.name} </Link>
                    <p>
                      {" "}
                      <span>Brand : {p.brand}</span>{" "}
                    </p>
                    <p>
                      <span>Quantity : {p.quantity}</span>
                    </p>
                  </div>
                </div>

                <div className="pl-4 flex flex-col">
                  <h2 className="text-md font-bold text-green-800 dark:text-green-300 ">
                    <span className=" inline-flex justify-center items-center">
                      <FaNairaSign />
                      {p.price - Math.floor((p.price * p.discount) / 100)}
                    </span>{" "}
                  </h2>

                  <p className="line-through">
                    <span className=" inline-flex justify-center items-center">
                      <FaNairaSign />
                    </span>
                    {p.price}
                  </p>
                  <p>-{p.discount}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
