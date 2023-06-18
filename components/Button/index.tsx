import styles from "./button.module.scss";

type ButtonVariant = "default" | "arrow";

type ButtonProps = {
  children: React.ReactNode;
  onClick(): void;
  loading?: boolean;
  variant?: ButtonVariant;
};

export function Button({
  children,
  onClick,
  loading,
  variant = "default",
}: ButtonProps) {
  function getClass() {
    return variant == "default" ? styles.button : styles.arrow;
  }
  return (
    <button className={getClass()} onClick={() => onClick()}>
      {children}
      {loading && "..."}
    </button>
  );
}
