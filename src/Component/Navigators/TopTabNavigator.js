import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Activity from "../../Pages/MainPages/Notifications/Notif.Tabs/ActivityTab";
import MentionsTab from "../../Pages/MainPages/Notifications/Notif.Tabs/MentionsTab";
import Top from "../../Pages/MainPages/SearchPage/Tabs/Top";
import People from "../../Pages/MainPages/SearchPage/Tabs/People";
import Recent from "../../Pages/MainPages/SearchPage/Tabs/Recent";

const Tab = createMaterialTopTabNavigator();

export function SearchPageTabs({ title }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 18,
          color: "black",
          textTransform: "none",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "black",
          borderBottomWidth: 4,
          width: 80,
          marginHorizontal: 20,
        },
        tabBarStyle: {
          height: 50,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen name="Top" title={title} component={Top} />

      <Tab.Screen name="Recent" component={Recent} />
      <Tab.Screen name="People" component={People} />
    </Tab.Navigator>
  );
}

function TopTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 18,
          fontWeight: "bold",
          color: "black",
          textTransform: "none",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "black",
          borderBottomWidth: 3,
          width: 140,
          marginHorizontal: 20,
        },
        tabBarStyle: {
          height: 50,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Mentions" component={MentionsTab} />
    </Tab.Navigator>
  );
}

export default TopTabNavigator;
