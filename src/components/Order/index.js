import React from "react";
import css from "./style.module.css";
const Order = (props) => {
  return (
    <div className={css.Order}>
      <p>
        Орц : Гахайн мах : {props.order.orts.bacon}, Салад :{" "}
        {props.order.orts.salad}, Үхийн мах : {props.order.orts.meet}, Бяслаг :
        {props.order.orts.cheese}
      </p>
      <p>
        Хүргэх хаяг : {props.order.address.name} | {props.order.address.street}|{" "}
        {props.order.address.city}
      </p>
      <p>
        Үнийн дүн : <strong>{props.order.dun}₮</strong>
      </p>
    </div>
  );
};

export default Order;
