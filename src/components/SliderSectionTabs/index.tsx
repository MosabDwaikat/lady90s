import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import TabPanel from "./TabPanel";
import SliderSection from "../SliderSection";
import { TabProps } from "../../staticData/tabs";
import useStyles from "./index.styles";
import { useNavigate } from "react-router-dom";

interface SliderSectionTabsProps {
  title: string;
  content: TabProps[];
}

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
};

const SliderSectionTabs = ({ title, content }: SliderSectionTabsProps) => {
  const [value, setValue] = useState(0);
  const { classes } = useStyles();
  const navigate = useNavigate();

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleTabNavigate = () => {
    navigate(content[value].target);
  };

  return (
    <Box>
      <Box className={classes.titleContainer}>
        <Typography className={classes.tabsTitle}>{title}</Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            sx={{ direction: "ltr" }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs"
            variant="scrollable"
            scrollButtons={true}
            allowScrollButtonsMobile
          >
            {content.map((tab, index) => {
              return <Tab key={index} label={tab.label} {...a11yProps(index)} />;
            })}
          </Tabs>
        </Box>
        {content.map((tab, index) => {
          return (
            <TabPanel key={index} value={value} index={index}>
              <SliderSection content={tab.content} />
            </TabPanel>
          );
        })}
      </Box>
      <Box className={classes.btnPanel}>
        <Button className={classes.tabNavigateBtn} onClick={handleTabNavigate}>
          إختر الشركة التي تبحث عنها
        </Button>
      </Box>
    </Box>
  );
};

export default SliderSectionTabs;
