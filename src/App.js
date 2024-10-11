import "./App.css";
import { useState, useEffect } from "react";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const addFeedback = (evt) => {
    const feedbackType = evt.target.textContent.toLowerCase();

    if (feedbackType === "good") {
      setGood((prevGood) => prevGood + 1);
    } else if (feedbackType === "neutral") {
      setNeutral((prevNeutral) => prevNeutral + 1);
    } else if (feedbackType === "bad") {
      setBad((prevBad) => prevBad + 1);
    }

    setTotal((prevTotal) => prevTotal + 1);
  };

  useEffect(() => {
    setPositivePercentage(Math.round((good / total) * 100));
  }, [good, total]);

  return (
    <>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          options={["Good", "Neutral", "Bad"]}
          onLeaveFeedback={(evt) => {
            addFeedback(evt);
          }}
        />
      </Section>

      <Section title={"Statistics"}>
        {total === 0 ? (
          <Notification />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </>
  );
};

export default App;
