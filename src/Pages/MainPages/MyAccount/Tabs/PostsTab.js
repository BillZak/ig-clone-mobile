//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import IconAntDesign from "react-native-vector-icons/AntDesign";

// create a component
const PostsTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <IconMaterialIcons style={{ fontSize: 30 }} name="add" />
        <Text>Upload something for the first time</Text>
      </View>
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
  post: {
    justifyContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default PostsTab;
