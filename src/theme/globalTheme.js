import { createGlobalStyle } from "styled-components";
import { ifProp } from "styled-tools";
import lightTheme from "./lightThemeVariables";
import darkTheme from "./darkThemeVariables";

export const GlobalTheme = createGlobalStyle`
  html {
    --color-background: ${ifProp("light", lightTheme.text, darkTheme.text)};
    --color-text-nav: ${ifProp("light", lightTheme.text, darkTheme.text)};
    --color-background-nav: ${ifProp(
      "light",
      lightTheme.navBg,
      darkTheme.navBg
    )};
    --img-background: url(${ifProp(
      "light",
      lightTheme.backgroundImg,
      darkTheme.backgroundImg
    )});
  }
`;

export default GlobalTheme;
