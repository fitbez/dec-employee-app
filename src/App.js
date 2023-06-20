import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Wrapper from "./components/Wrapper/Wrapper";

const employeesData = [
  {
    name: "John Doe",
    occupation: "FE Engineer",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
    callOffice: "837482392370",
    callMobile: "08382038203-3",
    sms: "0830982384092",
    email: "john@email.com",
  },
  {
    name: "Khaled Ameer",
    occupation: "BE Engineer",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60",
    callOffice: "039093090950",
    callMobile: "0398938989389-3",
    sms: "0803930982384092",
    email: "khaled@email.com",
  },
  {
    name: "Donell Ellis",
    occupation: "FE Architect",
    image:
      "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
    callOffice: "3989398958",
    callMobile: "938985389-3",
    sms: "09385839830",
    email: "donell@email.com",
  },
  {
    name: "Drake Mike",
    occupation: "Lead FE Engineer",
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60",
    callOffice: "88485984849",
    callMobile: "984989489-3",
    sms: "3795839859389",
    email: "drake@email.com",
  },
];

const App = () => {
  const [employees, setEmployees] = useState(employeesData);
  return (
    <>
      <Nav />
      <Wrapper employeesData={employees} />
    </>
  );
};

export default App;
