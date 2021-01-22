import { useEffect, useState } from "react";

const Question = ({ question, onClickYes, onClickNo, show }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (show === false) {
    return <></>;
  } else {
    return (
      <>
        <div
          className={`${
            loaded ? "opacity-100" : "opacity-0"
          } duration-700 w-96 flex relative flex-col h-48 md:shadow-lg justify-center border-yellow-1 border-2  rounded-md items-center p-4 bg-white mx-1 my-1 shadow-lg md:max-w-xs1 transition-all`}
        >    
          {question.split('\n').map((value)=>{
            return (<span className="text-xl">{value}</span>)
          })}
          <div className="w-full border-t-2 my-3 border-gray-100 "></div>
          <div className="flex">
            <div
              onClick={() => onClickYes()}
              className="bg-blue-500 py-2 px-10 flex items-center justify-center hover:bg-blue-700 cursor-pointer transition-all mx-3 shadow-lg rounded"
            >
              <span className="text-white text-5xl font-extrabold">O</span>
            </div>
            <div
              onClick={() => onClickNo()}
              className=" bg-red-500 py-2 px-10 flex items-center justify-center hover:bg-red-700 cursor-pointer transition-all mx-3 shadow-lg rounded"
            >
              <span className="text-white text-5xl font-extrabold">X</span>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Question;
