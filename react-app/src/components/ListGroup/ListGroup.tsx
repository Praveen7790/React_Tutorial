import { useState } from "react";
import styles from "./ListGroup.module.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Policies Found</p>}
      {/* <ul className={[styles["list-group"], styles["container"]].join(" ")}> */}
      <List>
        {items.map((passwordpolicy, index) => (
          <ListItem
            active={index === selectedIndex}
            // className={
            //   selectedIndex === index
            //     ? "list-group-item active"
            //     : "list-group-item"
            // }
            key={passwordpolicy}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(passwordpolicy);
            }}
          >
            {passwordpolicy}
          </ListItem>
        ))}
      </List>
      {/* </ul> */}
    </>
  );
}

export default ListGroup;
