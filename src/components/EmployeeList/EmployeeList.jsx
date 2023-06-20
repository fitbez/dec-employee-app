import React from "react";
import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";

function EmployeeList(props) {
  return <EmployeeListItem employeesData={props.employeesData} />;
}

export default EmployeeList;
