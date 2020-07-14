import React, { Component } from "react";

import Burger from "../../components/Burger";
import BurgerControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";
import * as actions from "../../redux/actions/burgerActions";

class BurgerPage extends Component {
  state = {
    confirmOrder: false,
  };

  componentDidMount = () => {};
  continueOrder = () => {
    this.props.history.push("/shipping");
  };
  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };
  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  render() {
    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              onCancel={this.closeConfirmModal}
              onContinue={this.continueOrder}
            />
          )}
        </Modal>
        <Burger />
        <BurgerControls
          showConfirmModal={this.showConfirmModal}
          LessIngredient={this.props.burgereesOrtsHas}
          AddIngredient={this.props.burgertOrtsNem}
        />
      </div>
    );
  }
}

export default BurgerPage;
