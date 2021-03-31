import React from "react";
import styled from "styled-components";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

function Cart({ cartItems }) {
  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.product.price * item.product.quantity;
    });
    return total;
  };

  const getCount = () => {
    let count = 0;

    //loop throught each cart item
    cartItems.forEach((ele) => {
      //add the quantity to the total count
      count += ele.product.quantity;
    });

    return count;
  };

  return (
    <Container>
      <CartItems cartItems={cartItems} />
      <CartTotal totalCount={getCount()} totalPrice={getTotalPrice()} />
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  display: flex;
  padding: 14px 18px 0 14px;
  align-items: flex-start;
`;
