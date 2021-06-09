import React from "react";

import appImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals-App</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={appImage}></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
