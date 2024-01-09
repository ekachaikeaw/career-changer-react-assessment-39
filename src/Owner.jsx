import Layout from "./Layout";


const Owner = () => {
  return (
    <Layout>
      <div style={{color: "gray", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h1>Pop - Group F - 39</h1>
        <img style={{width: "280px", height: "280px"}} src={"./public/pic.jpg"}/>
        <h4>Short Biography</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </Layout>
  );
};

export default Owner;
