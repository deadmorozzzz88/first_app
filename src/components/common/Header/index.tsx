import React from "react";
import style from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={style.wrapper}>
      <h1>Header</h1>
    </header>
  );
};

export default Header;
