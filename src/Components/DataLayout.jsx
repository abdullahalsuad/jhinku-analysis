import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import DataInput from "./Input/DataInput";
import ShowReport from "./Report/showReport";
import StudentTable from "./Table/StudentTable";

const DataLayout = () => {
  const [students, setStudent] = useState([]);

  // Add Student
  let addStudent = (formData) => {
    console.log(formData);

    let newStudent = {
      id: crypto.randomUUID(),
      studentName: formData.studentName,
      marks: formData.marks,
    };

    console.log(newStudent);

    setStudent((prev) => [...prev, newStudent]);
  };
  console.log(students);
  return (
    <>
      <DataInput addStudent={addStudent} />

      <div className="mt-4 w-10/12 mx-auto bg-[#fdfdfdda] shadow-m rounded-md p-4">
        <StudentTable />
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
