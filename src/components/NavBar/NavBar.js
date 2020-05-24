import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    justify-content: center;
    background: var(--color-background-nav);
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    z-index: 10;

    a {
      font-size: 1rem;
      text-transform: uppercase;
      padding: 1rem 0;
      font-weight: bold;
      text-decoration: none;
      transition: color 0.3s linear;

      &:hover {
        color: #343078;
      }
    }
  }
`;

export default NavBar;
