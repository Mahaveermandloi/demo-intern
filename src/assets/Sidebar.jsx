import React from "react";
import { IoFunnelOutline } from "react-icons/io5";
import { RiFileList3Line } from "react-icons/ri";

import { PiMoneyBold } from "react-icons/pi";
import { IoEyedropOutline } from "react-icons/io5";
import { RiFileListLine } from "react-icons/ri";
import { IoStorefrontOutline } from "react-icons/io5";
import { BsDatabase } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-white p-2 w-36 h-full rounded-lg ">
          <h2 className="text-lg font-bold text-center">Dashboard</h2>
          <div className="grid grid-cols-1 gap-2 mt-2">
            <div className="bg-gray-100 p-2 w-32 rounded-t-xl cursor-pointer  hover:bg-slate-200 text-center flex flex-col items-center justify-center ">
              <FaRegCircleUser size={30} className="mb-2" />
              Patient
            </div>
            <div className="bg-gray-100 p-2 w-32  cursor-pointer hover:bg-slate-200 text-center flex flex-col items-center justify-center ">
              <BsDatabase size={30} className="mb-2" />
              HR
            </div>
            <div className="bg-gray-100 p-2 w-32  cursor-pointer  hover:bg-slate-200 text-center flex flex-col items-center justify-center ">
              <IoFunnelOutline size={30} className="mb-2" />
              Labs
            </div>
            <div className="bg-gray-100 p-2 w-32  cursor-pointer  rounded-b-xl  text-center hover:bg-slate-200 flex flex-col items-center justify-center ">
              <IoStorefrontOutline size={30} className="mb-2" />
              Pharma
            </div>
          </div>

          <h2 className="text-lg font-bold text-center mt-2">Processes</h2>

          <div className="grid grid-cols-1 gap-2 mt-2">
            <div className="bg-gray-100 p-2 w-32 rounded-t-xl cursor-pointer  hover:bg-slate-200 text-center flex flex-col items-center justify-center ">
              <RiFileList3Line size={30} className="mb-2" />
              Registration
            </div>
            <div className="bg-gray-100 p-2 w-32  cursor-pointer hover:bg-slate-200 text-center flex flex-col items-center justify-center ">
              <RiFileListLine size={30} className="mb-2" />
            Consultation
            </div>
            <div className="bg-gray-100 p-2 w-32  cursor-pointer  hover:bg-slate-200 text-center flex flex-col items-center justify-center ">
              <IoEyedropOutline size={30} className="mb-2" />
              Test & Reports
            </div>
            <div className="bg-gray-100 p-2 w-32  cursor-pointer  rounded-b-xl  text-center hover:bg-slate-200 flex flex-col items-center justify-center ">
              <PiMoneyBold size={30} className="mb-2" />
              Billing
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
