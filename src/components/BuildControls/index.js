import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/burgerActions";
const BuildControls = (props) => {
  const disableIngredients = { ...props.ingredients };
  for (let key in disableIngredients) {
    disableIngredients[key] = disableIngredients[key] <= 0;
  }
  return (
    <div className={css.BuildControls}>
      <p>
        Бургерийн үнэ : <strong>{props.price}</strong>
      </p>
      {Object.keys(props.ingredientNames).map((el) => (
        <BuildControl
          key={el}
          LessIngredient={props.lessIngredient}
          AddIngredient={props.addIngredient}
          disabled={disableIngredients}
          type={el}
          text={props.ingredientNames[el]}
        />
      ))}
      <button
        onClick={props.showConfirmModal}
        disabled={!props.purchasing}
        className={css.OrderButton}
      >
        ЗАХИАЛАХ
      </button>
    </div>
  );
};
//redux-ийн state-ийг дуудаж бургерийн орцуудын мэдээллийг дамжуулахад ашиглана.
const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
    price: state.burgerReducer.totalPrice,
    purchasing: state.burgerReducer.purchasing,
    ingredientNames: state.burgerReducer.ingredientNames,
  };
};

//redux-ийн action-г дуудаж объект дамжуулахад b-г ашиглана.
const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (ortsNer) => dispatch(actions.addIngredient(ortsNer)),
    lessIngredient: (ortsNer) => dispatch(actions.removeIngredient(ortsNer)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);
