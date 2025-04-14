import React from "react";
import { TableRow } from "./TableRow";

const StudentTable = ({ students }) => {
  return (
    <>
      <div className=" shadow-md sm:rounded-lg border text-center border-gray-200 p-4">
        {students.length > 0 ? (
          <table className="w-full text-sm text-center text-black">
            <thead className=" text-gray-700 text-[18px] uppercase bg-gray-100">
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
              {students.map((student) => (
                <TableRow key={student.id} student={student} />
              ))}
            </tbody>
          </table>
        ) : (
          <p>no data</p>
        )}
      </div>
    </>
  );
};

export default StudentTable;
