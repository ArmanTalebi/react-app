import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
  color?: "secondary" | "primary" | "info"; // we have to use just with these colors
  onClick: () => void;
}
const Button = ({ children, color = "info", onClick }: Props) => {
  return (
    <div
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
