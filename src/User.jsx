import Layout from "./Layout";
import ButtonSector from "./ButtonSector";

const User = ({employees}) => {
  return (
    <div>
        <table>
          <colgroup span="4"></colgroup>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Position</th>
          </tr>
          {employees.map(employee => 
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.lastname}</td>
            <td>{employee.position}</td>
          </tr>)}
        </table>
    </div>
  );
};

export default User;
