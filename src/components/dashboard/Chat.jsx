import { useEffect, useState } from "react";
import { AiOutlineMessage, AiOutlinePlus } from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import io from "socket.io-client";
import {
  add_friend,
  send_message,
  updateMessage,
  messageClear,
} from "../../store/reducers/chatReducer";
import EmptyButton from "../ui/EmptyButton";
import toast from "react-hot-toast";
import { useRef } from "react";

// const socket = io("http://localhost:5000");
const socket = io([
  "http://localhost:5000",
  "https://simple-ecommerce-backend.onrender.com",
]);

function Chat() {
  const scrollRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { sellerId } = useParams();
  const { userInfo } = useSelector((state) => state.auth);
  const { fwb_messages, currentFd, my_friends, successMessage } = useSelector(
    (state) => state.chat
  );

  const [text, setText] = useState("");
  const [receiverMessage, setReceiverMessage] = useState("");
  const [activeSeller, setActiveSeller] = useState([]);

  useEffect(() => {
    socket.emit("add_user", userInfo.id, userInfo);
  }, [userInfo]);

  useEffect(() => {
    socket.on("seller_message", (msg) => {
      setReceiverMessage(msg);
    });
    socket.on("activeSeller", (sellers) => {
      setActiveSeller(sellers);
    });
  }, []);

  useEffect(() => {
    if (successMessage) {
      socket.emit(
        "send_customer_message",
        fwb_messages[fwb_messages.length - 1]
      );
      dispatch(messageClear());
    }
  }, [dispatch, fwb_messages, successMessage]);

  useEffect(() => {
    if (receiverMessage) {
      if (
        sellerId === receiverMessage.senderId &&
        userInfo.id === receiverMessage.receverId
      ) {
        dispatch(updateMessage(receiverMessage));
      } else {
        toast.success(receiverMessage.senderName + " " + "Send A message");
        dispatch(messageClear());
      }
    }
  }, [dispatch, receiverMessage, sellerId, userInfo.id]);

  useEffect(() => {
    dispatch(
      add_friend({
        sellerId: sellerId || "",
        userId: userInfo.id,
      })
    );
  }, [dispatch, sellerId, userInfo]);

  function sendMessage() {
    if (text) {
      dispatch(
        send_message({
          userId: userInfo.id,
          text,
          sellerId,
          name: userInfo.name,
        })
      );
      setText("");
    }
  }
  function handleRedirect() {
    navigate("/shops");
  }

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [fwb_messages]);

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
            {my_friends.map((f, i) => (
              <Link
                key={i}
                to={`/dashboard/chat/${f.fdId}`}
                className={`flex gap-2 justify-start items-center pl-2 py-[5px] hover:pl-3 transition-all duration-200`}
              >
                <div className=" size-[30px] rounded-full relative">
                  {activeSeller.some((c) => c.sellerId === f.fdId) && (
                    <div className="w-[10px] h-[10px] rounded-full bg-green-500 absolute right-0 bottom-0"></div>
                  )}

                  <img
                    src={f.image}
                    alt={`${f.name} image`}
                    className="rounded-full size-[30px] "
                  />
                </div>
                <span>{f.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-[calc(100%-230px)]">
          {currentFd ? (
            <div className="w-full h-full">
              <div className="flex justify-start gap-3 items-center text-slate-600 dark:text-white text-md font-bold h-[50px]">
                <div className="w-[30px] h-[30px] rounded-full relative">
                  {activeSeller.some((c) => c.sellerId === currentFd.fdId) && (
                    <div className="w-[10px] h-[10px] rounded-full bg-green-500 absolute right-0 bottom-0"></div>
                  )}

                  <img
                    src={currentFd.image}
                    alt={`${currentFd.name} image`}
                    className="rounded-full size-[30px]"
                  />
                </div>
                <span>{currentFd.name}</span>
              </div>
              <div className="h-[400px] w-full bg-slate-100 dark:bg-[#131923]  p-3 rounded-md">
                <div className="flex flex-col w-full h-full gap-3 overflow-y-auto">
                  {fwb_messages.map((m, i) => {
                    if (currentFd?.fdId !== m.receiverId) {
                      return (
                        <div
                          ref={scrollRef}
                          key={i}
                          className="w-[90%] flex gap-2 justify-start items-end text-[14px]"
                        >
                          <img
                            className="w-[30px] h-[30px] rounded-full"
                            src="/images/user.png"
                            alt=""
                          />
                          <div className="p-2 text-white bg-purple-500 rounded-md">
                            <span>{m.message}</span>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          ref={scrollRef}
                          key={i}
                          className=" w-[90%] flex gap-2 justify-end self-end items-end text-[14px]"
                        >
                          <div className=" p-2 text-white rounded-md bg-[#059473]">
                            <span>{m.message}</span>
                          </div>{" "}
                          <img
                            className="w-[30px] h-[30px] rounded-full"
                            src="/images/user.png"
                            alt=""
                          />
                        </div>
                      );
                    }
                  })}
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
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    placeholder="input message"
                    className="w-full h-full p-3 rounded-full outline-none dark:bg-transparent dark:text-white "
                  />

                  <div className="absolute text-2xl cursor-auto right-2 top-2 z-10 bg-white dark:bg-[#232D3F]  dark:text-white pl-3">
                    <span>
                      <GrEmoji />
                    </span>
                  </div>
                </div>
                <div
                  onClick={sendMessage}
                  className="w-[40px] p-2 justify-center items-center   cursor-pointer rounded-full active:bg-green-600 active:text-white"
                >
                  <div className="text-2xl dark:text-white">
                    <IoSend />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4 items-center justify-center w-full h-full text-lg font-bold text-slate-600 dark:text-slate-100 bg-slate-100 dark:bg-[#131923]">
              <span>Select a Seller</span>
              <span className="text-3xl">OR</span>

              <EmptyButton
                text="BUY SOMETHING"
                onClick={handleRedirect}
                className="my-custom-class"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chat;
