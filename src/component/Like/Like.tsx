import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(true); // true = red , false = none

  const toggle = () => {
    setStatus(!status);
    onClick();
  }; //Soal az fardinnnn

  if (status)
    return (
      <AiFillHeart color="#ff6b81" size={40} className="" onClick={toggle} />
    );

  return <AiOutlineHeart size={40} onClick={toggle} />;
};

export default Like;
