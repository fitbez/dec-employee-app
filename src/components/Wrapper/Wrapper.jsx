import React from "react";
import Employee from "../Employee/Employee";

function Wrapper(props) {
  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        maxWidth: "1200px",
        height: "90vh",
        margin: "0 auto",
        padding: "3rem 0rem",
      }}
    >
      <Employee employeesData={props.employeesData} />
    </div>
  );
}

export default Wrapper;
