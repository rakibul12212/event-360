import React from "react";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Container from "../Container";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <Outlet></Outlet>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
