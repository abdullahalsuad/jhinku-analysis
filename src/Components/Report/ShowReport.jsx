import React from "react";
import { FileText } from "lucide-react";
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
  AreaChart,
  Area,
  LineChart,
  Line,
} from "recharts";

// Custom Tooltip Component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const student = payload[0].payload;
    return (
      <div className="bg-white border border-gray-400 p-3 rounded shadow text-sm">
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
  console.log(chartData);

  return (
    <>
      {students.length > 0 ? (
        <>
          <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
            <h2 className="text-lg font-semibold text-center  text-gray-800 mt-4 mb-4">
              Marks Chart
            </h2>

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
          </div>

          {/* Area Chart for Averages */}
          <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 mt-10 mb-10">
            <h2 className="text-lg font-semibold text-center  text-gray-800 mt-4 mb-4">
              Average Marks Trend
            </h2>

            <ResponsiveContainer width="100%" height={250}>
              <AreaChart
                data={chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="displayLabel" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="average"
                  stroke="#8884d8"
                  fill="#d6ccf3"
                  name="Average Marks"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Subject-wise Marks */}
          <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
            <h2 className="text-lg font-semibold text-center  text-gray-800 mt-4 mb-4">
              Subject-wise Marks Line Chart
            </h2>

            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="displayLabel" tick={{ fill: "#555" }} />
                <YAxis tick={{ fill: "#555" }} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="mark1"
                  name="Subject 1"
                  stroke="#7E57C2"
                  strokeWidth={2}
                  dot={{ r: 4, stroke: "#7E57C2", fill: "white" }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="mark2"
                  name="Subject 2"
                  stroke="#388E3C"
                  strokeWidth={2}
                  dot={{ r: 4, stroke: "#388E3C", fill: "white" }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="mark3"
                  name="Subject 3"
                  stroke="#FBC02D"
                  strokeWidth={2}
                  dot={{ r: 4, stroke: "#FBC02D", fill: "white" }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-full py-10">
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

export default ShowReport;
