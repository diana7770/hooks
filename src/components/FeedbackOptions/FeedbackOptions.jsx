import { nanoid } from "nanoid";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul>
    {options.map((option) => (
      <li key={nanoid()}>
        <button type="button" onClick={(evt) => onLeaveFeedback(evt)}>
          {option}
        </button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;
