import { Item } from "./Item";
import React from "react";

export const ItemList = ({ list }) => {
  return (
    <>
      {list.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </>
  );
};
