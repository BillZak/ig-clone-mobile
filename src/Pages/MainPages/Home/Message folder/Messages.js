//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// create a component
const Messages = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-outline"
        size={24}
        color="black"
      />
      <Text>Messages</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default Messages;
