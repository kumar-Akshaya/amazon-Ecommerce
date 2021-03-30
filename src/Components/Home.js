import React from "react";
import styled from "styled-components";
import Product from "./Product";

function Home() {
  return (
    <Container>
      <Banner></Banner>
      <Content>
        <Product />
        <Product />
      </Content>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

const Banner = styled.div`
  background-image: url(https://images-eu.ssl-images-amazon.com/images/G/31/prime/AcqBAU/1500x600-PrimeFreetrial._CB658316842_.jpg%22%20height=%22600px%22%20width=%221500px%22%20data-a-hires=%22https://images-eu.ssl-images-amazon.com/images/G/31/prime/AcqBAU/3000x1200-PrimeFreetrial._CB658316842_.jpg);
  min-height: 600px;
  background-position: center;
  background-size: cover;
  z-index: 1;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Content = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -350px;
  display: flex;
`;
