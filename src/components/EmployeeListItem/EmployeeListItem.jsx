import React, { useContext, useState } from "react";
import { EmployeeContext } from "../../EmployeeContext";
import styled from "styled-components";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import { Delete, Edit } from "@mui/icons-material";
import axios from "axios";
import { Link } from "react-router-dom";

const StyledActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledDeleteIcon = styled(Delete)`
  margin: 0 5px;
  color: red;
  cursor: pointer;
`;
const StyledEditIcon = styled(Edit)`
  margin: 0 5px;
  color: blue;
  cursor: pointer;
`;

function EmployeeListItem() {
  const { employees, setEmployees, color } = useContext(EmployeeContext);
  const [showAlert, setShowAlert] = useState(false);

  const handleDelete = (employeeId) => {
    axios
      .delete(
        `https://frozen-hollows-45886-1a788f6d5b9a.herokuapp.com/api/employees/${employeeId}`
      )
      .then(() => {
        setShowAlert(true);
        setEmployees((prevEmployees) =>
          prevEmployees.filter((employee) => employee._id !== employeeId)
        );
      })
      .catch((error) => {
        console.error("Failed to delete employee: ", error);
      });
  };

  console.log("alert", showAlert);

  const handleEdit = (employeeId) => {
    console.log("employee id", employeeId);
  };
  return (
    <>
      {showAlert && (
        <Alert severity='error'>Employee is deleted successfully!</Alert>
      )}
      {employees.map(({ imageUrl, name, occupation, _id }, index) => {
        return (
          <StyledEmployeeListItem key={index} elevation='6'>
            <img style={StyledImage} src={imageUrl} alt='person' />
            <StyledActions>
              <div>
                <h4 style={{ color: color }}>{name}</h4>
                <p>{occupation}</p>
              </div>
              <div>
                <Link to={`/add-employee/${_id}`}>
                  <StyledEditIcon onClick={() => handleEdit(_id)} />
                </Link>
                <StyledDeleteIcon onClick={() => handleDelete(_id)} />
              </div>
            </StyledActions>
          </StyledEmployeeListItem>
        );
      })}
    </>
  );
}

const StyledEmployeeListItem = styled(Paper)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0.5rem;
  width: 50%;
  margin-bottom: 0.5rem;
`;

const StyledImage = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
};

export default EmployeeListItem;
