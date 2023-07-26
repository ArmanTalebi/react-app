// import { Fragment } from "react";
import { useState } from "react";
import styles from "./ListGroup.module.css";
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
  active: boolean;
}

// items: [], heading: string
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // useState is a Hook
  const [selectedIndex, setSelectedIndex] = useState(0);

  // const message = items.length === 0 ? <p>No Item Found</p> : null; // Injuri mitonim tamiz tar bokonim functionemono

  return (
    <>
      <h1>{heading}</h1>
      <BsTelegram />
      {items.length === 0 && <p>No Item Found</p>}
      <List className={[styles.container].join("")}>
        {items.map((item, index) => (
          <InlineList
            style={{ fontSize: "15px" }} // It's not common and suggest way
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
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
