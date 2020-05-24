import React from "react";
import Icon from "@ant-design/icons";
import { Switch } from "antd";

import { ReactComponent as Sun } from "../../assets/img/sun.svg";
import { ReactComponent as Moon } from "../../assets/img/moon.svg";

export const SwitchTheme = props => {
  return (
    <Switch
      {...props}
      checkedChildren={<Icon component={Sun} />}
      unCheckedChildren={<Icon component={Moon} />}
      defaultChecked
    />
  );
};

export default SwitchTheme;
