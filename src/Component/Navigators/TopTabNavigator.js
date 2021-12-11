import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Activity from "../../Pages/MainPages/Notifications/Notif.Tabs/ActivityTab";
import MentionsTab from "../../Pages/MainPages/Notifications/Notif.Tabs/MentionsTab";

const Tab = createMaterialTopTabNavigator();

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
