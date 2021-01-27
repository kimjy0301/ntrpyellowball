import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const index = () => {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  const { score } = router.query;
  const { menu } = router.query;

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 200);
  }, []);

  let category = "";

  if (menu === "game") {
    category = "게임운영";
  } else if (menu === "technic") {
    category = "테크닉";
  }

  let grade = "초보자";
  if (score === "2.0") {
    grade = "초중급자";
  } else if (score === "3.0") {
    grade = "중급자";
  } else if (score === "4.0") {
    grade = "중상급자";
  } else if (score === "5.0") {
    grade = "상급자";
  }

  return (
    <>
      <Head>
        <title>노란공테니스 YTRP - {category} 결과</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full flex justify-center items-center flex-col -mt-8">
        <div
          className={` w-96 flex relative flex-col h-60 md:shadow-lg justify-center border-yellow-1 border-2  rounded-md items-center p-4 bg-white mx-1 my-1 shadow-lg md:max-w-xs1`}
        >
          <div
            className="cursor-pointer mb-3 md:hidden transition-all transform active:scale-110 absolute -top-16 right-0"
            onClick={() => {
              router.push("/");
            }}
          >
            <img src={"img/home.png"} className="w-52"></img>
          </div>

          <div
            className={`${
              loaded ? "opacity-100" : "opacity-0"
            } duration-700 transition-all  flex flex-col justify-center items-center`}
          >
            <div>당신의 {category} 능력은</div>

            <div className="flex items-center justify-center mt-3">
              <div className="bg-gradient-to-tr from-yellow-1 to-yellow-2 p-2 rounded-md text-2xl">
                YTRP
              </div>
              <div className="flex justify-center items-center flex-col">
                <div className="flex items-center justify-center">
                  <div className="text-3xl mx-3">{score}</div>
                  <div>입니다.</div>
                </div>
                <span className="text-xs ml-3">{grade} 등급 입니다.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
