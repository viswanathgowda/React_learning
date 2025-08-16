export function Button({ children, style, evnt }) {
  return (
    <button className={style} onClick={evnt}>
      {children}
    </button>
  );
}
