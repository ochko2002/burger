import React from "react";
import css from "./style.module.css";

const BuildControl = props => (
  <div className={css.BuildControl}>
    <div className={css.Label}>{props.text}</div>
    <button
      disabled={props.disabled[props.type]}
      onClick={() => props.LessIngredient(props.type)}
      className={css.Less}
    >
      Хасах
    </button>
    <button
      onClick={() => props.AddIngredient(props.type)}
      className={css.More}
    >
      Нэмэх
    </button>
  </div>
);

export default BuildControl;
