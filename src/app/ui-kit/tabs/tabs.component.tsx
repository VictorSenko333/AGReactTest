import { FC, memo } from "react";
import * as React from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Tabs } from "@mui/material";
import { TabsProps } from "./tabs.types";

const CustomTabs: FC<TabsProps> = ({ config, setValue, value }) => {

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    return setValue(newValue);
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {config.map(({ label, value }, i) => (
            <Tab key={label} label={label} {...a11yProps(i)} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default memo(CustomTabs);
