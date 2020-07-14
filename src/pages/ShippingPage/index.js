import React from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import { Route } from "react-router-dom";
import ContacData from "../../components/ContactData";

class ShippingPage extends React.Component {
  cancelOrder = () => {
    this.props.history.push("/");
  };

  showContactData = () => {
    this.props.history.replace("/shipping/contact");
  };
  render() {
    return (
      <div className={css.ShippingPage}>
        <p style={{ fontSize: "22px" }}>
          <strong>Таны захиалга амттай байх болно гэж найдаж байна...</strong>
        </p>
        <p style={{ fontSize: "22px" }}>
          <strong>Дүн : {this.props.price}</strong>
        </p>
        <Burger />
        <Button
          clicked={this.cancelOrder}
          btnType="Danger"
          text="ЗАХИАЛГА ЦУЦЛАХ"
        />
        <Button
          clicked={this.showContactData}
          btnType="Success"
          text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ"
        />
        <Route path="/shipping/contact">
          <ContacData />
        </Route>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    price: state.burgerReducer.totalPrice,
  };
};
export default connect(mapStateToProps)(ShippingPage);
