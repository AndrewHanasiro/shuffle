import styles from "./button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  loading: boolean;
  onClick(): void;
};

export function Button({ children, loading, onClick }: ButtonProps) {
  return (
    <button className={styles.button} onClick={() => onClick()}>
      {children}
      {loading && "..."}
    </button>
  );
}
