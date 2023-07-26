// import { ReactNode } from "react";
import { useState } from "react";

interface Props {
  heading: string;
  maxChars?: number;
  children: string; //vaqti ma az children b jay text estefade mikonim yani mitonim dakhel tag alert dar app.tsx code html benevisim
}

const Expandable = ({ heading, children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false); // Question form fardin why we use false insted true??????????????

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <>
      <h1>{heading}</h1>
      <div>
        {text}...
        <button
          className="btn btn-info"
          onClick={() => setExpanded(!isExpanded)}
        >
          {isExpanded ? "Less" : "More"}
        </button>
      </div>
    </>
  );
};

export default Expandable;
