import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import DataInput from "./Input/DataInput";
import ShowReport from "./Report/ShowReport";
import StudentTable from "./Table/StudentTable";

const DataLayout = () => {
  const [students, setStudent] = useState([]);

  // Add Student
  let addStudent = (studentData) => {
    

    //check duplicate
    let isDuplicate = students.some(
      (student) => student.rollNumber === studentData.rollNumber
    );
    if (isDuplicate) {
      toast.error("🚫 Roll number already exists!", {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
      });
      return;
    }

    // Create new student object
    const newStudent = {
      id: crypto.randomUUID(),
      studentName: studentData.studentName,
      rollNumber: studentData.rollNumber,
      mark1: studentData.mark1,
      mark2: studentData.mark2,
      mark3: studentData.mark3,
      average: studentData.average,
    };


    setStudent((prev) => [...prev, newStudent]);
    toast.success("🎉 Student added successfully!", {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
    });
  };

  return (
    <>
      <div className="mt-6 mb-6">
        <DataInput addStudent={addStudent} />
      </div>

      <div className="mt-6 mb-6 w-10/12 mx-auto bg-[#fdfdfdda] shadow-m rounded-md p-4">
        <StudentTable students={students} />
      </div>

      <div className="mt-4 w-10/12 mx-auto bg-[#fdfdfdda] shadow-m rounded-md p-4">
        <ShowReport students={students} />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default DataLayout;
