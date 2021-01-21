import Header from "./Header";

const Layout = (props) => {
  return (
    <div>
      <Header></Header>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Layout;
