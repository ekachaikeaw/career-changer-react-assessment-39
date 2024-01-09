import { useEffect, useState } from "react";
import Layout from "./Layout";
import ButtonSector from "./ButtonSector";

const Admin = ({ employees, removeData, setEmployee }) => {
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [position, setPosition] = useState();

  const createData = (name, lastname, position) => {
    if (name && lastname && position) {
      const newEmployee = {
        id: employees.length + 1,
        name,
        lastname,
        position,
      };
      setEmployee([...employees, newEmployee]);
      setName("");
      setLastname("");
      setPosition("");
    }
    return null;
  };
  return (
    <div>
      <h3>create User Here</h3>
      <br />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Lastname"
        value={lastname}
        onChange={(ev) => setLastname(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(ev) => setPosition(ev.target.value)}
      />
      <button onClick={() => createData(name, lastname, position)}>Save</button>
      <div style={{display: "flex", justifyContent: "center"}}> 
        <table>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.lastname}</td>
              <td>{employee.position}</td>
              <td>
                <button onClick={() => removeData(employee.id)}>DELETE</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Admin;
