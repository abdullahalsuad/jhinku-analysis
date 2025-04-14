import React, { useState } from "react";
import { toast } from "react-toastify";

const DataInput = ({ addStudent }) => {
  const [studentData, setStudentData] = useState({
    studentName: "",
    rollNumber: "",
    mark1: "",
    mark2: "",
    mark3: "",
  });

  // handling change
  let handleChange = (event) => {
    let { name, value } = event.target;

    setStudentData((prev) => ({
      ...prev,
      [name]: value < 0 ? 0 : value,
    }));
  };

  // hading submission
  let handleSubmit = (event) => {
    event.preventDefault();

    let { studentName, rollNumber, mark1, mark2, mark3 } = studentData;

    if (
      !studentName ||
      !rollNumber ||
      mark1 === "" ||
      mark2 === "" ||
      mark3 === ""
    ) {
      toast.warn("🦄 Please fill all fields!", {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
      });
      return;
    }

    const avg = (parseFloat(mark1) + parseFloat(mark2) + parseFloat(mark3)) / 3;

    const studentWithAvg = {
      studentName,
      rollNumber,
      mark1: parseFloat(mark1),
      mark2: parseFloat(mark2),
      mark3: parseFloat(mark3),
      average: parseFloat(avg.toFixed(2)),
    };

    addStudent(studentWithAvg);

    // Reset form
    setStudentData({
      studentName: "",
      rollNumber: "",
      mark1: "",
      mark2: "",
      mark3: "",
    });
  };

  return (
    <>
      <div className="mt-4 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Add Student
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="studentName"
                value={studentData.studentName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Roll Number */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Roll Number
              </label>
              <input
                type="number"
                name="rollNumber"
                value={studentData.rollNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Marks */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Mark 1
                </label>
                <input
                  type="number"
                  name="mark1"
                  value={studentData.mark1}
                  min="0"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Mark 2
                </label>
                <input
                  type="number"
                  name="mark2"
                  value={studentData.mark2}
                  min="0"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Mark 3
                </label>
                <input
                  type="number"
                  name="mark3"
                  value={studentData.mark3}
                  min="0"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#123458] hover:bg-[#F16767] text-white font-semibold py-2 px-4 rounded-md"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DataInput;
