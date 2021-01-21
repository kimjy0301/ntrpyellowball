import Header from "./Header";

const Layout = (props) => {
  return (
    <div>
      <Header></Header>
      <div className="content">{props.children}</div>
      <footer className="fixed bottom-0 w-full justify-center items-center flex bg-gradient-to-t from-grey-1 to-gray-400 text-white p-5 border-t-2 border-white text-sm">
        <span>
          Powered By{" "}
          <a href="https://band.us/band/55139316" className="text-xl">
            노란공테니스
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Layout;
