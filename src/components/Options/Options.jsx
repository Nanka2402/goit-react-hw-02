import css from "./Options.module.css";

export default function Options({ updateFeedback, total, resetFeedback }) {
  return (
    <div className={css.containerButton}>
      <button
        onClick={() => {
          updateFeedback("good");
        }}
        type="button"
        className={css.optionBtn}
      >
        Good
      </button>
      <button
        onClick={() => {
          updateFeedback("neutral");
        }}
        type="button"
        className={css.optionBtn}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          updateFeedback("bad");
        }}
        type="button"
        className={css.optionBtn}
      >
        Bad
      </button>
      {total ? (
        <button onClick={resetFeedback} type="button">
          Reset
        </button>
      ) : null}
    </div>
  );
}
