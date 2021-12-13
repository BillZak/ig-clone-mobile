import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ReviewHomePost from "../../Pages/MainPages/Home/ReviewHomePost";
import Main from "../../Pages/MainPages/Main";
import Health from "../../Pages/MainPages/SearchPage/searchPages/Health";
import Believe from "../../Pages/MainPages/SearchPage/searchPages/Believe";
import HeartBreak from "../../Pages/MainPages/SearchPage/searchPages/HeartBreak";
import Life from "../../Pages/MainPages/SearchPage/searchPages/Life";
import Love from "../../Pages/MainPages/SearchPage/searchPages/Love";
import Money from "../../Pages/MainPages/SearchPage/searchPages/Money";
import Motivation from "../../Pages/MainPages/SearchPage/searchPages/Motivation";
import Work from "../../Pages/MainPages/SearchPage/searchPages/Work";

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
        <Stack.Screen name="Believe" component={Believe} />
        <Stack.Screen name="Health" component={Health} />
        <Stack.Screen name="HeartBreak" component={HeartBreak} />
        <Stack.Screen name="Life" component={Life} />
        <Stack.Screen name="Love" component={Love} />
        <Stack.Screen name="Money" component={Money} />
        <Stack.Screen name="Motivation" component={Motivation} />
        <Stack.Screen name="Work" component={Work} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
