import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

// Custom Tooltip Component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const student = payload[0].payload;
    return (
      <div className="bg-white border p-3 rounded shadow text-sm">
        <p className="font-semibold">
          {student.studentName} (Roll: {student.rollNumber})
        </p>
        <p>Mark 1: {student.mark1}</p>
        <p>Mark 2: {student.mark2}</p>
        <p>Mark 3: {student.mark3}</p>
        <p>Average: {student.average}</p>
      </div>
    );
  }

  return null;
};

const ShowReport = ({ students }) => {
  // Add custom display label
  const chartData = students.map((s) => ({
    ...s,
    displayLabel: `${s.studentName} (${s.rollNumber})`,
  }));

  return (
    <>
      <h2 className="text-xl font-semibold mb-4 text-center">Marks Chart</h2>
      {students.length > 0 ? (
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="displayLabel" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar
              dataKey="mark1"
              barSize={30}
              fill="#8884d8"
              name="Subject 1"
              activeBar={<Rectangle fill="#D1C4E9" stroke="#512DA8" />}
            />
            <Bar
              dataKey="mark2"
              barSize={30}
              fill="#82ca9d"
              name="Subject 2"
              activeBar={<Rectangle fill="#C8E6C9" stroke="#388E3C" />}
            />
            <Bar
              dataKey="mark3"
              barSize={30}
              fill="#ffc658"
              name="Subject 3"
              activeBar={<Rectangle fill="#FFF9C4" stroke="#FBC02D" />}
            />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-center text-gray-600">Please add data first !!</p>
      )}
    </>
  );
};

export default ShowReport;
