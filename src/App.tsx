// import Message from "./Message"; // . : yani az khode hamon folder
import Message1 from "./Message1";
import Button1 from "./component/Button/Button1";
import { useState } from "react";
import { produce } from "immer"; // for simplify and update objects of array(library)
import Alert from "./component/Alert";
import Button from "./component/Button/Button";
import ListGroup from "./component/ListGroup/ListGroup";
import Expandable from "./component/Expandable";
import react from "react";
import Form from "./component/Form";
import Like from "./component/Like/Like";
import ExpendList from "./expense-tracker/components/ExpendList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
// import categories from "./expense-tracker/categories";

function App() {
  const [selectCategory, setSelectCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Milk",
      amount: 10,
      category: "Groceries",
    },
    {
      id: 2,
      description: "Movie",
      amount: 15,
      category: "Entertainment",
    },
    {
      id: 3,
      description: "Electricity",
      amount: 100,
      category: "Utilities",
    },
    {
      id: 4,
      description: "Milk",
      amount: 25,
      category: "Groceries",
    },
  ]);
  const visibleExpenses = selectCategory
    ? expenses.filter((e) => e.category === selectCategory)
    : expenses; //  baraye ine k har moqe ma category i moshakhas kardim on category o neshon bede v agar ham hichi o entekhab nakardim hamr neshon bede

  // const [drink, setDrink] = useState({
  //   title: "Americano",
  //   price: 5,
  // });
  // const handleClick = () => {
  //   setDrink({ ...drink, price: 6 }); // ina baraye button 1 hast
  // };

  const [bugs, setBugs] = useState([
    { id: 1, title: "Option1", fixed: false },
    { id: 2, title: "Option2", fixed: false },
  ]);
  const handleClick = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    ); //instead top line we use immer like this
  };

  // const [costumer, setCostumer] = useState({
  //   name: "John",
  //   address: {
  //     zipCode: 34349,
  //     city: "New York",
  //   },
  // });

  // const handleClick1 = () => {
  //   setCostumer({
  //     ...costumer,
  //     address: {
  //       ...costumer.address,
  //       zipCode: 34350,
  //     },
  //   });
  // }; for nesting and changing the objecting of a constant

  // const [person, setPerson] = useState({
  //   firstName: "",
  //   lastName: "",
  // });

  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = react.useState(false);

  return (
    <div>
      <Message1 />
      <ListGroup
        items={items}
        heading="cities"
        onSelectItem={handleSelectItem}
      />

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Click On It
      </Button>
      <br />
      <br />
      <Like onClick={() => console.log("Clicked")}></Like>
      <br />
      <br />

      {/* {{drink.price}} */}

      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "fixed" : "new"}
        </p>
      ))}

      <Button1 onClick={handleClick}> Click Me</Button1>
      <br />
      <br />
      <Expandable heading="Expandable" maxChars={10}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio voluptate
        vero nesciunt, tempora, in quo reprehenderit adipisci quas provident
        eveniet tempore fugiat laudantium neque placeat. Dolores asperiores
        veniam nesciunt ipsum?
      </Expandable>
      <Form />
      <br />
      <br />
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectCategory(category)}
        />
      </div>
      <ExpendList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}
export default App;
