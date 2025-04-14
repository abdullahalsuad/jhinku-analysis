import React from "react";


export const TableRow = ({ student }) => {
  console.log(student);

  let { marks, studentName } = student;

  return (
    <tr className="bg-white text-xl border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4">{studentName}</td>
      <td className="px-6 py-4">{marks}</td>
      <td className="px-6 py-4">
        <button className="text-white bg-red-500 hover:bg-red-600 focus:outline-none font-medium rounded text-xs px-4 py-2 transition cursor-pointer">
          Delete
        </button>
      </td>
    </tr>
  );
};
