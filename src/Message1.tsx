// let count = 0; // impure
const Message1 = () => {
  let count = 0; //pure
  count++;
  return <div>Message1 {count}</div>;
};

export default Message1;
