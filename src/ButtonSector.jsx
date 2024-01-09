import User from "./User";
import Admin from "./Admin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const ButtonSector = () => {
//   const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => selectRole("user")}>User Home Sector</button>
      <button onClick={() => selectRole("admin")}>Admin Home Sector</button>
    </div>
  );
};

export default ButtonSector;
