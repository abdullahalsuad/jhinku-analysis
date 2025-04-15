import React from "react";
import { Hash, User, ChartNoAxesCombined, Star, UserCog } from "lucide-react";

const TableHead = () => {
  return (
    <>
      <tr>
        <th scope="col" className="px-6 py-3">
          <div className="flex justify-center items-center gap-2">
            <Hash className="w-6 h-6 text-teal-700" />
            <span>Roll</span>
          </div>
        </th>

        <th scope="col" className="px-6 py-3">
          <div className="flex justify-center items-center gap-2">
            <User className="w-6 h-6 text-teal-700" />
            <span>Name</span>
          </div>
        </th>

        <th scope="col" className="px-6 py-3">
          <div className="flex justify-center items-center gap-2">
            <ChartNoAxesCombined className="w-6 h-6 text-teal-700" />
            <span>Average</span>
          </div>
        </th>

        <th scope="col" className="px-6 py-3">
          <div className="flex justify-center items-center gap-2">
            <Star className="w-6 h-6 text-teal-700" />
            <span>Marks</span>
          </div>
        </th>

        <th scope="col" className="px-6 py-3">
          <div className="flex justify-center items-center gap-2">
            <UserCog className="w-6 h-6 text-teal-700" />
            <span>Action</span>
          </div>
        </th>
      </tr>
    </>
  );
};

export default TableHead;
