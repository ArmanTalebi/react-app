// import { Fragment } from "react";
import { useState } from "react";
import styled from "styled-components"; // For css in js (it's a library)
import { BsTelegram } from "react-icons/bs";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;
const InlineList = styled.li<ListItemProps>`
  padding: 10px 10px;
  background: ${(props) => (props.active ? "red" : "none")};
`;

//interface for active
interface ListItemProps {
  active: boolean; // Because it's true or false
}

// items: [], heading: string
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; // Because onSelectItem is a function
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // useState is a Hook
  const [selectedIndex, setSelectedIndex] = useState(2);

  return (
    <>
      <h1>{heading}</h1>
      <BsTelegram />
      {items.length === 0 && <p>No Item Found</p>}
      <List>
        {items.map((item, index) => (
          <InlineList
            style={{ fontSize: "15px" }} // It's not common and suggest way
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index); // For when we clicking active will work
              onSelectItem(item); // For when clicking it shows on console screen
            }}
          >
            {item}
          </InlineList>
        ))}
      </List>
    </>
  );
}
export default ListGroup;
