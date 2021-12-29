import React from "react";

const Footer = ({ length }) => {
  
  return (
    <footer>
      <p>{length} List {length === 1 ? "item" : "items"}</p>
      <span style={{
        fontSize: '12px',
        color: "white",
        fontWeight: "100"
      }}>designed by Otinomo.</span>
    </footer>
  );
};

export default Footer;
 