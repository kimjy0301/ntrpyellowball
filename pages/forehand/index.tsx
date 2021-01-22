import Question from "../../components/Question";
import { questions } from "../../components/data";
import { useState } from "react";

const index = () => {
  const [questionIndex, setQuestionIndex] = useState(10);

  const onClickYes = () => {
    if (questionIndex + 1 !== questions.length)
      setQuestionIndex(questionIndex + 1);
  };
  const onClickNo = () => {
    if (questionIndex !== 0) setQuestionIndex(questionIndex - 1);
  };

  return (
    <div className="flex flex-col justify-center items-center py-2 mx-auto h-full w-full overflow-y-auto relative">
      {questions.map((value, i) => {
        if (questionIndex === i) {
          return (
            <Question
              key={i}
              question={value}
              onClickYes={onClickYes}
              onClickNo={onClickNo}
              show={true}
            ></Question>
          );
        }
      })}
    </div>
  );
};

export default index;
