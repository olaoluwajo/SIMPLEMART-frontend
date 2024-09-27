import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function ChangePassword() {
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <div className="p-4 bg-white dark:bg-[#232D3F] ">
      <h2 className="text-xl text-slate-600 dark:text-slate-100 pb-5">
        Change Password{" "}
      </h2>

      <form>
        <div className="flex flex-col gap-1 mb-2 relative">
          <label className="dark:text-white" htmlFor="password">
            Old Password
          </label>
          <input
            className="outline-none px-3 py-1 border rounded-md text-slate-600 bg-transparent dark:text-white"
            type={oldPasswordVisible ? "text" : "password"}
            name="old_password"
            id="old_password"
            placeholder="Old Password"
          />
          <span
            onClick={() => setOldPasswordVisible(!oldPasswordVisible)}
            className="absolute right-3 bottom-3 cursor-pointer text-slate-400 "
          >
            {oldPasswordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <div className="flex flex-col gap-1 mb-2 relative">
          <label className=" dark:text-white" htmlFor="new_password">
            New Password
          </label>
          <input
            className="outline-none px-3 py-1 border rounded-md text-slate-600 bg-transparent dark:text-white"
            type={newPasswordVisible ? "text" : "password"}
            name="new_password"
            id="new_password"
            placeholder="New Password"
          />
          <span
            onClick={() => setNewPasswordVisible(!newPasswordVisible)}
            className="absolute right-3 bottom-3 cursor-pointer text-slate-400 "
          >
            {newPasswordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <div className="flex flex-col gap-1 mb-2 relative">
          <label className=" dark:text-white" htmlFor="confirm_password">
            Confirm Password
          </label>
          <input
            className="outline-none px-3 py-1 border rounded-md text-slate-600 bg-transparent dark:text-white"
            type={confirmPasswordVisible ? "text" : "password"}
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm Password"
          />{" "}
          <span
            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            className="absolute right-3 bottom-3 cursor-pointer text-slate-400 "
          >
            {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <div>
          <button className="px-8 py-2 bg-[#059473] shadow-lg hover:shadow-green-500/30 text-white rounded-md">
            Update Password{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
