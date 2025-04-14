import React, { useState } from "react";
import { toast } from "react-toastify";

const DataInput = ({ addStudent }) => {
  const [studentData, setStudentData] = useState({
    studentName: "",
    marks: "",
  });

  // handling change
  let handleChange = (event) => {
    let key = event.target.name;
    let value = event.target.value;

    // Prevent negative numbers
    if (value < 0) {
      value = 0;
    }

    setStudentData({ ...studentData, [key]: value });
  };

  // hading submission
  let handleSubmit = (event) => {
    event.preventDefault();

    if (!studentData.studentName || !studentData.marks) {
      toast.warn("🦄 please fil up first", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("Data Added Successfully !!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setStudentData({ ...studentData, studentName: "", marks: "" });
      addStudent(studentData);
    }
  };

  return (
    <>
      <div className="mt-4 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Add Data
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="flex gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-600 font-medium mb-1"
                >
                  Name
                </label>
                <input
                  onChange={handleChange}
                  name="studentName"
                  value={studentData?.studentName}
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123458]"
                />
              </div>

              {/* Marks Field */}
              <div>
                <label
                  htmlFor="marks"
                  className="block text-gray-600 font-medium mb-1"
                >
                  Marks
                </label>
                <input
                  type="number"
                  name="marks"
                  value={studentData?.marks}
                  id="marks"
                  min="0"
                  required
                  onChange={(event) => {
                    let value = event.target.value;

                    // Automatically set value to 0 if it's negative
                    if (parseInt(value) < 0) {
                      event.target.value = 0;
                    }

                    handleChange(event); // Call your handleChange after modifying value
                  }}
                  className=" w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123458]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#123458] hover:bg-[#F16767] cursor-pointer text-white font-semibold py-2 px-4 rounded-md transition"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DataInput;
