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
  console.log(chartData);

  return (
    <>
      <h2 className="text-xl font-semibold mb-4 text-center">Marks Chart</h2>
      {students.length > 0 ? (
        <>
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

          {/* Area Chart for Averages */}
          <h2 className="text-xl font-semibold mt-10 mb-4 text-center">
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

          {/*  */}
          <h2 className="text-xl font-semibold mt-10 mb-4 text-center">
            Subject-wise Line Comparison
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="displayLabel" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="mark1"
                stroke="#7E57C2"
                strokeDasharray="5 5"
              />
              <Line
                type="monotone"
                dataKey="mark2"
                stroke="#388E3C"
                strokeDasharray="3 4 5 2"
              />
              <Line
                type="monotone"
                dataKey="mark3"
                stroke="#FBC02D"
                strokeDasharray="3 4 5 2"
              />
            </LineChart>
          </ResponsiveContainer>

          <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
            <h2 className="text-lg font-semibold text-center mb-3 text-gray-800">
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
        <p className="text-center text-gray-600">Please add data first !!</p>
      )}
    </>
  );
};

export default ShowReport;
