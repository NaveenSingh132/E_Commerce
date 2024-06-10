import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import logo from './images/WhatsApp Image 2024-06-08 at 13.28.57.jpeg';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={logo} alt="my logo img" className="logo" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 6.5rem;
    width: 25rem;
    
    // border-radius: 10px 100px / 120px;
  }
`;
export default Header;