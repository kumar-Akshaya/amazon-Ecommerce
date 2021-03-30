import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

function CartItems({ cartItems }) {
  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr />
      <CartContainer>
        {cartItems.map((item) => (
          <CartItem id={item.id} item={item.product} />
        ))}
      </CartContainer>
    </Container>
  );
}

export default CartItems;

const Container = styled.div`
  flex: 0.8;
  margin-right: 18px;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  padding-bottom: 5px;
`;

const CartContainer = styled.div``;
