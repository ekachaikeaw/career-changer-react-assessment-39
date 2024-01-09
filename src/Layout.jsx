import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>
        <h1 style={{display: "flex", justifyContent: "center"}}>Generation Thailand</h1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
