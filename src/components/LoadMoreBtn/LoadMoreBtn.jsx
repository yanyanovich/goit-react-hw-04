import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ children, onClick, disabled }) {
  return (
    <button className={css.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
