import React from "react";
import Layout from "./layout";
import styled from "styled-components";
import MyAutoComplete from "./components/autoComplete/autoComplete";

import { ThemeProvider } from "./provider/themeProvider";

const StyledAutoCompleteContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    top: 10%;
    height: 100%;
    align-items: center;
  }
`;

export default function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Layout>
          <StyledAutoCompleteContainer>
            <MyAutoComplete />
          </StyledAutoCompleteContainer>
        </Layout>
      </ThemeProvider>
    </div>
  );
}
