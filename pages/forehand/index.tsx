import Question from "../../components/Question";
import { questions } from "../../components/data";

const index = () => {
  return (
    <div className="flex flex-col items-center py-2 mx-auto h-full w-full overflow-y-auto relative">
      {questions.map((value, i) => {
        return (
          <Question
            key={i}
            question={value}
            onCLickYes={() => {}}
            onClickNo={() => {}}
          ></Question>
        );
      })}
    </div>
  );
};

export default index;
