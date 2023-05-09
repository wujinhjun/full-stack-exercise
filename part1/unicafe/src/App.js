import { useState } from "react";
import Feedback from "./Components/Feedback";
import Statistics from "./Components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const allCount = good - bad;
  const positive = (100 * good) / all;

  const handlerGood = () => {
    setGood(good + 1);
  };

  const handlerNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handlerBad = () => {
    setBad(bad + 1);
  };

  const feedbacks = [
    {
      name: "good",
      value: good,
      handler: handlerGood,
    },
    {
      name: "neutral",
      value: neutral,
      handler: handlerNeutral,
    },
    {
      name: "bad",
      value: bad,
      handler: handlerBad,
    },
  ];

  return (
    <>
      <Feedback feedbacks={feedbacks}></Feedback>
      <h1>statistics</h1>
      <Statistics
        lines={feedbacks}
        all={all}
        allCount={allCount}
        positive={positive}
      />
    </>
  );
};

export default App;
