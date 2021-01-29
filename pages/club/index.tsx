import Head from "next/head";
import { useEffect, useState } from "react";
import ClubKakaoMap from "../../components/ClubKakaoMap";

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
        <title>노란공테니스 - 클럽/동호회 정보</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full flex justify-center items-center flex-col p-3">
        <div
          className={`w-full flex relative flex-col h-full md:shadow-lg justify-center border-yellow-1 border-2  rounded-md items-center p-4 bg-white mx-1 my-1 shadow-lg md:max-w-xs1`}
        >
          <div className="w-full h-full">
            <ClubKakaoMap></ClubKakaoMap>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
