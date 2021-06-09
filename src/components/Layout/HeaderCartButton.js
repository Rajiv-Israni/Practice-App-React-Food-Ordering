import React, { useContext, useState, useEffect } from "react";

import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  const [buttonBump, setButtonBump] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const btnClasses = `${classes.button} ${buttonBump ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonBump(true);

    const timer = setTimeout(() => {
      setButtonBump(false);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const numberOfCartItems = items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
