const Navbar = () => {
    return (
      <div style={{display: "flex", justifyContent: "flex-end", fontSize: "1.5rem", gap: "2rem"}}>
        <a href={'/'}>Home</a>
        <a href={'/owner'}>Owner</a> 
      </div>
    );
  };

  export default Navbar; 