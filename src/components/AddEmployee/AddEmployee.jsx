import React from "react";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { EmployeeContext } from "../../EmployeeContext";

const StyledInput = styled.input`
  padding: 5px;
  line-height: 2;
  border: 1px solid #333;
  border-radius: 6px;
`;

const StyledButton = styled.button`
  padding: 5px;
  line-height: 2;
  border: 1px solid #333;
  border-radius: 6px;
  color: black;
  fontsize: 16px;
  background-color: transparent;
  transition: all ease-in-out 0.4s;
  cursor: pointer;

  &: hover {
    background-color: #2196f3;
    color: white;
    border: none;
  }
`;

function AddEmployee() {
  const { fetchEmployees } = useContext(EmployeeContext);

  const [formData, setFormData] = useState({
    name: "",
    occupation: "",
    callMobile: "",
    callOffice: "",
    sms: "",
    email: "",
    imageUrl: "",
  });

  const { id } = useParams(); // Extracting the employee Id from the URL if present
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(
          `https://frozen-hollows-45886-1a788f6d5b9a.herokuapp.com/api/employees/${id}`
        )
        .then((response) => {
          setFormData(response.data);
        })
        .catch((error) => {
          console.error("Failed to fetch employee data:", error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData((fd) => ({
      ...fd,
      [e.target.name]: e.target.value,
    }));
  };

  const requestUrl =
    "https://frozen-hollows-45886-1a788f6d5b9a.herokuapp.com/api/employees/employee";

  async function addEmployee() {
    try {
      const response = await axios.post(requestUrl, formData);
      console.log("response", response);
    } catch (error) {
      console.error(error);
    }
  }

  async function editEmployee() {
    try {
      const response = axios.put(
        `https://frozen-hollows-45886-1a788f6d5b9a.herokuapp.com/api/employees/${id}`,
        formData
      );
      console.log("edit response", response);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      editEmployee();
      fetchEmployees();
      navigate("/employee-list");
    } else {
      addEmployee();
      fetchEmployees();
      setTimeout(() => {
        navigate("/employee-list");
      }, 3000);
    }
    setFormData({
      name: "",
      occupation: "",
      callMobile: "",
      callOffice: "",
      sms: "",
      email: "",
      imageUrl: "",
    });
  };

  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Add Employees
      </h2>

      <form
        action=''
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "300px",
          margin: "0 auto",
        }}
        onSubmit={handleSubmit}
      >
        <StyledInput
          type='text'
          name='name'
          placeholder='please insert your name'
          onChange={handleChange}
          value={formData.name}
        />
        <StyledInput
          type='text'
          name='occupation'
          placeholder='please insert your occupation'
          onChange={handleChange}
          value={formData.occupation}
        />
        <StyledInput
          type='text'
          name='callMobile'
          placeholder='please insert your callMobile'
          onChange={handleChange}
          value={formData.callMobile}
        />
        <StyledInput
          type='text'
          name='callOffice'
          placeholder='please insert your callOffice'
          value={formData.callOffice}
          onChange={handleChange}
        />{" "}
        <StyledInput
          type='text'
          name='sms'
          placeholder='please insert your sms'
          onChange={handleChange}
          value={formData.sms}
        />
        <StyledInput
          type='text'
          name='email'
          placeholder='please insert your email'
          onChange={handleChange}
          value={formData.email}
        />
        {/* this just an example*/}
        <StyledInput
          type='text'
          name='imageUrl'
          placeholder='please insert your image'
          onChange={handleChange}
          value={formData.imageUrl}
        />
        <StyledButton>{id ? "Edit" : "Submit"}</StyledButton>
      </form>
    </>
  );
}

export default AddEmployee;
