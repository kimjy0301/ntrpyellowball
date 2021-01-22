const Question = ({ question, onCLickYes, onClickNo }) => {
  return (
    <>
      <div className="w-96 flex relative flex-col md:shadow-lg justify-center border-yellow-1 border-2  rounded-md items-center p-4 bg-white mx-1 my-1 shadow-lg md:max-w-xs1 transition-all">
        <span className="text-xl">{question}</span>
        <div className="w-full border-t-2 my-2 border-gray-100 "></div>
        <div className="flex">
          <div className="bg-red-600 py-2 px-10 hover:bg-red-700 cursor-pointer transition-all mx-1 shadow-lg rounded">
            <span className="text-white text-5xl font-extrabold">O</span>
          </div>
          <div className="bg-blue-600 py-2 px-10 hover:bg-blue-700 cursor-pointer transition-all mx-1 shadow-lg rounded">
            <span className="text-white text-5xl font-extrabold">X</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
