import { useState } from "react";
import Layout from "./Layout";
import User from "./User";
import Admin from "./Admin";
import { useEffect } from "react";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const Home = () => {
  const [sector, setSector] = useState("");
  const [employee, setEmployee] = useState([]);
  const [subject, setSubject] = useState("React - Assessment");

  useEffect(() => {
    setEmployee(mockEmployees);
  }, []);

  const removeData = (id) => {
    const updatedData = employee.filter((employee) => employee.id !== id);

    setEmployee(updatedData);
  };

  // const createData = (name, lastname, position) => {
  //   const newEmployee = {
  //     id: employee.length + 1,
  //     name,
  //     lastname,
  //     position,
  //   };
  //   setEmployee([...employee, newEmployee]);
  // };

  const selectRole = (role) => {
    if (role === "user") {
      setSubject("Home - UserSelector");
      setSector("user");
    } else {
      setSubject("Home - AdminSelector");
      setSector("admin");
    }
  };
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            {subject}
          </h1>
          <div style={{ display: "flex", gap: "2rem" }}>
            <button onClick={() => selectRole("user")}>
              Home Selector User
            </button>
            <button onClick={() => selectRole("admin")}>
              Home Selector Admin
            </button>
          </div>

          {sector === "admin" && (
            <Admin
              employees={employee}
              removeData={removeData}
              setEmployee={setEmployee}
            />
          )}
          {sector === "user" && <User employees={employee} />}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
