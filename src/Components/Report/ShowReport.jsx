import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ShowReport = ({ students }) => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4 text-center">Marks Chart</h2>
      {students.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={students}>
            <XAxis dataKey="studentName" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="marks" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p>Please add student first !!</p>
      )}
    </>
  );
};

export default ShowReport;
