import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ReviewHomePost from "../../Pages/MainPages/Home/ReviewHomePost";
import Main from "../../Pages/MainPages/Main";
import ReviewSection from "../../Pages/MainPages/SearchPage/searchPages/ReviewSection";

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
        <Stack.Screen name="ReviewSection" component={ReviewSection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
