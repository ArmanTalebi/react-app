import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "secondary" | "primary" | "info"; // we have to use just with these colors
  onClick: () => void;
}

const Button1 = ({ children, color, onClick }: Props) => {
  return (
    <div className="btn btn-primary" onClick={onClick}>
      {children}
    </div>
  );
};

export default Button1;
