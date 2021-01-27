import Question from "../../components/Question";
import QuestionStart from "../../components/QuestionStart";
import { questions } from "../../components/technicData";
import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export type Question = {
  question: string;
  score: string;
  answer: boolean;
  confirm: boolean;
};

const index = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [nowQuestions, setNowQuestions] = useState<Question[]>(questions);

  const router = useRouter();

  const onClickYes = () => {
    if (questionIndex + 1 !== questions.length) {
      if (
        nowQuestions[questionIndex].confirm === true &&
        nowQuestions[questionIndex].answer === true
      ) {
        router.push(
          `/result/?menu=technic&score=${nowQuestions[questionIndex].score}`
        );
      } else {
        setQuestionIndex(questionIndex + 1);
      }
    }
    if (questionIndex + 1 === questions.length) {
      router.push(`/result/?menu=technic&score=5.0`);
    }
  };
  const onClickNo = () => {
    if (questionIndex + 1 !== questions.length) {
      if (
        nowQuestions[questionIndex].confirm === true &&
        nowQuestions[questionIndex].answer === false
      ) {
        router.push(
          `/result/?menu=technic&score=${nowQuestions[questionIndex].score}`
        );
      } else {
        setQuestionIndex(questionIndex + 1);
      }
    }
    if (questionIndex + 1 === questions.length) {
      router.push(`/result/?menu=technic&score=5.0`);
    }
  };

  return (
    <>
      <Head>
        <title>노란공테니스 YTRP - 테크닉</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-center items-center py-2 mx-auto h-full w-full overflow-y-auto relative -mt-8">
        {questions.map((value, i) => {
          if (questionIndex === i) {
            if (i === 0) {
              return (
                <QuestionStart
                  key={i}
                  question={value.question}
                  onClickYes={onClickYes}
                  onClickNo={onClickNo}
                  show={true}
                  score={value.score}
                ></QuestionStart>
              );
            } else {
              return (
                <Question
                  key={i}
                  question={value.question}
                  onClickYes={onClickYes}
                  onClickNo={onClickNo}
                  show={true}
                  score={value.score}
                ></Question>
              );
            }
          }
        })}
      </div>
    </>
  );
};

export default index;
