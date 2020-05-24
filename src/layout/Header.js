import React from "react";
import { NavBar, NavItem, SwitchTheme, BurgerMenu } from "../components";
import routes from "./routes";
import styled from "styled-components";
import { useThemeContext } from "../provider/themeProvider";

const StyledHeaderContainer = styled.div``;

const StyledNavItemWrapper = styled.div`
  margin-left: 10px;
  @media (max-width: 768px) {
    display: flex;
    flex: 1;
    flex-direction: column;
    text-align: center;
  }
`;

const Header = () => {
  const [, toggleTheme] = useThemeContext();
  const [open, setOpen] = React.useState(false);

  return (
    <StyledHeaderContainer>
      <NavBar open={open}>
        <SwitchTheme onChange={toggleTheme} />
        <StyledNavItemWrapper>
          {routes.map(route => (
            <NavItem key={route.label}>{route.label}</NavItem>
          ))}
        </StyledNavItemWrapper>
      </NavBar>

      <BurgerMenu open={open} setOpen={setOpen} />
    </StyledHeaderContainer>
  );
};

export default Header;
