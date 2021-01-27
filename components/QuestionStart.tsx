import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const QuestionStart = ({ question, onClickYes, onClickNo, show, score }) => {
  const [loaded, setLoaded] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 200);
  }, []);

  if (show === false) {
    return <></>;
  } else {
    return (
      <>
        <div
          className={` w-96 flex relative flex-col h-60 md:shadow-lg justify-center border-yellow-1 border-2  rounded-md items-center p-4 bg-white mx-1 my-1 shadow-lg md:max-w-xs1 `}
        >
          <div
            className="cursor-pointer mb-3 md:hidden transition-all transform active:scale-110 absolute -top-16 right-0"
            onClick={() => {
              router.push("/");
            }}
          >
            <img src={"img/home.png"} className="w-52"></img>
          </div>
          {/* <div className="absolute top-0 left-0 ml-1 mt-1 text-sm">
            YTRP {score} 질문 :
          </div> */}
          <div
            className={`${
              loaded ? "opacity-100" : "opacity-0"
            } duration-700 transition-all flex justify-center items-center flex-col h-48 font-q`}
          >
            {question.split("\n").map((value, i) => {
              return (
                <span key={i} className="text-xl">
                  {value}
                </span>
              );
            })}
          </div>
          <div className="w-full border-t-2 my-3 border-gray-100 "></div>
          <div className="flex">
            <div
              onClick={() => onClickYes()}
              className="bg-blue-600 py-2 px-8 flex items-center justify-center hover:bg-blue-700 cursor-pointer transition-all mx-4 shadow-lg rounded"
            >
              <span className="text-white text-2xl">시작</span>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default QuestionStart;
