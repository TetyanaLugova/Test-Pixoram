import React from "react";
import css from "./CategoryFilter.module.css";

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className={css.filter}>
      <button
        className={`${css.button} ${selectedCategory === "" ? css.active : ""}`}
        onClick={() => onSelectCategory("")}
      >
        Усі
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`${css.button} ${
            selectedCategory === category ? css.active : ""
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
