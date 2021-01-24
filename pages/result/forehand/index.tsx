import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const index = () => {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  const { score } = router.query;

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 200);
  }, []);

  return (
    <>
      <Head>
        <title>노란공테니스 YTRP - 포핸드 결과</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full flex justify-center items-center">
        <div
          className={`${
            loaded ? "opacity-100" : "opacity-0"
          } duration-700 w-96 flex relative flex-col h-48 md:shadow-lg justify-center border-yellow-1 border-2  rounded-md items-center p-4 bg-white mx-1 my-1 shadow-lg md:max-w-xs1 transition-all`}
        >
          <div>
            <div>당신의 포핸드 테니스 능력은</div>

            <div className="flex items-center justify-center mt-3">
              <div className="bg-gradient-to-tr from-yellow-1 to-yellow-2 p-2 rounded-md text-2xl">
                YTRP
              </div>
              <div className="text-3xl mx-3 shadow-inner">{score}</div>
              <div>입니다.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
