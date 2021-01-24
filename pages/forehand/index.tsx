import Question from "../../components/Question";
import { questions } from "../../components/data";
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
        router.push(`/result/?score=${nowQuestions[questionIndex].score}`);
      } else {
        setQuestionIndex(questionIndex + 1);
      }
    }
    if (questionIndex + 1 === questions.length) {
      router.push(`/result/?score=6.0`);
    }
  };
  const onClickNo = () => {
    if (questionIndex + 1 !== questions.length) {
      if (
        nowQuestions[questionIndex].confirm === true &&
        nowQuestions[questionIndex].answer === false
      ) {
        router.push(`/result/?score=${nowQuestions[questionIndex].score}`);
      } else {
        setQuestionIndex(questionIndex + 1);
      }
    }
    if (questionIndex + 1 === questions.length) {
      router.push(`/result/?score=6.0`);
    }
  };

  return (
    <>
      <Head>
        <title>노란공테니스 YTRP - 포핸드</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-center items-center py-2 mx-auto h-full w-full overflow-y-auto relative -mt-8">
        {questions.map((value, i) => {
          if (questionIndex === i) {
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
        })}
      </div>
    </>
  );
};

export default index;
