//PascalCasing
function Message() {
  // JSX : javascript XML
  const name = "Arman";
  if (name) return <h1>Hello {name}</h1>; // yani agar truthy bashe arman
  return <h1>Hello Peyman</h1>; // Qeyre on peyman
}
export default Message;
