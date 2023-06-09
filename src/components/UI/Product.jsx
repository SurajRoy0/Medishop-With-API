import React, { useContext } from "react";

import styles from "./Product.module.css";
import CartContext from "../../Store/cart-context";
import ItemContext from "../../Store/item-context";
const Product = ({ item }) => {
  const cartCtx = useContext(CartContext);
  const itemCtx = useContext(ItemContext);
  const addToCartHandler = () => {
    cartCtx.addItem({
      cartId: item._id,
      name: item.name,
      price: item.price,
      cartAmount: 1,
    });
    itemCtx.removeQuantity(item._id);
  };
  return (
    <li className={styles.list}>
      <h2 className={styles.name}>{item.name}</h2>
      <em className={styles.description}>{item.description}</em>
      <span className={styles.price}>Rs. {item.price}</span>
      <span className={styles.quantity}>{item.quantity}</span>
      <button onClick={addToCartHandler} className={styles["add-to-cart"]}>
        Add To Cart
      </button>
    </li>
  );
};

export default Product;
