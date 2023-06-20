import React from "react";
import Header from "../Header/Header";
import EmployeeList from "../EmployeeList/EmployeeList";

function HomePage(props) {
  return (
    <div>
      <Header title='Employee Directory' borderColor='red' />
      <EmployeeList employeesData={props.employeesData} />
    </div>
  );
}

export default HomePage;
