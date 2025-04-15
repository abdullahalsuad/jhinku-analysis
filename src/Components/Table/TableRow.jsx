import React from "react";
import { Trash2, SquarePen } from "lucide-react";

export const TableRow = ({ student, handleRemoveStudent }) => {
  let { id, studentName, rollNumber, mark1, mark2, mark3, average } = student;

  return (
    <tr className="bg-white text-xl border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4">{rollNumber}</td>
      <td className="px-6 py-4">{studentName}</td>
      <td className="px-6 py-4">{average}</td>

      <td className="px-6 py-4">
        {mark1}, {mark2}, {mark3}
      </td>
      <td className="px-6 py-4">
        <button
          onClick={() => handleRemoveStudent(id)}
          className="text-white bg-red-500 hover:bg-red-600 focus:outline-none font-medium rounded text-xs px-4 py-2 transition cursor-pointer mr-4"
        >
          <Trash2 />
        </button>

        <button
          onClick={() => handleRemoveStudent(id)}
          className="text-white bg-teal-500 hover:bg-teal-600 focus:outline-none font-medium rounded text-xs px-4 py-2 transition cursor-pointer"
        >
          <SquarePen />
        </button>
      </td>
    </tr>
  );
};
