import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
//import pages
import HomePage from "../Pages/homePage";
import SearchPage from "../Pages/searchPage";
import Notification from "../Pages/notificationPage";
import MyAccount from "../Pages/myAccountPage";
//import vector icons
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
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
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomicons: {
    fontSize: 25,
  },
});

export default TabNavigator;
