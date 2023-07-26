import { useState } from "react";
import Navbar from "./component/Navbar";
import Card from "./component/Card";

function App1() {
  const [cardItems, setCardItems] = useState(["product1", "Product2"]);
  return (
    <div>
      <Navbar cardItemCount={cardItems.length} />
      <Card cardItems={cardItems} onClear={() => setCardItems([])} />
    </div>
  );
}

export default App1;
