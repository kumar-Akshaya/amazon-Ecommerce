import React from "react";
import styled from "styled-components";
import { db } from "../firebase";
import NumberFormat from "react-number-format";

function Product({ title, price, rating, image, id }) {
  const addTocart = () => {
    const cartItem = db.collection("cartItems").doc(id);
    cartItem.get().then((doc) => {
      if (doc.exists) {
        cartItem.update({
          quantity: doc.data().quantity + 1,
        });
      } else {
        db.collection("cartItems").doc(id).set({
          name: title,
          price: price,
          image: image,
          quantity: 1,
        });
      }
    });
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Price>
        <NumberFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />
      </Price>
      <Rating>
        {Array(rating)
          .fill()
          .map((rating) => (
            <span>⭐</span>
          ))}
      </Rating>
      <Image
        // src="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX342_.jpg"
        src={image}
        alt="Product image"
      />
      <ActionSection>
        <AddToCartButton onClick={addTocart}>Add To Cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  background-color: white;
  z-index: 100;
  flex: 1;
  max-height: 400px;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span``;
const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
`;
const Rating = styled.div``;
const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`;

const ActionSection = styled.div`
  display: grid;
  place-items: center;
  margin-top: 12px;
`;

const AddToCartButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 2px solid #a38734;
  border-radius: 2px;
  cursor: pointer;
`;
