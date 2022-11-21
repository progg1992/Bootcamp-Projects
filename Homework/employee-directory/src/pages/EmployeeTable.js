import React, { useEffect, useState } from "react";
import API from "../utils/API";
import SearchButton from "../components/SearchButton";

const EmployeeTable = () => {
  const [employee, setEmployee] = useState([]);
  const [startingEmployees, setStartingEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    showUsers();
  }, []);

  function showUsers() {
    API.randomUser()
      .then((res) => {
        setEmployee(res.data.results);
        setStartingEmployees(res.data.results);
      })
      .catch((err) => console.error(err));
  }

  function handleInputChange(e) {
    const { value } = e.target;
    setSearchTerm(value);
    const searchedEmployee = startingEmployees.filter((person) => {
      return person.name.first.toLowerCase().includes(value.toLowerCase());
    });
    setEmployee(searchedEmployee);
  }

  function handleSubmit() {
    
  }

  return (
    <div style={{ background: " #252525" }}>
      <div className="container text-center pt-5">
        <input
          className="mt-8 mb-5 align-items-center form-group form-control pt-5"
          onChange={handleInputChange}
          value={searchTerm}
        />
        <SearchButton handleSubmit={handleSubmit} />
      </div>

      <table
        className="container table text-center"
        style={{ color: "#e8e8e8" }}
      >
        <thead>
          <tr>
            <th>Icon</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
          {console.log(employee)}
          {employee[0] !== undefined && employee[0].name !== undefined ? (
            employee.map(({ picture, email, name, location }) => {
              return (
                <tr>
                  <img src={picture.thumbnail} className="img-fluid m-5 pb-5" />
                  <td className="m-5 p-5">{name.first}</td>
                  <td className="m-5 p-5">{name.last}</td>
                  <td className="m-5 p-5">{email}</td>
                  <td className="m-5 p-5">{location.country}</td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
