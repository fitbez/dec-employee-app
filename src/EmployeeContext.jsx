import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Create the context
export const EmployeeContext = createContext();

// Create a provider component
export const EmployeeProvider = (props) => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const requestUrl =
    "https://frozen-hollows-45886-1a788f6d5b9a.herokuapp.com/api/employees/employees";

  // const fetchEmployees = async () => {
  //   const response = await fetch(requestUrl);
  //   const data = await response.json();
  //   setEmployees(data);
  // };

  async function fetchEmployees() {
    try {
      const response = await axios.get(requestUrl);
      setEmployees(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleWelcome = function (firstName, lastName) {
    return (
      <h2>
        Welcome {firstName} {lastName}!!
      </h2>
    );
  };

  const color = "green";

  return (
    <EmployeeContext.Provider
      value={{ employees, setEmployees, handleWelcome, fetchEmployees, color }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};
