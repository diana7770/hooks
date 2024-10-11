import { nanoid } from "nanoid";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul>
    <li key={nanoid()}>Good: {good}</li>
    <li key={nanoid()}>Neutral: {neutral}</li>
    <li key={nanoid()}>Bad: {bad}</li>
    <li key={nanoid()}>Total: {total}</li>
    <li key={nanoid()}>Positive feedback: {positivePercentage}%</li>
  </ul>
);

export default Statistics;
