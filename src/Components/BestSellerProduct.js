import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";
import { db } from "../firebase";

function BestSellerProduct() {
  const [bestSellingProducts, setBestSellingProduct] = useState([]);

  const addTocart = (product) => {
    const cartItem = db.collection("cartItems").doc(product.id);
    cartItem.get().then((doc) => {
      if (doc.exists) {
        cartItem.update({
          quantity: doc.data().quantity + 1,
        });
      } else {
        db.collection("cartItems").doc(product.id).set({
          name: product.items.name,
          price: product.items.price,
          image: product.items.image,
          quantity: 1,
        });
      }
    });
  };

  const getBestSellingProducts = () => {
    db.collection("bestSellerItems").onSnapshot((snapshot) => {
      let bestSoldProducts = [];
      bestSoldProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        items: doc.data(),
      }));
      setBestSellingProduct(bestSoldProducts);
    });
  };

  useEffect(() => {
    getBestSellingProducts();
  }, []);

  return (
    <Container>
      <HeaderText>Best Seller Products</HeaderText>
      <Content>
        {bestSellingProducts.map((product) => (
          <ProductInfo>
            <ProductImage src={product.items.image} alt="image"></ProductImage>
            <ItemInfo>
              <Price>
                <NumberFormat
                  value={product.items.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
              </Price>
              <Rating>
                {Array(product.items.rating)
                  .fill()
                  .map((rating) => (
                    <span>⭐</span>
                  ))}
              </Rating>
            </ItemInfo>
            <AddSection>
              <AddToCartButton onClick={() => addTocart(product)}>
                Add To Cart
              </AddToCartButton>
            </AddSection>
          </ProductInfo>
        ))}
      </Content>
    </Container>
  );
}

export default BestSellerProduct;

const Container = styled.div``;

const HeaderText = styled.h2``;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;
  margin-right: 10px;
  border-radius: 4px;
`;

const Content = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
`;

const ProductImage = styled.img`
  object-fit: contain;
  max-height: 250px;
  transition: transform 450ms;
`;

const ItemInfo = styled.div`
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
`;

const Price = styled.h4`
  flex: 1;
`;

const Rating = styled.div``;

const AddSection = styled.div`
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
