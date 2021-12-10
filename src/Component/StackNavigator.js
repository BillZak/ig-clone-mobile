import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ReviewHomePost from "../Pages/ReviewHomePost";
import Main from "../Pages/Main";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="ReviewHome" component={ReviewHomePost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
