import React from "react";

import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Burger = (props) => {
  const items = Object.entries(props.ingredients);
  let content = [];
  items.map((el) => {
    for (let i = 0; i < el[1]; i++)
      content.push(<BurgerIngredient key={`${el[0]}${i + 1}`} type={el[0]} />);
  });

  if (content.length === 0)
    content = <p>Хачиртай талхныхаа орцыг сонгоно уу!...</p>;
  return (
    <div className={css.Burger}>
      <BurgerIngredient type="bread-top" />
      {content}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
  };
};
//b буюу export default deer connect дотор a, b гэж бичиж байсанд b-г ашиглахгүй. Учир нь ямар нэгэн action үйлдлийг Burger хийхгүй.
export default connect(mapStateToProps)(withRouter(Burger));
