import React from "react";
import ItemList from "./ItemList";


const Content = ({items, handleCheck, handleDelete}) => {
  return (
    <>
      <p>
        Happy Shopping <span style={{fontSize:"24px"}}> &#128512; &#128525;</span>
      </p>
      { items.length ? (
          <ItemList
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ) : (
          <p style={{ marginTop : "4rem"}}>your shopping cart is empty, please add items to your list so you dont
        lose track of what you intend to buy. </p>
      )} 
    </>
  );
};
 
export default Content;
