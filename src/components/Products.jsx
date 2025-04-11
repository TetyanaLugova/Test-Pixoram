import React from "react";
import css from "./Products.module.css";

export default function ProductCard({ product, onAddToCart }) {
  const { image, title, price, category } = product;

  return (
    <div className={css.productCard}>
      <img className={css.productImage} src={image} alt={title} />
      <div className={css.productInfo}>
        <h2 className={css.productTitle}>{title}</h2>
        <div className={css.productDetails}>
          <p className={css.productCategory}>{category}</p>
          <p className={css.productPrice}>${price}</p>
        </div>
        <button className={css.productBtn} onClick={() => onAddToCart(product)}>
          Додати до кошика
        </button>
      </div>
    </div>
  );
}
