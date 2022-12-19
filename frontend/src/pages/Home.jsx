import React from "react";
import { Container } from "react-bootstrap";
import Category from "../component/Category";
import Header from "../component/Header";
import AllBlogs from "./AllBlogs";

const Home = () => {
  return (
    <div>
      <Header />
      <Container>
        <Category />
        <AllBlogs />
      </Container>
    </div>
  );
};

export default Home;
