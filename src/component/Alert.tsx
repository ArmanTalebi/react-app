import { ReactNode } from "react";

interface Props {
  children: ReactNode; //vaqti ma az children b jay text estefade mikonim yani mitonim dakhel tag alert dar app.tsx code html benevisim
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
