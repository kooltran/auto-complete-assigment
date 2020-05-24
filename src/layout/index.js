import React from "react";
import Header from "./Header";
import Layout from "./Layout";
import GlobalTheme from "../theme/globalTheme";

import { useThemeContext } from "../provider/themeProvider";

const AppLayout = ({ children }) => {
  const [lightMode] = useThemeContext();
  return (
    <>
      <GlobalTheme light={lightMode} />
      <Layout>
        <Header />
        {children}
      </Layout>
    </>
  );
};

export default AppLayout;
