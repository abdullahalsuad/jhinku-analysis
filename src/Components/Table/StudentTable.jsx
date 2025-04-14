import React from "react";
import { TableRow } from "./TableRow";

const StudentTable = () => {
  return (
    <>
      <div className=" shadow-md sm:rounded-lg border border-gray-200">
        <table className="w-full text-sm text-center text-black">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Marks
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <TableRow />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentTable;
