import React from "react";
import { FileText } from "lucide-react";
import { TableRow } from "./TableRow";
import TableHead from "./TableHead";

const StudentTable = ({ students, handleRemoveStudent }) => {
  return (
    <>
      {students.length > 0 ? (
        <div className=" shadow-md sm:rounded-lg border text-center border-gray-200 p-4">
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
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <FileText size={40} className="mx-auto mb-4 text-[#123458]" />
            <h2 className="text-lg font-semibold mb-2">No Data Available</h2>
            <p className="text-gray-600 mb-4">
              Please add some data to get started.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentTable;
