import { useEffect } from "react";
import { AiOutlineMessage, AiOutlinePlus } from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import io from 'socket.io-client'
import { add_friend } from "../../store/reducers/chatReducer";

const socket = io("http://localhost:5000");


function Chat() {
const dispatch = useDispatch();

  
  const { sellerId } = useParams();
  const { userInfo } = useSelector((state) => state.auth);
  


   useEffect(() => {
     socket.emit("add_user", userInfo.id, userInfo);
   }, [userInfo]);

   useEffect(() => {
     dispatch(
       add_friend({
         sellerId: sellerId || "",
         userId: userInfo.id,
       })
     );
   }, [dispatch, sellerId, userInfo]);

  return (
    <div className="bg-white dark:bg-[#232D3F]  p-3 rounded-md">
      <div className="flex w-full">
        <div className="w-[230px]">
          <div className="flex justify-center gap-3 items-center text-slate-600 dark:text-white text-xl h-[50px]">
            <span>
              <AiOutlineMessage />
            </span>
            <span>Message</span>
          </div>
          <div className="w-full flex flex-col text-slate-600 dark:text-white py-4 h-[400px] pr-3 ">
            <Link
              to="#"
              className={`flex gap-2 justify-start items-center pl-2 py-[5px] active:pl-3`}
            >
              <div className="w-[30px] h-[30px] rounded-full relative">
                <div className="w-[10px] h-[10px] rounded-full bg-green-500 absolute right-0 bottom-0"></div>

                <img src="/images/user.png" alt="" className="rounded-full" />
              </div>
              <span>asdfsd</span>
            </Link>
          </div>
        </div>
        <div className="w-[calc(100%-230px)]">
          <div className="w-full h-full">
            <div className="flex justify-start gap-3 items-center text-slate-600 dark:text-white text-xl h-[50px]">
              <div className="w-[30px] h-[30px] rounded-full relative">
                <div className="w-[10px] h-[10px] rounded-full bg-green-500 absolute right-0 bottom-0"></div>

                <img src="/images/user.png" alt="" className="rounded-full" />
              </div>
              <span>ewewewe</span>
            </div>
            <div className="h-[400px] w-full bg-slate-100 dark:bg-[#131923]  p-3 rounded-md">
              <div className="flex flex-col w-full h-full gap-3 overflow-y-auto">
                <div className="w-full flex gap-2 justify-start items-center text-[14px]">
                  <img
                    className="w-[30px] h-[30px] rounded-full"
                    src="/images/user.png"
                    alt=""
                  />
                  <div className="p-2 text-white bg-purple-500 rounded-md">
                    <span>weewewewewewewe</span>
                  </div>
                </div>
                <div className="w-full flex gap-2 justify-end items-center text-[14px]">
                  <img
                    className="w-[30px] h-[30px] rounded-full"
                    src="/images/user.png"
                    alt=""
                  />
                  <div className="p-2 text-white rounded-md bg-cyan-500">
                    <span>ewwwwwwwww</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between w-full p-2">
              <div className="w-[40px] h-[40px] border p-2 justify-center items-center flex rounded-full dark:text-white">
                <label className="cursor-pointer" htmlFor="">
                  <AiOutlinePlus />
                </label>
                <input className="hidden" type="file" />
              </div>
              <div className="border h-[40px] p-0 ml-2 w-[calc(100%-90px)] rounded-full relative">
                <input
                  type="text"
                  placeholder="input message"
                  className="w-full h-full p-3 rounded-full outline-none dark:bg-transparent"
                />
                <div className="absolute text-2xl cursor-auto right-2 top-2">
                  <span>
                    <GrEmoji />
                  </span>
                </div>
              </div>
              <div className="w-[40px] p-2 justify-center items-center rounded-full">
                <div className="text-2xl cursor-pointer dark:text-white">
                  <IoSend />
                </div>
              </div>
            </div>
          </div>{" "}
          :
          <div className="flex items-center justify-center w-full h-full text-lg ont-bold text-slate-600">
            <span>select seller</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
