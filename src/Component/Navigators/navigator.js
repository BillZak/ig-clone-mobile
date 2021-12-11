import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import pages
import HomePage from "../../Pages/MainPages/Home/homePage";
import SearchPage from "../../Pages/MainPages/SearchPage/searchPage";
import Notification from "../../Pages/MainPages/Notifications/notificationPage";
import MyAccount from "../../Pages/MainPages/MyAccount/myAccountPage";
import TopTabNavigator from "./TopTabNavigator";
//import vector icons
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        style: { backgroundColor: "white" },
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: (props) => (
            <IconAntDesign
              color={props.color}
              style={styles.bottomicons}
              name="home"
            />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{
          tabBarIcon: (props) => (
            <IconAntDesign
              color={props.color}
              style={styles.bottomicons}
              name="search1"
            />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: (props) => (
            <IconAntDesign
              color={props.color}
              style={styles.bottomicons}
              name="notification"
            />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          tabBarIcon: (props) => (
            <IconFontAwesome
              color={props.color}
              style={styles.bottomicons}
              name="user-circle-o"
            />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomicons: {
    fontSize: 25,
  },
});

export default TabNavigator;
