import React from "react";
import styled from "styled-components";

import { auth, provider } from "../firebase";

function Login({ setUser }) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        let user = result.user;
        let newUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <Container>
      <Content>
        <AmazonLogo>
          <img
            src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
            alt="amazon-logo"
          />
        </AmazonLogo>
        <h1>Sign into amazon</h1>
        <LoginButton onClick={signIn}>Sign in with Google</LoginButton>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
`;

const Content = styled.div`
  padding: 100px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0.5px 3px gray;
  text-align: center;
`;

const AmazonLogo = styled.div`
  margin-bottom: 40px;
  img {
    width: 200px;
  }
`;
const LoginButton = styled.button`
  margin-top: 50px;
  background-color: #f0c14b;
  height: 40px;
  border-radius: 4px;
  border: 2px solid #a88734;
  padding: 4px 8px;
  cursor: pointer;
`;
