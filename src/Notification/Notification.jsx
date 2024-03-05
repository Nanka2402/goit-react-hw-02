import css from "./Notification.module.css";
export default function Notification({ messege }) {
  return (
    <>
      <div className={css.containerNotif}>
        <h2 className={css.title}>{messege}</h2>
      </div>
    </>
  );
}
