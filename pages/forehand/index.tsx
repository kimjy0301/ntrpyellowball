import Question from "../../components/Question";
import { questions } from "../../components/data";
import { useState } from "react";
import Head from "next/head";

const index = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const [nowScore, setNowScore] = useState(1);

  const onClickYes = () => {
    if (questionIndex + 1 !== questions.length)
      setQuestionIndex(questionIndex + 1);
    console.log(questions[questionIndex].score);
  };
  const onClickNo = () => {
    if (questionIndex !== 0) setQuestionIndex(questionIndex - 1);
    console.log(questions[questionIndex].score);
  };

  return (
    <>
      <Head>
        <title>노란공테니스 YTRP - 포핸드</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-center items-center py-2 mx-auto h-full w-full overflow-y-auto relative">
        {questions.map((value, i) => {
          if (questionIndex === i) {
            return (
              <Question
                key={i}
                question={value.question}
                onClickYes={onClickYes}
                onClickNo={onClickNo}
                show={true}
              ></Question>
            );
          }
        })}
      </div>
    </>
  );
};

export default index;
