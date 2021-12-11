import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LikesTab from "../../Pages/MainPages/MyAccount/Tabs/LikesTab";
import MediaTab from "../../Pages/MainPages/MyAccount/Tabs/MediaTab";
import PostsTab from "../../Pages/MainPages/MyAccount/Tabs/PostsTab";
import Tagged from "../../Pages/MainPages/MyAccount/Tabs/TaggedTab";

const Tab = createMaterialTopTabNavigator();

function AccountTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: "bold",
          color: "black",
          textTransform: "none",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "black",
          borderBottomWidth: 4,
          width: 70,
          marginHorizontal: 10,
        },
        tabBarStyle: {
          height: 50,
          elevation: 0,
          borderBottomWidth: 0.5,
          borderBottomColor: "grey",
        },
      }}
    >
      <Tab.Screen name="Posts" component={PostsTab} />
      <Tab.Screen name="Media" component={MediaTab} />
      <Tab.Screen name="Likes" component={LikesTab} />
      <Tab.Screen name="Tagged" component={Tagged} />
    </Tab.Navigator>
  );
}

export default AccountTabs;
