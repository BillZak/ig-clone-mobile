//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// create a component
const Messages = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back-outline"
          size={30}
          color="black"
        />
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 20 }}>
            Messages
          </Text>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  navbar: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "silver",
    paddingHorizontal: 20,
  },
  messageboard: {},
});

//make this component available to the app
export default Messages;
