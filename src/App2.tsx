// import { useState } from "react";
// import Button1 from "./component/Button/Button1";
// import Card from "./component/Card";
// import { produce } from "immer";
function App2() {
  // const [game, setGames] = useState({
  //   id: 2,
  //   player: {
  //     name: "Peter",
  //   },
  // });
  // const handleClick2 = () => {
  //   setGames({
  //     ...game,
  //     player: {
  //       ...game.player,
  //       name: "Arman",
  //     },
  //   });
  // };

  // const [pizza, setPizza] = useState({
  //   name: "Spicy Pepperoni",
  //   toppings: ["Mushroom"],
  // });
  // const handleClick3 = () => {
  //   setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  // };

  // const [card, setCards] = useState({
  //   discount: 0.1,
  //   items: [
  //     { id: 1, title: "Product 1", quantity: 1 }, // just changing this to number two
  //     { id: 2, title: "Product 2", quantity: 1 },
  //   ],
  // });
  // const handleClick4 = () => {
  //   setCards({
  //     ...card,
  //     items: card.items.map((item) =>
  //       item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
  //     ),
  //   }); //  in here we use map because we have two objects and we wanted change just one of them
  // };

  return (
    <div>
      {/* <Button1 onClick={handleClick4}> Click Me</Button1> */}
    </div>
  );
}

export default App2;
