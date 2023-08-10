// let count = 0; // impure
const Message1 = () => {
  let count = 5; //pure
  count++;
  return <div>Message {count}</div>;
};

export default Message1;
