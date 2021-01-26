import Head from "next/head";
import { useEffect, useState } from "react";

const index = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 200);
  }, []);

  return (
    <>
      <Head>
        <title>노란공테니스 YTRP - 개발중</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full flex justify-center items-center flex-col -mt-8">
        <div
          className={`w-96 flex relative flex-col h-48 md:shadow-lg justify-center border-yellow-1 border-2  rounded-md items-center p-4 bg-white mx-1 my-1 shadow-lg md:max-w-xs1`}
        >
          <div
            className={`${
              loaded ? "opacity-100" : "opacity-0"
            } duration-700 transition-all`}
          >
            개발중...
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
