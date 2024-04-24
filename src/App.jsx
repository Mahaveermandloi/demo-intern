import React from "react";
import Filter from "./assets/Filter";
import Box from "./assets/Box";
import Table from "./assets/Table";
import { MdArrowDownward } from "react-icons/md";
import Sidebar from "./assets/Sidebar";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuCornerUpRight } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 p-4 flex items-center justify-between">
        <div></div>

        <div
          className=" flex h-10 w-1/3 items-center 
        "
        >
          <select className="bg-gray-200 px-4 py-2 rounded-l-full ">
            <option value="a">Patient</option>
            <option value="b">HR</option>
            <option value="c">Labs</option>
            <option value="d">Pharma</option>
          </select>

          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-200 px-4 py-2  w-96"
          />
          <div className="bg-gray-200 rounded-r-full ">
            <CiSearch size={40} className="p-2"color="gray" />
          </div>
          <button className="bg-green-700 px-4 py-2 ml-5 rounded-full w-72 text-white ">
            + Add New
          </button>
        </div>

        <div className="flex items-center">
          <div className="mr-5">
            <IoNotificationsOutline
              size={35}
              className="bg-white
            rounded-full "
            />
          </div>

          <div className="mr-5">
            <img
              src="https://source.unsplash.com/random/50x50"
              alt="notification"
              className="w-9 h-9 rounded-full"
            />
          </div>
        </div>
      </header>

      <div className="flex-1 bg-gray-200 flex">
        <Sidebar />

        <div className="w-full flex flex-col">
          <div className="bg-white m-2 rounded-xl flex flex-col">
            <div className="p-3">
              <p className="text-xl text-green-800">Consultants</p>
            </div>
            <hr className=" ml-2  border-green-800 w-28 border-b-2 " />
          </div>

          <div className=" bg-white  m-2 rounded-xl flex space-x-10 items-center ">
            <div className="bg-green-800 rounded-l-lg  p-4">
              <p className="text-xl text-white">Filter</p>
            </div>
            <select
              name=""
              id=""
              className="bg-gray-200 w-56  text-lg rounded-full p-1 "
            >
              <option value="a">Select Range</option>
              <option value="a">Patient</option>
              <option value="b">HR</option>
              <option value="c">Labs</option>
              <option value="d">Pharma</option>
            </select>
            <input type="radio" className="w-5 h-5 m-1" />
            Summary
            <input type="radio" className="w-5 h-5 m-1" />
            Branch Wise
          </div>

          <div className="  m-2 rounded-xl flex space-x-10">
            <Box heading="Consultant Counts" count="90/190" value={1} />
            <Box heading="Consultations" count="11/25" value={2} />
            <Box heading="Labs" count="25/560" value={3} />
            <Box heading="DietPlans" count="25/250" value={4} />
          </div>

          <div className=" bg-white p-3 m-2 rounded-xl flex flex-col">
            <div className="flex justify-between m-4">
              <p className="text-2xl font-bold text-green-800">Consultant</p>
              <div className="flex justify-between w-32">
                <button>
                  <LuCornerUpRight size={30} />
                </button>
                <button>
                  <MdArrowDownward size={30} />
                </button>
              </div>
            </div>

            <div className="px-16 ">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
