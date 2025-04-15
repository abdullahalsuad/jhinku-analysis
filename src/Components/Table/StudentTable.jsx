import React from "react";
import { TableRow } from "./TableRow";
import TableHead from "./TableHead";

const StudentTable = ({ students, handleRemoveStudent }) => {
  return (
    <>
      <div className=" shadow-md sm:rounded-lg border text-center border-gray-200 p-4">
        {students.length > 0 ? (
          <table className="w-full text-sm text-center text-black">
            <thead className=" text-gray-700 text-[18px] uppercase bg-gray-100">
              <TableHead />
            </thead>
            <tbody>
              {students.map((student) => (
                <TableRow
                  key={student.id}
                  student={student}
                  handleRemoveStudent={handleRemoveStudent}
                />
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
