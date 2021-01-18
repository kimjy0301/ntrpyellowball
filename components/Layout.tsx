import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Header></Header>
      <div style={{ paddingTop: "2rem", height: "100%" }}>{props.children}</div>
    </>
  );
};

export default Layout;
