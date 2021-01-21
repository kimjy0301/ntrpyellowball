import Link from "next/link";

const Header = () => {
  return (
    <div className="header-div md:justify-between  via-yellow-2 to-green-1 text-gray-50 px-2 md:px-5 ">
      <Link href="/">
        <div className="flex justify-center items-center cursor-pointer transform hover:scale-110 focus:scale-110">
          <a className="w-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </a>
        </div>
      </Link>
      <div className="flex justify-center items-center text-center transform hover:scale-110 focus:scale-110">
        <a
          href="https://band.us/band/55139316"
          className="pl-9 transition-all block"
          style={{
            backgroundImage: `url(${"/img/BAND_64.png"})`,
            backgroundSize: "2rem",
            backgroundRepeat: "no-repeat",
          }}
        >
          <br></br>
        </a>
      </div>
    </div>
  );
};

export default Header;
