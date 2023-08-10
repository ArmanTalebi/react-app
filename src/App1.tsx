import { useEffect, useRef, useState } from "react";
import Navbar from "./component/Navbar";
import Card from "./component/Card";
import ProductList from "./component/ProductList";

const connect = () => console.log("Connecting");
const disconnect = () => console.log("Disconnecting"); // Effect Clean Up
function App1() {
  useEffect(() => {
    connect();

    return () => disconnect();
  }); // Effect Clean Up

  const [category, setCategory] = useState("");

  const [cardItems, setCardItems] = useState([
    "product1",
    "Product2",
    "Product3",
    "Product4",
  ]);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Side effect
    if (ref.current) ref.current.focus(); // For focus on our page when we refresh the page it shows the side we had choosen for focus
  }); // different executes different purposes

  useEffect(() => {
    document.title = "My App";
  }); // different executes different purposes

  return (
    <div>
      <Navbar cardItemCount={cardItems.length} />
      <Card cardItems={cardItems} onClear={() => setCardItems([])} />
      <div className="mb-5">
        <input ref={ref} type="text" className="form-control" />
      </div>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
    </div>
  );
}

export default App1;
