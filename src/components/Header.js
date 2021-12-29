import React from "react";
import troleyImg from '../images/iknow.png'

const Header = ({title}) => {
  return (
    <header>
      <h1>{title} <img style={{width: '35px'}} src={troleyImg} alt="" /></h1>
    </header>
  );
};


export default Header;
