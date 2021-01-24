import Question from "../../components/Question";
import { questions } from "../../components/data";
import { useState } from "react";
import Head from "next/head";

export type Question = {
  question: string;
  score: number;
  answer: boolean;
};

const index = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const [nowQuestions, setNowQuestions] = useState<Question[]>(questions);

  const [endTest, setEndTest] = useState(false);

  const onClickYes = () => {
    if (questionIndex + 1 !== questions.length) {
      setQuestionIndex(questionIndex + 1);
      let changeAnswer = nowQuestions.map((value, i) => {
        if (i === questionIndex) {
          value.answer = true;
          return value;
        } else {
          return value;
        }
      });
      setNowQuestions(changeAnswer);
    }
  };
  const onClickNo = () => {
    if (questionIndex !== 0) {
      setQuestionIndex(questionIndex + 1);
      let changeAnswer = nowQuestions.map((value, i) => {
        if (i === questionIndex) {
          value.answer = false;
          return value;
        } else {
          return value;
        }
      });
      setNowQuestions(changeAnswer);
    }
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
