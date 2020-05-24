import styled from "styled-components";

export const NavItem = styled.a`
  color: #fff;
  @media (min-width: 768px) {
    font-size: 1rem;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export default NavItem;
