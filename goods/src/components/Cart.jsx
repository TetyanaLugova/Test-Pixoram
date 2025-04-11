import React from "react";
import css from "./Cart.module.css";
import { FaShoppingCart } from "react-icons/fa";

export default function Cart({ cart, onRemoveFromCart }) {
  return (
    <div className={css.cartContainer}>
      <h2 className={css.cartTitle}>
        <FaShoppingCart className={css.cartIcon} />
        {cart.length}
      </h2>
      {cart.length > 0 && (
        <ul className={css.carList}>
          {cart.map((item) => (
            <li className={css.cartItem} key={item.id}>
              {item.title} - ${item.price}
              <button
                className={css.cartBtn}
                onClick={() => onRemoveFromCart(item.id)}
              >
                Видалити
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
