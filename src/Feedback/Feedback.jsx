import css from "./Feedback.module.css";
export default function Feedback({
  good,
  neutral,
  bad,
  total,
  positiveFeedbacks,
}) {
  return (
    <div className={css.contItem}>
      <ul className={css.feedList}>
        <li className={css.feedItem}>Good: {good}</li>
        <li className={css.feedItem}>Neutral:{neutral} </li>
        <li className={css.feedItem}>Bad:{bad}</li>
        <li className={css.feedItem}>Total: {total}</li>
        <li className={css.feedItem}>Positive: {positiveFeedbacks}% </li>
      </ul>
    </div>
  );
}
