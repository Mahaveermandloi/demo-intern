import React from "react";

const Table = () => {
  return (
    <>
      <table className="border-collapse border border-gray-400">
        <tbody>
          <tr>
            <td className="border border-gray-400 p-6 w-96 text-center uppercase font-bold text-lg">
              name
            </td>
            <td className="border border-gray-400 p-6 w-96 text-center uppercase font-bold text-lg">
              patient name
            </td>
            <td className="border border-gray-400 p-6 w-96 text-center uppercase font-bold text-lg">
              labs
            </td>
            <td className="border border-gray-400 p-6 w-96 text-center uppercase font-bold text-lg">
              diet plans
            </td>
          </tr>
        </tbody>
        <tbody>
          {[...Array(6)].map((_, rowIndex) => (
            <tr key={rowIndex} className="">
              {[...Array(4)].map((_, colIndex) => (
                <td
                  key={colIndex}
                  className="border border-gray-400 p-6 w-96 text-center"
                >
                  Row {rowIndex + 1}, Col {colIndex + 1}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
