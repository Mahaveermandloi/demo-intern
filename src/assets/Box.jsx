import React from "react";
import { GrGroup } from "react-icons/gr";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { VscListFlat } from "react-icons/vsc";
import { PiMoneyBold } from "react-icons/pi";

const Box = ({ heading, count, value }) => {
  let logo;

  switch (value) {
    case 1:
      logo = <GrGroup size={30} />;
      break;
    case 2:
      logo = <VscListFlat size={30} />;
      break;
    case 3:
      logo = <PiMoneyBold size={30} />;
      break;
    case 4:
      logo = <FaMoneyCheckDollar size={30} />;
      break;
    default:
      logo = null; // No logo if value is not 1, 2, 3, or 4
  }

  return (
    <div className="w-1/4 h-24 p-5 bg-white rounded-lg flex justify-around items-center">
      <div>
        <p className="font-bold text-lg text-green-800">{heading}</p>
        <p className="font-bold text-2xl text-green-950">{count}</p>
        <p className="text-base">Today/Period</p>
      </div>
      <div>{logo}</div>
    </div>
  );
};

export default Box;
