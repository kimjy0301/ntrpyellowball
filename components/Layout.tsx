import Header from "./Header";

const Layout = (props) => {
  return (
    <div>
      <Header></Header>
      <div className="content">{props.children}</div>
      <footer className="fixed bottom-0 w-full justify-center items-end flex bg-gradient-to-r from-yellow-2 via-yellow-1 to-yellow-2 text-white p-5 border-t-2 border-white text-sm">
        <span>Powered By </span>
        <a href="https://band.us/band/55139316">
          <img src={`BI-vertical.png`} className="h-10 ml-3"></img>
        </a>
      </footer>
    </div>
  );
};

export default Layout;
